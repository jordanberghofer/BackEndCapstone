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

    $scope.deleteEventFromDB = function(id){
        console.log("deleteEvent in events.controller.js");
        eventsFactory.deleteEvent(id)
        .then(() => showAllEvents());
    };

    $scope.editEventInDB = function(id){
        console.log("editEvent in events.controller.js");
        eventsFactory.editEvent(id)
        .then(() => showAllEvents());
    };

    showAllEvents();

});
