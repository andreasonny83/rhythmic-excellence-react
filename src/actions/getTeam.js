import axios from 'axios';
import data from '../data.json';

export const GET_TEAM = '@@GET_TEAM';

export const getTeam = () => dispatch =>
  axios
    .get(`${data.settings.apiUrl}posts?categories=3&per_page=10`)
    .then(res =>
      res.data.map(({ id, content, title, featured_media }) => {
        return {
          id,
          content: content.rendered,
          name: title.rendered,
          media: featured_media
        };
      })
    )
    .then(members =>
      Promise.all(
        members.map(res => {
          if (res.media) {
            return axios
              .get(`${data.settings.apiUrl}media/${res.media}`)
              .then(image => {
                const { media, ...dataWithoutMedia } = res;

                return {
                  ...dataWithoutMedia,
                  picture: `${data.settings.assetsUrl}${image.data.source_url}`
                };
              });
          } else {
            const { media, ...dataWithoutMedia } = res;
            return dataWithoutMedia;
          }
        })
      )
    )
    .then(members =>
      dispatch({
        type: GET_TEAM,
        payload: members
      })
    );
