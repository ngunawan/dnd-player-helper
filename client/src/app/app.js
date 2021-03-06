var angular = require('angular');
require('angular-sanitize');
require('angular-route');
require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-material');

//modules
//-------------------------

var app = angular.module('app', ['ngRoute', 'ngSanitize', 'ngMaterial']);

//filters
//-------------------------

require('./js/filters.js');

//directives
//-------------------------

require('./directives/contentEditable.js');

//services
//-------------------------

require('./services/Note.js');
require('./services/addToCharacterService.js');
require('./services/Purchase.js');
require('./services/characterService.js');


//controllers
//-------------------------

require('./controllers/mainController.js');
require('./controllers/charactersListController.js');
require('./controllers/characterController.js');
require('./controllers/compendiumController.js');
require('./controllers/equipmentsController.js');

require('./controllers/spellsListController.js');
require('./controllers/weaponsListController.js');
require('./controllers/armorsListController.js');
require('./controllers/packsListController.js');
require('./controllers/goodsListController.js');
require('./controllers/ridablesListController.js');
require('./controllers/itemsListController.js');
require('./controllers/toolsListController.js');
require('./controllers/featsListController.js');

require('./controllers/notesController.js');
require('./controllers/noteEditorController.js');

require('./controllers/addToCharacterController.js');
require('./controllers/createCharacterController.js');



//components
//-------------------------

require('./components/spellsList.js');
require('./components/weaponsList.js');
require('./components/armorsList.js');
require('./components/packsList.js');
require('./components/goodsList.js');
require('./components/ridablesList.js');
require('./components/itemsList.js');
require('./components/toolsList.js');
require('./components/featsList.js');

require('./components/noteEditor.js');


//routes 
//-------------------------

app.config(function ($routeProvider, $locationProvider, $mdThemingProvider, $mdProgressCircularProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "charactersList.html",
            controller: "charactersListController"
        })
        .when("/compendium", {
            templateUrl: "compendium.html",
            controller: "compendiumController"
        })
        .when("/feats", {
            templateUrl: "feats.html"
        })
        .when("/spells", {
            templateUrl: "spells.html",
        })
        .when("/equipments", {
            templateUrl: "equipments.html",
            controller: "equipmentsController"
        })
        .when("/notes", {
            templateUrl: "notes.html",
            controller: "notesController"
        })
        .when("/character/:characterId", {
            templateUrl: "character.html",
            controller: "characterController"
        })
        .when("/create-character", {
            templateUrl: "createCharacter.html",
            controller: "createCharacterController"
        })
        .when("/compendium/races/:raceName*", {
            templateUrl: function (urlattr) {
                return "compendium/races/" + urlattr.raceName + ".html";
            },
        })
        .when("/compendium/classes/:className*", {
            templateUrl: function (urlattr) {
                return "compendium/classes/" + urlattr.className + ".html";
            },
        })
        .when("/compendium/backgrounds/:backgroundName*", {
            templateUrl: function (urlattr) {
                return "compendium/backgrounds/" + urlattr.backgroundName + ".html";
            },
        })
//        .otherwise({
//            redirectTo: "/"
//        })

    // use the HTML5 History API: allows routing w/o refreshing page
    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
        .accentPalette('red', {
            'default': 'A700',
            'hue-1': '800',
            'hue-2': '900'
        })
        .primaryPalette('grey', {
            'default': '800',
            'hue-1': '700',
            'hue-2': '900'
        })
        .warnPalette('red', {
            'default': '900'
        });

    $mdProgressCircularProvider.configure({
        progressSize: 60,
        strokeWidth: 10,
        duration: 800,
        durationIndeterminate: 800
    });

});

app.run(function($rootScope, $location, $anchorScroll) {
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        if($location.hash()) {
            $anchorScroll();
        }
    })
})
