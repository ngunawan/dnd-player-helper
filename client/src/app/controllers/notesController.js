angular.module('app').controller('notesController', function notesController($scope, $http, $document, Note, $mdDialog) {

    //Note service to keep track of current note
    //-------------------------
    $scope.Note = Note;

    //get all notes
    //-------------------------
    $http({
        method: 'GET',
        url: '/notes'
    }).then(function successCallback(response) {
        $scope.notesList = response.data;
        console.log($scope.notesList)

    }, function errorCallback(response) {
        console.log(response);
    });

    //to save note
    //-------------------------
    $scope.saveNote = function (note) {

        $http({
            //get note by id
            method: 'GET',
            url: '/notes/' + note._id

        }).then(function successCallback(response) {

                if (!(Array.isArray(response.data))) {
                    //if response is not empty open dialogue
                    let confirm = $mdDialog.confirm()
                        .title('Would you like to create new or update?')
                        .ok('Create New')
                        .cancel('Update');

                    $mdDialog.show(confirm).then(
                        //if 'Create New' add new note
                        function () {
                            $http({
                                method: 'POST',
                                url: '/notes',
                                data: {
                                    name: note.name,
                                    content: note.content
                                }
                            }).then(function successCallback(response) {
                                console.log("success");
                                $scope.Note._id = response.data._id;
                                $scope.notesList.push({
                                    "name": response.data.name,
                                    "content": response.data.content,
                                    "_id": response.data._id
                                })

                            }, function errorCallback(response) {
                                console.log(response);
                            });

                        },
                        //if 'Update' update existing note
                        function () {
                            //update note in current notesList
                            for (let i = 0; i < $scope.notesList.length; i++) {
                                if ($scope.notesList[i]._id == note._id) {
                                    $scope.notesList[i].name = $scope.Note.name;
                                    $scope.notesList[i].content = $scope.Note.content;
                                }
                            }
                            //update note in database
                            $http({
                                method: 'PUT',
                                url: '/notes/' + note._id,
                                data: {
                                    name: note.name,
                                    content: note.content
                                }
                            }).then(function successCallback(response) {
                                console.log("updated");

                            }, function errorCallback(response) {
                                console.log(response);
                            });
                        });


                } else {
                    //if response is empty create new note
                    $http({
                        method: 'POST',
                        url: '/notes',
                        data: {
                            name: note.name,
                            content: note.content
                        }
                    }).then(function successCallback(response) {
                        console.log("success");
                        $scope.Note._id = response.data._id;
                        $scope.notesList.push({
                            "name": response.data.name,
                            "content": response.data.content,
                            "_id": response.data._id
                        })

                    }, function errorCallback(response) {
                        console.log(response);
                    });

                }

            },
            function errorCallback(response) {
                console.log(response);
            });


    }

    //to remove note
    //-------------------------
    $scope.removeNote = function (id) {
        //remove from current notesList
        for (let i = 0; i < $scope.notesList.length; i++) {
            if ($scope.notesList[i]._id == id) {
                $scope.notesList.splice(i, 1);
            }
        }
        //remove from database
        $http({
            method: 'DELETE',
            url: '/notes/' + id
        }).then(function successCallback(response) {
            console.log("removed");

        }, function errorCallback(response) {
            console.log(response);
        });

    }

    //to edit note
    //-------------------------
    $scope.editNote = function (id) {

        //update Note service to current note
        $http({
            method: 'GET',
            url: '/notes/' + id
        }).then(function successCallback(response) {
            $scope.Note.name = response.data.name;
            $scope.Note.content = response.data.content;
            $scope.Note._id = response.data._id;

        }, function errorCallback(response) {
            console.log(response);
        });
    }



});
