"use strict";

app.controller("eventsController", function($scope, eventsFactory){
    console.log("events controller is registered");

    const showAllEvents = function(){
        console.log('showAllEvents');
    };

    eventsFactory.getAllEvents().then(data => console.log(data));


});
