((createClass, undefined) => {
  const TeamPreview = createClass({
    render: function() {
      const entry = this.props.entry;
      const title = entry.getIn(['data', 'title']);
      const image = entry.getIn(['data', 'avatar']);
      const description = this.props.widgetFor('description');

      return h(
        'div',
        { className: 'team' },
        image ? h('img', { src: image.toString(), className: 'avatar' }) : null,
        h('h1', {}, title && title.toUpperCase()),
        h('p', { className: 'description' }, description)
      );
    }
  });

  // Register custom preview Templates
  CMS.registerPreviewStyle('/admin/team.css');
  CMS.registerPreviewTemplate('team', TeamPreview);
})(window.createClass || React.createClass);
