'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$log', '$http', function($scope, $log, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $log.info('Load data terminated');
  $scope.orderProp = 'age';
}]);
/*
var PhoneListCtrl = function($scope, $log, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $log.info('Load data terminated');
  $scope.orderProp = 'age';
}*/
