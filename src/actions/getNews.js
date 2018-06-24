import axios from 'axios';
import { API_ENDPOINT, ASSETS_ENDPOINT } from '../config';

export const GET_NEWS = '@@GET_NEWS';

export const getNews = () => dispatch =>
  axios
    .get(`${API_ENDPOINT}posts?categories=7&per_page=1&page=1&orderby=date`)
    .then(res => res.data.map(({id, content, date, title}) => {
      const regex = /\/content\/uploads/gim;
      const subst = `${ASSETS_ENDPOINT}content/uploads/`;
      const newContent = content.rendered.replace(regex, subst);

      return {
        id,
        date,
        content: newContent,
        title: title.rendered,
      };
    }))
    .then(items => dispatch({
      type: GET_NEWS,
      payload: {
        loading: false,
        items,
      },
    }));
