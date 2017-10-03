angular.module('app').controller('equipmentsController', function equipmentsController($scope, $http) {

    $scope.currentEquipmentNav = "armors";
    
    //md-nav require md-nav-click attribute, but is not used
    $scope.placeholder = function() {
        
    }
    
});
