'use strict';

/**
 * @ngdoc function
 * @name topNApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the topNApp
 */
angular.module('topNApp')
  .controller('MainCtrl', function ($scope) {
    $scope.uploadedFile = null;
    $scope.getTopN = function() {
      $scope.output = [];
      for (var i = 0; i < $scope.uploadedFile.length; i++) {
        var num = parseInt($scope.uploadedFile[i]);
        if (num) {
          $scope.output.push(num);
        }
      }
      $scope.output.sort(function(a, b){return b-a;});
      $scope.output = $scope.output.slice(0, $scope.N);
    };

  });
