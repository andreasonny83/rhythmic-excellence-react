import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNews } from '../actions/getNews';
import News from './News';

const NewsWithLoader = ChildComponent =>
  class extends Component {
    componentDidMount() {
      this.props.getNews();
    }

    render() {
      return this.props.news.loading ?
        <div>Loading...</div> :
        <ChildComponent news={this.props.news.items} />;
    }
  }

const mapStateToProps = ({news}) => ({
  news,
});

const mapDispatchToProps = {
  getNews,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsWithLoader(News));
