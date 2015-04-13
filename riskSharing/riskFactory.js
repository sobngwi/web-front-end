
var riskFactory = angular.module('riskFactory', []);
       riskFactory.factory('risksFactory', function($http){
  return {
    listOrigines: function (callback){
      $http({
        method: 'GET',
        url: 'origines.json',
        cache: true
      }).success(callback);
    },
    listEntities: function (callback){
      $http({
        method: 'GET',
        url: 'entities.json',
        cache: true
      }).success(callback);
    },
    listBl: function (callback){
      $http({
        method: 'GET',
        url: 'bls.json',
        cache: true
      }).success(callback);
    },
    listBddf: function (callback){
      $http({
        method: 'GET',
        url: 'bddfs.json',
        cache: true
      }).success(callback);
    },
    listOthers: function (callback){
      $http({
        method: 'GET',
        url: 'others.json',
        cache: true
      }).success(callback);
    }
  };
});

riskFactory.factory('risksService', function($http){

        var cachedData;

        function getData(callback){
          if(cachedData) {
            callback(cachedData);
          } else {
            $http.get('entities.json').success(function(data){
              cachedData = data;
              callback(data);
            });
          }
        }

        return {
          listEntities: getData,
          find: function(name, callback){
            getData(function(data) {
              var entity = data.filter(function(entry){
                return entry.entityName === name;
              })[0];
              callback(entity);
            });
          }
        };
});

