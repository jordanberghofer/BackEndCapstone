"use strict";

app.factory("singleEventFactory", function($q, $http){
	console.log("single event factory is registered");
	
	const singleEventDetailsView = function(id){
		console.log("getSingleEvent");
		return $q((resolve, reject) => {
			$http.get(`http://localhost:3000/events/${id}`)
			.then(data => {
				resolve(data.data);
				$scope.singleEventThings = data;
			})
			.catch(error => reject (error));
		});
	};

    return {singleEventDetailsView};
});