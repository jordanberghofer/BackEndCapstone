"use strict";

app.controller("singleEventController", function($scope, $routeParams, singleEventFactory){
	console.log("single event controller is registered");

	const showSingleEvent = function(){
		console.log('showSingleEvent');
	};

	singleEventFactory.getSingleEvent($routeParams.id).then(data => console.log(data));

});
