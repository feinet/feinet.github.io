mainMoudle.controller('newsListCtrl', ['$scope', 'newsDataService', '$routeParams', function ($scope, newsDataService, $routeParams) {
    $scope.sideMenu = newsDataService.all();
    $scope.newsCategory = newsDataService.getCategory($routeParams.id);

    $scope.changeCategory = function (index) {
        $scope.newsCategory = newsDataService.getCategory(index + 1);
    }
}])
.controller('newsDetailCtrl', function ($scope, newsDataService, $routeParams) {
    var newsCategory = newsDataService.getCategory($routeParams.catetogyId);
    $scope.news = newsDataService.getNews(newsCategory, $routeParams.newsId);

    $scope.sideMenu = newsDataService.all();
    $scope.changeCategory = function (index) {
        $scope.newsCategory = newsDataService.getCategory(index + 1);
    }
})

;