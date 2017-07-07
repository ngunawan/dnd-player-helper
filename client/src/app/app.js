var angular = require('angular');
require('angular-sanitize');
require('angular-route');
require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-material');

//modules ==========================================
var app = angular.module('app', ['ngRoute', 'ngSanitize', 'ngMaterial']);

//others =======================================
require('./js/filters.js');

//directives =======================================
require('./directives/contentEditable.js');

//services =========================================
require('./services/Note.js');
require('./services/addToCharacterService.js');
require('./services/Purchase.js');

//controllers ======================================
require('./controllers/mainController.js');
require('./controllers/charactersListController.js');
require('./controllers/characterController.js');

require('./controllers/spellsListController.js');
require('./controllers/weaponsListController.js');
require('./controllers/armorsListController.js');
require('./controllers/packsListController.js');
require('./controllers/goodsListController.js');
require('./controllers/ridablesListController.js');
require('./controllers/itemsListController.js');
require('./controllers/toolsListController.js');

require('./controllers/notesController.js');
require('./controllers/noteEditorController.js');

require('./controllers/addToCharacterController.js');


//components =======================================
require('./components/spellsList.js');
require('./components/weaponsList.js');
require('./components/armorsList.js');
require('./components/packsList.js');
require('./components/goodsList.js');
require('./components/ridablesList.js');
require('./components/itemsList.js');
require('./components/toolsList.js');

require('./components/noteEditor.js');


//routes ===========================================
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "charactersList.html",
            controller: "charactersListController"
        })
        .when("/spells", {
            templateUrl: "spells.html",
        })
        .when("/equipments", {
            templateUrl: "equipments.html",
        })
        .when("/notes", {
            templateUrl: "notes.html",
            controller: "notesController"
        })
        .when("/character/:characterId", {
            templateUrl: "character.html",
            controller: "characterController"
        })
        .otherwise({
            redirectTo: "/"
        })

    // use the HTML5 History API: allows routing w/o refreshing page
    $locationProvider.html5Mode(true);

});
