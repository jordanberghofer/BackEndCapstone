"use strict";

app.controller("eventsController", function($scope, eventsFactory){
    console.log("events controller is registered");

    const showAllEvents = function(){
        eventsFactory.getAllEvents()
        .then(data => {
            console.log("data has been fetched", data);
            $scope.allEventsArray = data.data;
        })
        .catch(error => console.log(error));
    };

    showAllEvents();

});
