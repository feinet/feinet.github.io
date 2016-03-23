mainMoudle.controller('stepInYXCaseCtrl', ['$scope', 'caseDataService', function ($scope, caseDataService) {
    $scope.cases = caseDataService.all();
    
}])

;