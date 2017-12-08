"use strict";

app.factory("servicesFactory", function($q, $http){
    console.log("services factory is registered");

    const getAllServices = function(){
        console.log("getAllServices");
        
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/services`)
            .then(data => {
                resolve(data);
                $scope.servicesArray = data;
                console.log("$scope.servicesArray = data", $scope.servicesArray);
            })
            .catch(error => reject (error));
        });

    };

    return {getAllServices};
});