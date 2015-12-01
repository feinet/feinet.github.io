var mainMoudle = angular.module('mainApp', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'Views/main.html'
    })
    .when('/littleUtils', {
        templateUrl: 'Views/mainOfLittleUtils.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});