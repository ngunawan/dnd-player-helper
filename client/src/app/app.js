var angular = require('angular');
require('angular-sanitize');
require('angular-route');
require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-material');



var app = angular.module('app', ['ngRoute', 'ngSanitize', 'ngMaterial']);



//controllers ======================================
require('./controllers/mainController.js');
//require('./controllers/characterController.js');
//require('./controllers/equipmentsController.js');

require('./controllers/spellsListController.js');
require('./controllers/weaponsListController.js');
require('./controllers/armorsListController.js');
require('./controllers/packsListController.js');
require('./controllers/goodsListController.js');
require('./controllers/ridablesListController.js');
require('./controllers/itemsListController.js');
require('./controllers/toolsListController.js');




//components =======================================
require('./components/spellsList.js');
require('./components/weaponsList.js');
require('./components/armorsList.js');
require('./components/packsList.js');
require('./components/goodsList.js');
require('./components/ridablesList.js');
require('./components/itemsList.js');
require('./components/toolsList.js');


//require('./components/containerComponent.js');


//services =========================================



//routes ===========================================
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "character.html",
//            controller: "characterController"
        })
        .when("/spells", {
            templateUrl: "spells.html",
        })
        .when("/equipments", {
            templateUrl: "equipments.html",
//            controller: "equipmentsController"
        })


    // use the HTML5 History API
    $locationProvider.html5Mode(true);

});
