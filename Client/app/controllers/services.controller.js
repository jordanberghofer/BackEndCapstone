"use strict";

app.controller("servicesController", function($scope, servicesFactory){
    console.log("services controller is registered");

    const showAllServices = function(){
        console.log('showAllServices');
    };

    servicesFactory.getAllServices().then(data => console.log(data));
});
