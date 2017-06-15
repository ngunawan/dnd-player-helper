angular.module('app').controller('notesController', function notesController($scope, $http, $document, noteFactory, $mdDialog) {

    $scope.Note = noteFactory;

    $http({
        method: 'GET',
        url: '/notes'
    }).then(function successCallback(response) {
        $scope.notesList = response.data;
        console.log($scope.notesList)

    }, function errorCallback(response) {
        console.log(response);
    });



    $scope.save = function (note) {

            $http({ //find note by id
                method: 'GET',
                url: '/notes/' + note._id

            }).then(function successCallback(response) {

//                    console.log(response.data);
                    if (response.data !== undefined) { //if found, update note
//                        console.log("found updating note");

                        let confirm = $mdDialog.confirm()
                            .title('Would you like to create new or update?')
                            .ok('Create New')
                            .cancel('Update');

                        $mdDialog.show(confirm).then(function () {
                            $scope.Note._id = ""; //erase id
                            $http({ //create new note
                                method: 'POST',
                                url: '/notes',
                                data: {
                                    name: note.name,
                                    content: note.content
                                }
                            }).then(function successCallback(response) {
                                console.log("success");
                                $scope.notesList.push({
                                    "name": response.data.name,
                                    "content": response.data.content,
                                    "_id": response.data._id
                                })

                            }, function errorCallback(response) {
                                console.log(response);
                            });

                        }, function () {
                            
                            for (let i = 0; i < $scope.notesList.length; i++) {
                                if ($scope.notesList[i]._id == note._id) {
                                    $scope.notesList[i].name = $scope.Note.name;
                                    $scope.notesList[i].content = $scope.Note.content;
                                }
                            }

                            //keep id
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

                        //                        let confirmNew = $scope.confirmNew();
                        //                        if (!confirmNew) {
                        //                            $http({
                        //                                method: 'PUT',
                        //                                url: '/notes/' + note._id,
                        //                                data: note
                        //                            }).then(function successCallback(response) {
                        //                                console.log("updated");
                        //                                return;
                        //
                        //                            }, function errorCallback(response) {
                        //                                console.log(response);
                        //                            });
                        //
                        //                        } //if not new fall through
                    }

                    //                    $http({ //create new note
                    //                        method: 'POST',
                    //                        url: '/notes',
                    //                        data: {
                    //                            name: note.name,
                    //                            content: note.content
                    //                        }
                    //                    }).then(function successCallback(response) {
                    //                        console.log("success");
                    //                        $scope.notesList.push({
                    //                            "name": response.data.name,
                    //                            "content": response.data.content,
                    //                            "_id": response.data._id
                    //                        })
                    //
                    //                    }, function errorCallback(response) {
                    //                        console.log(response);
                    //                    });

                },
                function errorCallback(response) {
                    console.log(response);
                });


        } //end save

    $scope.remove = function (id) {

        for (let i = 0; i < $scope.notesList.length; i++) {
            if ($scope.notesList[i]._id == id) {
                $scope.notesList.splice(i, 1);
            }
        }

        $http({
            method: 'DELETE',
            url: '/notes/' + id
        }).then(function successCallback(response) {
            console.log("removed");

        }, function errorCallback(response) {
            console.log(response);
        });

    }

    $scope.edit = function (id) {
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
