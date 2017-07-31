angular.module('app').controller('characterController', function characterController($routeParams, $http, $scope) {
    
    $scope.showall = false;

    $http({
        method: 'GET',
        url: '/characters/' + $routeParams.characterId
    }).then(function successCallback(response) {
                        console.log(response.data);

        $scope.currentCharacter = response.data;
        console.log(response.data);
        cumulateFeatures($scope.currentCharacter.class);
        cumulateTraits($scope.currentCharacter.race);

    }, function errorCallback(response) {
        console.log(response);
    });

    $scope.classFeatures = [];
    $scope.racialTraits = [];

    function cumulateFeatures(classes) {
        console.log(classes.length);
        for (let i = 0; i < classes.length; i++) {
            console.log(i);
            
            $http({
                method: 'GET',
                url: '/classes/name/' + classes[i].name
            }).then(function successCallback(response) {
                console.log(response.data);
                for (let j = 0; j < response.data[0].features.length; j++) {
                    $scope.classFeatures.push(response.data[0].features[j]);
                }
                console.log(response);

            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }

    function cumulateTraits(race) {
        $http({
            method: 'GET',
            url: '/races/name/' + race
        }).then(function successCallback(response) {
            for (let j = 0; j < response.data[0].traits.length; j++) {
                $scope.racialTraits.push(response.data[0].traits[j]);
            }
            console.log(response);

        }, function errorCallback(response) {
            console.log(response);
        });
    }








});
