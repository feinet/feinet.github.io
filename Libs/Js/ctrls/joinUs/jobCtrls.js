mainMoudle.controller('jobListCtrl', ['$scope', 'jobDataService', function ($scope, jobDataService) {
    var addDays = function (date, days) {
        var valueOfDate = new Date(date).valueOf();
        var addedDateValue = valueOfDate + days * 24 * 60 * 60 * 1000;
        var addedDate = new Date(addedDateValue);
        return addedDate.toLocaleDateString();
    }

    $scope.jobs = jobDataService.all();
    $scope.publishDate = addDays(new Date().toLocaleDateString(),-5);
    
}])
.controller('jobDetailCtrl', function ($scope, jobDataService, $routeParams) {
    $scope.job = jobDataService.getJob($routeParams.jobId);
})

;