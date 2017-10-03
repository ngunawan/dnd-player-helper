angular.module('app').controller('toolsListController', function toolsListController($scope, $http, addToCharacterService, Purchase) {

    $scope.query = {};
    $scope.queryBy = "";
    $scope.loading = true;
    $scope.sortVal = {
        artisan: '',
        disguise: '',
        forgery: '',
        gaming: '',
        herbalism: '',
        music: '',
        navigator: '',
        poisoner: '',
        thieves: ''
    }

    //get all tools
    //-------------------------
    $http({
        method: 'GET',
        url: '/tools'
    }).then(function successCallback(response) {
        $scope.toolsList = response.data;
        console.log($scope.toolsList);
        
        $scope.loading = false;

    }, function errorCallback(response) {
        console.log(response);
    });

    //keep track of tool purchase
    //-------------------------
    $scope.Purchase = Purchase;
    $scope.editPurchase = function (tool) {
        $scope.Purchase.name = tool.name;
        $scope.Purchase._id = tool._id;
        $scope.Purchase.unit_cost = tool.cost;
        $scope.Purchase.amount = 1;
    }

    //to show add equipment dialogue
    //-------------------------
    $scope.showAddEquipment = addToCharacterService.showAddEquipment;


});
