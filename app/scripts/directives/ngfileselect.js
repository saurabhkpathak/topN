'use strict';

/**
 * @ngdoc directive
 * @name topNApp.directive:ngFileSelect
 * @description
 * # ngFileSelect
 */
angular.module('topNApp')
  .directive('ngFileSelect', function() {
    return {
      scope: {
        ngFileSelect: '='
      },
      link: function(scope, element) {
        element.bind('change', function(changeEvent) {
          var reader = new FileReader();
          reader.onload = function(loadEvent) {
            scope.$apply(function() {
              scope.ngFileSelect = loadEvent.target.result.split('\n');
            });
          };
          reader.readAsText(changeEvent.target.files[0]);
          // var LineByLineReader = require('line-by-line'),
          //   lr = new LineByLineReader('sample.txt', {
          //     skipEmptyLines: true
          //   });
          // lr.on('line', function(line) {
          //   // pause emitting of lines...
          //   lr.pause();
          //
          //   // ...do your asynchronous line processing..
          //   setTimeout(function() {
          //
          //     // ...and continue emitting lines.
          //     lr.resume();
          //   }, 100);
          // });
        });
      }
    };
  });
