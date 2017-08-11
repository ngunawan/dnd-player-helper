angular.module('app').controller('addToCharacterController', function addToCharacterController($scope, $mdDialog, $http, Purchase) {

    $scope.option = "";
    $scope.Purchase = Purchase;
    $scope.warning = "";

    //get all character
    //-------------------------
    $http({
        method: 'GET',
        url: '/characters'
    }).then(function successCallback(response) {
        $scope.charactersList = response.data;
        console.log($scope.charactersList)

    }, function errorCallback(response) {
        console.log(response);
    });


    //dialogue functions
    //-------------------------
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.add = function (object, option) {
        console.log("OBJECT IS");
        console.log(object);
        if (option == 'buy') {
            if (character.gold >= Purchase.total_cost) {
                $mdDialog.hide({
                    object: object,
                    option: option
                })
            } else {
                $scope.warning = "Not enough gold."
            }
        } else {
            $mdDialog.hide({
                object: object,
                option: option
            })
        }
    };

});
