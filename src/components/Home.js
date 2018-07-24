import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Home.css';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      show: ''
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ show: 'show' }), 0);
  }

  render() {
    return (
      <div className="Home">
        <div className={this.state.show + ' hero-bg'}>
          <NavLink className="home-link" exact to="/">
            <h1>Rhythmic Excellence</h1>
          </NavLink>
          <img
            className={this.state.show + ' hero-logo'}
            src={`${process.env.PUBLIC_URL}/img/rhythmicexcellence.png`}
            alt="rhythmicexcellence"
          />
        </div>
      </div>
    );
  }
}
