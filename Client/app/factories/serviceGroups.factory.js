"use strict";

app.factory("serviceGroupsFactory", function($q, $http){
    console.log("services factory is registered");

    const getAllServiceGroups = function(){
        console.log("getAllServiceGroups");
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/service_groups`)
            .then(data => resolve(data))
            .catch(error => reject (error));
        });

    };

    return {getAllServiceGroups};
});