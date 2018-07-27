import axios from 'axios';
import data from '../data.json';

export const GET_NEWS = '@@GET_NEWS';

export const getNews = () => dispatch =>
  axios
    .get(`${data.apiUrl}posts?categories=7&per_page=1&page=1&orderby=date`)
    .then(res =>
      res.data.map(({ id, content, date, title }) => {
        const regex = /\/content\/uploads/gim;
        const subst = `${data.assetsUrl}content/uploads/`;
        const newContent = content.rendered.replace(regex, subst);

        return {
          id,
          date,
          content: newContent,
          title: title.rendered
        };
      })
    )
    .then(items =>
      dispatch({
        type: GET_NEWS,
        payload: {
          loading: false,
          items
        }
      })
    );
