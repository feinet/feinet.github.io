var mainMoudle = angular.module('mainApp', ['ngRoute', 'ngSanitize']).config(function ($routeProvider) {
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
     .when('/contactUs', {
         templateUrl: 'Views/contactUs/main.html'
     })
    .when('/solution/:id', {
        templateUrl: 'Views/solution/main.html'
    })
    .when('/joinUs/', {
        templateUrl: 'Views/joinUs/jobList.html'
    })
    .when('/joinUs/:jobId', {
        templateUrl: 'Views/joinUs/jobDetail.html'
    })
    .when('/afterService', {
        templateUrl: 'Views/support/afterService.html'
    })
    .when('/rule', {
        templateUrl: 'Views/support/rule_gydz.html'
    })
    .when('/rule_zls', {
        templateUrl: 'Views/support/rule_zls.html'
    })
    .when('/install', {
        templateUrl: 'Views/support/install_wl.html'
    })
    .when('/install_zdgx', {
        templateUrl: 'Views/support/install_zdgx.html'
    })
    .when('/intro', {
        templateUrl: 'Views/stepInYX/comIntro.html'
    })
    .when('/classicalCase', {
        templateUrl: 'Views/stepInYX/classicalCase.html'
    })
    .when('/productList/:id', {
        templateUrl: 'Views/product/list.html'
    })
    .when('/productDetail/:categoryId/:mainOrSecond/:productId', {
        templateUrl: 'Views/product/detail.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});