import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const NewsItem = ({id, title, content}) =>
  <div className="NewsItem" key={`news-item${id}`}>
    <span className="title">
      {title}
    </span>
    <div className="content">
      { ReactHtmlParser(content) }
    </div>
  </div>;

const NewsList = ({news}) => {
  if (news && news.length > 0) {
    return (
      <div className="NewsList">
        {news.map(({id, title, content}) =>
          <NewsItem key={id}
                    id={id}
                    title={title}
                    content={content}/>
        )}
      </div>
    );
  }

  return (
    <div className="NewsList">
      <span>No Result</span>
    </div>
  );
};

export default NewsList;
