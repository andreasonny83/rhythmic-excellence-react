import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './Team.css';

const TeamMember = ({id, name, content, picture, active, onActivate}) =>
  <div className={ active ? 'active TeamMember': 'TeamMember' }
       onClick={() => onActivate(id)}
       key={`team-member-${id}`}>
    <div className="picture">
      <img alt={name} src={picture} width="200px" />
    </div>
    <h4>
      { ReactHtmlParser(name) }
    </h4>
    <div className="content">
      { ReactHtmlParser(content) }
    </div>
  </div>;

class TeamList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: null
    };
  }

  setActive(id) {
    this.setState({
      active: id
    });
  }

  render() {
    if (this.props.data && this.props.data.length > 0) {
      return (
        <div className="TeamList">
          {this.props.data.map(({id, name, content, picture}) =>
            <TeamMember key={id}
                        id={id}
                        name={name}
                        content={content}
                        picture={picture}
                        onActivate={this.setActive.bind(this)}
                        active={this.state.active === id} />
          )}
        </div>
      );
    }

    return (
      <div className="TeamList">
        <span>No Result</span>
      </div>
    );
  }
}

export default TeamList;
