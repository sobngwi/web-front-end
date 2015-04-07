'use strict';

/* Controllers */
// the var phonecatApp is the name of our module
var phonecatApp = angular.module('phonecatApp', []); // register the controlleur on angular as a module.

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'IPHONE 5S™',
     'snippet': 'The Best of telephone.'}
  ];
});
phonecatApp.controller('sobngwi-ctrl', function($scope) {
  $scope.telephones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'},
     {'name': 'IPHONE 5S™',
     'snippet': 'The Best of telephone.'}
  ];
});
