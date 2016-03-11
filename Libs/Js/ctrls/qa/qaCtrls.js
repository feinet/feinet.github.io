mainMoudle.controller('qaSideMenuCtrl',['$scope','qaDataService', function ($scope,qaDataService) {
    $scope.sideMenu = qaDataService.all();
    $scope.qaList = qaDataService.getCategory(1).data;

    $scope.changeCategory = function (index) {
        $scope.qaList = qaDataService.getCategory(index+1).data;
    }
}])

;