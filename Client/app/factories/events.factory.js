"use strict";

app.factory("eventsFactory", function($q, $http){
    console.log("events factory is registered");

    const getAllEvents = function(){
        console.log("getAllEvents");
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/events`)
            .then(data => resolve(data))
            .catch(error => reject (error));
        });

    };

    return {getAllEvents};
});