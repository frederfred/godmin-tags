window.Godmin = window.Godmin || {};

Godmin.Tags = (function() {
  function initialize() {
    initializeState();
  }

  function initializeState() {
    initializeTagger($('[data-behavior~=tagger]'));
  }

  function initializeTagger($el, options) {
    var defaults = {
      delimiter: ', ',
      create: true,
      valueField: 'name',
      labelField: 'name',
      searchField: 'name',
      load: function(query, callback) {
        if (!query.length) return callback();
        callback(
          $el.data('collection').map(function(tag) {
            return { name: tag };
          })
        );
      }
    };
    Godmin.SelectBoxes.initializeSelectBox($el, $.extend(defaults, options));
  }

  return {
    initialize: initialize,
    initializeTagger: initializeTagger
  };
})();

$(function() {
  Godmin.Tags.initialize();
});
