angular.module('app').controller('charactersListController', function charactersListController($scope, $compile, $http, $location) {
    
    $scope.unNav = function() {
        $scope.$parent.currentNavItem = '';
    }

    $http({
        method: 'GET',
        url: '/characters'
    }).then(function successCallback(response) {
        $scope.charactersList = response.data;
        console.log($scope.charactersList)

    }, function errorCallback(response) {
        console.log(response);
    });

    $scope.redirectTo = function (characterId) {
        $location.url('/character/' + characterId);
    }


    $scope.createCharacter = function () {
        $http({
            method: 'POST',
            url: '/characters',
            data: {
                name: $scope.name,
                class: [{class_name: $scope.class}],
                race: $scope.race,
                background: $scope.background,
                gold: $scope.gold
            }
        }).then(function successCallback(response) {
            $scope.charactersList.push(response.data);
            //erase current input
            $scope.name = ""; 
            $scope.race = "";
            $scope.class = "";
            $scope.background = "";
            $scope.gold = "";
            
        }, function errorCallback(response) {
            console.log(response);
        });

    }

    $scope.removeCharacter = function (id) {
        $http({
            method: 'DELETE',
            url: '/characters/' + id,
        }).then(function successCallback(response) {
            console.log("removed character");
            for (let i = 0; i < $scope.charactersList.length; i++) {
                if ($scope.charactersList[i]._id == id) {
                    $scope.charactersList.splice(i, 1);
                }
            }
            console.log(response)

        }, function errorCallback(response) {
            console.log(response);
        });

    }


    //add component dynamically to page    
    //  $scope.addComponent = function(tag) {
    //      //create new scope
    //      var newScope = $scope.$new(true, $scope);
    //      //create template
    //      var html = '<' + tag + '></' + tag + '>';
    //      //bind scope to template
    //      var container = angular.element(document.querySelector('container'));
    //      container.append($compile(html)(newScope));   
    //  }


});
