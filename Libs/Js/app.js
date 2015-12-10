var mainMoudle = angular.module('mainApp', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'Views/main.html'
    })
    .when('/sample', {
        templateUrl: 'Views/sample/index.html'
    })
    .when('/sample/s2', {
        templateUrl: 'Views/sample/s2.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});