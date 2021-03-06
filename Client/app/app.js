"use strict";

const app = angular.module("ATF", ["ngRoute", "ui.bootstrap"]);

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
        .when('/events/:id', {
            templateUrl: '/partials/content/singleEvent.html',
            controller: 'singleEventController'
        })
        // Services Page (all)
        .when('/services', {
            templateUrl: '/partials/content/services.html',
            controller: 'serviceGroupsController'
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
});