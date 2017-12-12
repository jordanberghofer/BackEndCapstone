"use strict";

app.controller("singleEventController", function($scope, $routeParams, singleEventFactory){
	console.log("single event controller is registered");

	$scope.singleEventDetailsView = {

		administrator_id: 6,
        image: "",
        name: "",
        date: "",
        race_details: "",
        location: "",
        olympic_distances: "",
        sprint_distances: "",
        olympic_age_previous_yr: "",
        olympic_overall_previous_yr: "",
        sprint_age_previous_yr: "",
        sprint_overall_previous_yr: "",
        aquabike_previous_yr: "",
        relay_previous_yr: "",
        stage_details: "",
        olympic_swim_map: "",
        olympic_bike_map: "",
        olympic_run_map: "",
        sprint_swim_map: "",
        sprint_bike_map: "",
        sprint_run_map: "",
        site_plan: "",
        FAQs: "",
        schedule: "",
        facebook: "",
        register: "",
		sponsor: ""
		
	};

	const showSingleEvent = function(){
		singleEventFactory.singleEventDetailsView($routeParams.id)
		.then(data => {
			console.log("single event has been fetched", data);
			$scope.singleEventArray = data;
			$scope.singleEventThings.id = $routeParams.id;
			console.log("$scope.singleEventThings.id = data", $scope.singleEventThings.id);
		})
		.catch(error => console.log(error));
	};

	showSingleEvent();

});
