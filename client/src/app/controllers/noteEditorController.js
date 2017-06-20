angular.module('app').controller('noteEditorController', function noteEditorController($scope, Note) {

    $scope.format = function (command) {
        document.execCommand(command, false, null);
    }

    $scope.Note = Note;
    

});
