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
          var myFile = changeEvent.target.files[0];
          reader.readAsText(myFile);
          // var size = myFile.size;
          // var chunkSize = 0;
          // while (chunkSize < size) {
          //   var first100 = myFile.slice(chunkSize, chunkSize + 10);
          //   reader.readAsText(first100);
          //   size = size - 10;
          // }
        });
      }
    };
  });
