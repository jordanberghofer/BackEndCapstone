"use strict";

app.factory("eventsFactory", function($q, $http){
    console.log("events factory is registered");

    // const makeEventArray = function(data){
    //     let allEventsArray = Object.keys(data.data).map(key => data.data[key]);
    //     console.log("eventsArray", eventsArray);
    // };

    const getAllEvents = function(){
        console.log("getAllEvents in events.factory.js");
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/events`)
            .then(data => {
                resolve(data);
                $scope.eventThings = data;
                console.log("$scope.eventThings in factory", $scope.eventThings);                
            })
            .catch(error => reject (error));
        });

    };

    const deleteEvent = function(id) {
        console.log("deleteEvent function in events.factory.js");
        return $q((resolve, reject) =>{
            $http.delete(`http://localhost:3000/events/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error));
        });
    };

    return {getAllEvents, deleteEvent};
});