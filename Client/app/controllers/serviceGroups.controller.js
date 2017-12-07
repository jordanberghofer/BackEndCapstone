"use strict";

app.controller("serviceGroupsController", function($scope, serviceGroupsFactory, servicesFactory){
    console.log("service groups are registered");

    const showAllServiceGroups = function(){
        console.log('showAllServiceGroups');
    };

    serviceGroupsFactory.getAllServiceGroups().then(data => console.log(data));
    servicesFactory.getAllServices().then(data => console.log(data));
    
});
