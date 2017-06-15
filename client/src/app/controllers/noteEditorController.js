angular.module('app').controller('noteEditorController', function noteEditorController($scope, noteFactory) {

    $scope.format = function (command) {
        document.execCommand(command, false, null);
    }

    $scope.Note = noteFactory;
    

});
