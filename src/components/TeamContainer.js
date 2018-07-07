import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTeam } from '../actions/getTeam';
import { activateMember } from '../actions/activateMember';
import { clearActiveMember } from '../actions/clearActiveMember';
import Team from './Team';

const TeamContainer = ChildComponent =>
  class extends Component {
    componentDidMount() {
      this.props.getTeam();
    }

    render() {
      return this.props.team.loading ?
        <div>Loading...</div> :
        <ChildComponent data={this.props.team.members}
                        onActive={this.props.activateMember.bind(this)}
                        onDismiss={this.props.clearActiveMember.bind(this)}
                        activeItem={this.props.team.active} />;
    }
  }

const mapStateToProps = ({team}) => ({
  team,
});

const mapDispatchToProps = {
  getTeam,
  activateMember,
  clearActiveMember,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamContainer(Team));
