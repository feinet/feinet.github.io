mainMoudle.controller('qaSideMenuCtrl', ['$scope', 'qaDataService', '$routeParams', function ($scope, qaDataService, $routeParams) {
    $scope.sideMenu = qaDataService.all();
    $scope.qaCategory = qaDataService.getCategory($routeParams.id);

    $scope.changeCategory = function (index) {
        $scope.qaCategory = qaDataService.getCategory(index + 1);
    }
}])
.controller('qaDetailCtrl', function ($scope, qaDataService, $routeParams) {
    var qaCategory=qaDataService.getCategory($routeParams.catetogyId);
    $scope.qa = qaDataService.getQa(qaCategory, $routeParams.qaId);

    $scope.sideMenu = qaDataService.all();
    $scope.changeCategory = function (index) {
        $scope.qaCategory = qaDataService.getCategory(index + 1);
    }
})

;