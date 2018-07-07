import axios from 'axios';
import { API_ENDPOINT, ASSETS_ENDPOINT } from '../config';

export const GET_TEAM = '@@GET_TEAM';

export const getTeam = () => dispatch =>
  axios.get(`${API_ENDPOINT}posts?categories=3&per_page=10`)
    .then(res => res.data.map(({id, content, title, featured_media}) => {
      return {
        id,
        content: content.rendered,
        name: title.rendered,
        media: featured_media,
      };
    }))
    .then(members => Promise.all(members.map(data => {
      if (data.media) {
        return axios.get(`${API_ENDPOINT}media/${data.media}`)
          .then(image => {
            const {media, ...dataWithoutMedia} = data;

            return {
              ...dataWithoutMedia,
              picture: `${ASSETS_ENDPOINT}${image.data.source_url}`,
            };
          });
      } else {
        const {media, ...dataWithoutMedia} = data;
        return dataWithoutMedia;
      }
    })))
    .then(members => dispatch({
      type: GET_TEAM,
      payload: members,
    }));
