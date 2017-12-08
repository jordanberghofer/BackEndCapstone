"use strict";

app.controller("serviceGroupsController", function($scope, serviceGroupsFactory, servicesFactory){
    console.log("service groups are registered");

    const showAllServiceGroups = function(){
        serviceGroupsFactory.getAllServiceGroups()
        .then(data => {
            $scope.serviceGroupsArray = data.data;
        })
        .catch(error => console.log(error));
    };

    const showAllServices = function(){
        servicesFactory.getAllServices()
        .then(data => {
            $scope.servicesArray = data.data;
            console.log("$scope.servicesArray = data.data", $scope.servicesArray);
        })
        .catch(error => console.log(error));
    };

    showAllServices();
    showAllServiceGroups();

});
