import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './Team.css';

const TeamMember = ({id, name, content, picture, active, onActive, onDismiss}) =>
  <div className={ active ? 'active TeamMember': 'TeamMember' }
       key={`team-member-${id}`}>
    <div className={ active ? 'TeamMember__background visible': 'TeamMember__background' }
         onClick={() => onDismiss() }></div>
    <div className="TeamMember__container">
      <div className="TeamMember__dismiss">
        <button onClick={() => onDismiss()}>
          <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Bold_Close" transform="translate(-23.000000, -23.000000)" fill="#221F20">
                <polygon transform="translate(32.142136, 32.142136) rotate(45.000000) translate(-32.142136, -32.142136)"
                         points="30.1421356 22.1421356 30.1421356 30.1421356 22.1421356 30.1421356 22.1421356 34.1421356
                          30.1421356 34.1421356 30.1421356 42.1421356 34.1421356 42.1421356 34.1421356 34.1421356 42.1421356
                          34.1421356 42.1421356 30.1421356 34.1421356 30.1421356 34.1421356 22.1421356">
                </polygon>
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div className="TeamMember__container__picture" onClick={() => onActive(id)}>
        <img alt={name} src={picture} width="200px" />
      </div>
      <h4>
        { ReactHtmlParser(name) }
      </h4>
      <div className="TeamMember__container__content">
        { ReactHtmlParser(content) }
      </div>
    </div>
  </div>;

const TeamList = ({data, activeItem, onActive, onDismiss}) => {
  if (data && data.length > 0) {
    return (
      <div className="TeamList">
        {data.map(({id, name, content, picture}) =>
          <TeamMember key={id}
                      id={id}
                      name={name}
                      content={content}
                      picture={picture}
                      active={Number(activeItem) ===  id}
                      onActive={() => onActive(id)}
                      onDismiss={() => onDismiss()} />
        )}
      </div>
    );
  }

    return (
      <div className="TeamList">
        <span>No Result</span>
      </div>
    );
  };

export default TeamList;
