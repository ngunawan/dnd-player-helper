angular.module('app').controller('characterController', function characterController($scope, $compile) {
    
  $scope.addComponent = function(tag) {
      //create new scope
      var newScope = $scope.$new(true, $scope);
      //create template
      var html = '<' + tag + '></' + tag + '>';
      //bind scope to template
      var container = angular.element(document.querySelector('container'));
      container.append($compile(html)(newScope));   
  }
    
    
});