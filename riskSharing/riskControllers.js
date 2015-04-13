var riskControllers = angular.module('riskControllers', []);

riskControllers.controller('entitiesCtrl', function ($scope, $log, risksFactory){
  risksFactory.listEntities(function(entities) {
    $scope.entities = entities;
    });
  risksFactory.listOrigines(function(origines) {
    $scope.origines = origines;
  });
  risksFactory.listBl(function(bls) {
    $scope.bls    = bls;
  });
  risksFactory.listBddf(function(bddfs) {
    $scope.bddfs  = bddfs;
  });
  risksFactory.listOthers(function(others) {
    $scope.others = others;
  });
	 $log.info("Services successFully called !!!!") ;
  	 $scope.defaultOrigine    =  { origineName: "Select an  origine Name"  };
  	 $scope.defaultEntity     =  { entityName:  "Select an  entity  Name"  };
  	 $scope.defaultBl         =  { bddfName:    "Select a   bddf" 			};
  	 $scope.defaultOther      =  { otherName:   "Select Other Banque"      };
  	 $scope.currentEntityText =  { text : 'Select an Entity' };
     $scope.defaultEntityText 	= 'Select an Entity';
     $scope.defaultOrigineText 	= 'Select an Origine' ;
     $scope.changeEntityNewValue	='Select an Entity';
     $scope.changeEntityOldValue	='Select an Entity';
     $scope.changeOrigineNewValue	='';
     $scope.entitiesRow = [1];
     $scope.origineRow = [1];
     $scope.blRow = [1] ;
     $scope.bddfRow = [1];
     $scope.otherRow = [1];
     $scope.initEnt = [1];



  	 $log.info("Default initialisation performed   !!!!") ;



     $scope.changeEntity= function(option){
     	$log.info("Change value is now  ===" + option) ;
     	$scope.changeEntityNewValue=option ;
     	$log.info("changeEntityNewValue===" + $scope.changeEntityNewValue) ;
     }
     $scope.changeOrigine= function(option){
     	$log.info("Change value is now  ===" + option) ;
     	$scope.changeOrigineNewValue=option ;
     	$log.info("changeEntityNewValue===" + $scope.changeOrigineNewValue) ;
     }


    $scope.cloneEntity = function () {
    		$log.info(" $scope.changeEntityNewValue inside clone ====" + $scope.changeEntityNewValue ) ;
    		//if (  $scope.changeEntityNewValue.length <=1  || $scope.changeEntityNewValue === $scope.defaultEntityText /*|| $scope.changeEntityNewValue === $scope.changeEntityOldValue*/ ) {
    		//	$log.info("Don t add entity , and return ") ;
    		//	return ;
    		//} ;
            //var row = ( $scope.entitiesRow[$scope.entitiesRow.length - 1 ] + 1 ) ;
            var row = ($scope.changeEntityNewValue) ;
             $scope.entitiesRow.push(row);
             $scope.changeEntityOldValue=$scope.changeEntityNewValue;
             $scope.changeEntityNewValue='';
          }

    $scope.removeEntity= function (entity) {
    	    $log.info("Entity to Remove   ===>" + entity) ;
    	    index =  $scope.entitiesRow.indexOf(entity);
    	    $log.info("Entity to Remove index  ===>" + index) ;
           // if ( $scope.entitiesRow.length == 1 ) {$scope.defaultEntityText 	= 'Select an Entity';  return ;}
            
            $scope.entitiesRow.splice(index , 1); // Plus One because we add one element at initialisation.
          }

          $scope.deleteRow = function(rowNo) {
    		/*$scope.items.splice($scope.newitem);*/
   		 $scope.entitiesRow.splice(rowNo, 1);
    		$log.info('- clicked in row ' + rowNo);
};

    $scope.cloneOrigine = function () {
            if (  $scope.changeOrigineNewValue.length <= 1 || $scope.changeOrigineNewValue === $scope.defaultOrigineText  ) {
    			$log.info("Don t add entity , and return ") ;
    			return ;
    		} ;
            var row = ( $scope.origineRow[$scope.origineRow.length - 1 ] + 1 ) ;
             $scope.origineRow.push(row);
             $scope.changeOrigineNewValue='';
          }

    $scope.removeOrigine = function (origine) {
            if ( $scope.origineRow.length <= 1 ) { return ;}
            index =  $scope.origineRow.indexOf(origine)
            $scope.origineRow.splice(index, 1);
          }


    $scope.cloneBl = function () {
            var row = ( $scope.blRow[$scope.blRow.length - 1 ] + 1 ) ;
             $scope.blRow.push(row);
          }

    $scope.removeBl = function (bl) {
            if ( $scope.blRow.length <= 1 ) { return ;}
            index =  $scope.blRow.indexOf(bl)
            $scope.blRow.splice(index, 1);
          }

    $scope.cloneBddf = function () {
            var row = ( $scope.bddfRow[$scope.bddfRow.length - 1 ] + 1 ) ;
             $scope.bddfRow.push(row);
          }

    $scope.removeBddf = function (bddf) {
            if ( $scope.bddfRow.length <= 1 ) { return ;}
            index =  $scope.bddfRow.indexOf(bddf)
            $scope.bddfRow.splice(index, 1);
          }


    $scope.cloneOther = function () {
            var row = ( $scope.otherRow[$scope.otherRow.length - 1 ] + 1 ) ;
             $scope.otherRow.push(row);
          }

    $scope.removeOther = function (other) {
            if ( $scope.otherRow.length <= 1 ) { return ;}
            index =  $scope.otherRow.indexOf(other)
            $scope.otherRow.splice(index, 1);
          }

    $scope.removeTable   = function () {
            var cptO = $scope.origineRow.length ;
     		var cptE = $scope.entitiesRow.length ;
            $log.info('cptO ===' + cptO) ;
            $log.info('cptE ===' + cptE) ;
            for ( var iOrigine =1 ; iOrigine <= cptO; iOrigine++ ) {
            	$scope.origineRow.splice(iOrigine, cptO);
            }
            for ( var iEntity =1 ; iEntity <= cptE ; iEntity++ ) {
            	$scope.entitiesRow.splice(iEntity, cptE);
            }

          }

    $scope.duplicateTable = function () {
    	    var cptO = $scope.origineRow.length ;
     		var cptE = $scope.entitiesRow.length ;
           $log.info('cptO ===' + cptO) ;
           $log.info('cptE ===' + cptE) ;
           if ( cptO > 0) {
            for ( var o =0    ; o < cptO ; o++ ) {
            	var rowOrigine = ( $scope.origineRow[$scope.origineRow.length - 1 ] + 1 ) ;
             $scope.origineRow.push(rowOrigine);
            	}
            }
            if ( cptE > 0) {
            for ( var e =0   ; e<cptE  ; e++ ) {
            	var rowEntity = ( $scope.entitiesRow[$scope.entitiesRow.length - 1 ] + 1 ) ;
                $scope.entitiesRow.push(rowEntity);
              }
           }

          }

          window.scope = $scope ;
});


