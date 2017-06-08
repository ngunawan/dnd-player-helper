var angular = require('angular');
require('angular-sanitize');
require('angular-route');

var app = angular.module('app', ['ngRoute', 'ngSanitize']);



//controllers ======================================
require('./controllers/spellsListController.js');
require('./controllers/mainController.js');
require('./controllers/characterController.js');


//components =======================================
require('./components/spellsListComponent.js');
require('./components/containerComponent.js');


//services =========================================



//routes ===========================================
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "character.html",
            controller: "characterController"
        })
        .when("/spells", {
            templateUrl: "spells.html"
        })

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

});
