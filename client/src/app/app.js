var angular = require('angular');
require('angular-sanitize');
require('angular-route');
require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-material');



var app = angular.module('app', ['ngRoute', 'ngSanitize', 'ngMaterial']);



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
            templateUrl: "spells.html",
            controller:"spellsListController"
        })

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

});
