var mainMoudle = angular.module('mainApp', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'Views/main.html'
    })
    .when('/sample', {
        templateUrl: 'Views/sample/index.html'
    })
    //.when('/sample/s2', {
    //    templateUrl: 'Views/sample/s2.html'
    //})
    .when('/qaList/:id', {
        templateUrl: 'Views/qa/qaList.html'
    })
    .when('/qaDetail/:catetogyId/:qaId', {
        templateUrl: 'Views/qa/qaDetail.html'
    })
    .when('/newsList/:id', {
        templateUrl: 'Views/news/newsList.html'
    })
    .when('/newsDetail/:catetogyId/:newsId', {
        templateUrl: 'Views/news/newsDetail.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});