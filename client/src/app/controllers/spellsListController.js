angular.module('app').controller('spellsListController', function spellsListController($scope, $http) {
    
    $scope.query = {};
    $scope.queryBy = 'name';

    $http({
        method: 'GET',
        url: '/spellsList'
    }).then(function successCallback(response) {
        $scope.spellsList = response.data;
        console.log($scope.spellsList)
        
    }, function errorCallback(response) {
        console.log(response);
    });
    
    

});
