var riskDirectives = angular.module('riskDirectives', []);

riskDirectives.directive("addbuttonsbutton", function(){
  return {
    restrict: "E",
    template: "<button addbuttons class='btn  btn-primary'  style='font-size: 75%;'>AddByDirective</button>"
  }
});

riskDirectives.directive("addbuttons", function($compile, $log){
  return function(scope, element, attrs){
    element.bind("click", function(){
      $log.info("origines == " + scope.origines)
      scope.count++;
      angular.element(
      document.getElementById
      ('space-for-buttons')).append(
      $compile("<div> <tr> <td width='50%'> <td><td width='5%'><select style='width:20em ;' ng-options='entity.entityName as entity.entityName for entity  in entities ' ng-model='opt' ng-change='changeEntity(opt)'>Delete  #"+
      "</td></td>" +
      "<button class='btn  btn-info' ng-click='deleteOrigine(originText)'  style='font-size: 75%;'>X</button> " +  "</td></tr></div>")
      (scope));
    });
  };
});

//Directive for showing an alert on click
riskDirectives.directive("alert", function(){
  return function(scope, element, attrs){
    element.bind("click", function(){
      console.log(attrs);
      alert("This is alert #"+attrs.alert);
    });
  };
});

riskDirectives.directive("remove", function () {
    return function (scope, element, attrs) {
        element.bind ("mousedown", function () {
            scope.remove(element);
            scope.$apply();
        })
    };
});