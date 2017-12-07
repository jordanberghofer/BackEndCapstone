"use strict";

app.controller("servicesController", function($scope, servicesFactory){
    console.log("services controller is registered");

    const showAllEvents = function(){
        console.log('showAllEvents');
    };

    eventsFactory.getAllEvents().then(data => console.log(data));
});
