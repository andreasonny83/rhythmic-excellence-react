import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Topbar.css';

export class Topbar extends Component {
  render() {
    return (
      <div className="Topbar">
        <h1>
          <NavLink className="home" exact to="/app">
            Rhythmic Excellence
          </NavLink>
        </h1>
      </div>
    );
  }
}
