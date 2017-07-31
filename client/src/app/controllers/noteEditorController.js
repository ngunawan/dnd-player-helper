angular.module('app').controller('noteEditorController', function noteEditorController($scope, Note) {

    //contenteditable functions
    //-------------------------
    $scope.format = function (command) {
        document.execCommand(command, false, null);
    }

    //Note service to keep track of current note
    //-------------------------
    $scope.Note = Note;
    

});
