/* jshint node: true */
'use strict';

const Autoprefixer = require('broccoli-autoprefixer');
const defaults = require('lodash/defaults');

module.exports = {
  name: 'duderonomy-ember-autoprefixer',

  included: function(app) {
    this.app = app;

    this._super.included.apply(this, arguments);

    this.options = defaults(this.app.options.autoprefixer || {}, {
      browsers: this.project.targets && this.project.targets.browsers,
      enabled: true
    });

    this.enabled = this.options.enabled;
    delete this.options.enabled;
  },

  postprocessTree: function(type, tree) {
    if (type === 'css' && this.enabled) {
      tree = new Autoprefixer(tree, this.options);
    }

    return tree;
  }
};
