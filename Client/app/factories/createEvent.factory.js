"use strict";

app.factory("createEventFactory", function($q, $http){
    console.log("create event factory is registered");

    const post = function(newEvent){
        return $q((resolve, reject) => {
            console.log("trying to post new event");
            
            $http.post('http://localhost:3000/events', {event: newEvent})
            .then(data => {
                console.log("actually posted the new event");
                resolve(data);
            })
            .catch(error => reject (error));
        });
    };

    // const getAllEvents = function(){
    //     console.log("getAllEvents");
    //     return $q((resolve, reject) => {
    //         $http.get(`http://localhost:3000/events`)
    //         .then(data => resolve(data))
    //         .catch(error => reject (error));
    //     });

    // };

    return {post};
});