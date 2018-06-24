import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTeam } from '../actions/getTeam';
import Team from './Team';

const TeamContainer = ChildComponent =>
  class extends Component {
    componentDidMount() {
      this.props.getTeam();
    }

    render() {
      return this.props.team.loading ?
        <div>Loading...</div> :
        <ChildComponent data={this.props.team.members} />;
    }
  }

const mapStateToProps = ({team}) => ({
  team,
});

const mapDispatchToProps = {
  getTeam,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamContainer(Team));
