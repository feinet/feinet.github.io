mainMoudle.controller('solutionCtrl', ['$scope', 'solutionDataService', '$routeParams', function ($scope, solutionDataService, $routeParams) {
    $scope.sideMenu = solutionDataService.all();
    $scope.solution = solutionDataService.getSolution($routeParams.id);

    $scope.changeSolution = function (index) {
        $scope.solution = solutionDataService.getSolution(index);
    }
}])

;