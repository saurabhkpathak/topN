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
    $scope.$watch('uploadedFile', function(n) {
      $scope.output = n;
    });
  });
