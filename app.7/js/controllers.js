'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$log' , '$routeParams',
  function($scope,$log, $routeParams) {
    $log.info ( 'routeParams==' + $routeParams.toString() );
    $scope.phoneId = $routeParams.phoneId;
  }]);
