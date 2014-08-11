(function() {
  var scope = this;
  (function (global, factory) {
    /*global define*/
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return factory(global);
      });
    } else if (typeof exports !== 'undefined') {
      module.exports = factory(global);
    } else {
      global.<%= name %> = factory(global);
    }
  }(scope, function () { // function (global) { if you need noConflict access or something
    'use strict';

    // code goes here
    var <%= name %> = function (options) {

    };

    return <%= name %>;
  }));
})();
