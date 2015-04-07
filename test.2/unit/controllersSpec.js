'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){

    beforeEach(module('phonecatApp'));

    it('should create "phones" model with 3 phones', inject(function($controller) {
      var scope = {},
          ctrl = $controller('sobngwi-ctrl', {$scope:scope});

      expect(scope.telephones.length).toBe(4);
      expect(scope.telephones.length).toBe(4);
      var name = 'Nexus S' ;
      console.log('scope.telephones[0].name ==' + name) ;
      console.log('scope.telephones[3].name.toString()==' + scope.telephones[3].name.toString()) ;
      expect(scope.telephones[0].name.toString()).toBe(name);
      var phone1 = scope.telephones.pop().name.toString() ;
      console.log('scope.telephones.length==' + scope.telephones.length) ;
      expect(phone1).toBe('IPHONE 5S™');
    }));

  });
});
