"use strict";

const app = angular.module("ATF", ["ngRoute"]);

// const isAuth = (loginFact) => loginFact.isAuthenticated();

app.config($routeProvider => {

    $routeProvider
        // Splash Welcome Page (all)
        .when('/', {
            templateUrl: '/partials/welcome.html',
            controller: 'welcomeController'
        })
        // Home Page (all)
        .when('/home', {
            templateUrl: '/partials/content/home.html',
            controller: 'homeController'
        })
        // Events Page (all)
        .when('/events', {
            templateUrl: '/partials/content/events.html',
            controller: 'eventsController'
        })
        // Single Event Page (all)
        .when('/event/:id', {
            templateUrl: '/partials/content/singleEvent.html',
            controller: 'singleEventController'
        })
        // Services Page (all)
        .when('/services', {
            templateUrl: '/partials/content/services.html',
            controller: 'servicesController'
        })
        // About Page (all)
        .when('/about', {
            templateUrl: '/partials/content/about.html',
            controller: 'aboutController'
        })
        // Contact Page (all)
        .when('/contact', {
            templateUrl: '/partials/content/contact.html',
            controller: 'contactController'
        })
        // Login Page (all)
        .when('/login', {
            templateUrl: '/partials/content/loginRegister.html',
            controller: 'loginRegisterController'
        })
        // Create Event Page (admin only)
        .when('/createEvent', {
            templateUrl: '/partials/content/createEvent.html',
            controller: 'createEventController',
            // resolve: {isAuth}
        })
        .otherwise('/');

        // // Example
        // .when('/', {
        //     templateUrl: '/partials/contents/login.html',
        //     controller: 'loginCtrl'
        // })
        // .when('/singleView/:id', {
        //     templateUrl: '/partials/contents/singleView.html',
        //     controller: 'singleViewCtrl',
        //     resolve: {isAuth}
        // })
        // .otherwise('/');
});

// app.run(($location, FBCreds)=> firebase.initializeApp(FBCreds));
// app.run(($rootScope)=> $rootScope.showSearch = false);