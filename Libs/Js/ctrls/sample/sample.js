mainMoudle.controller('testSample', ['$scope', function ($scope) {
    $scope.name = "HElloWWW";
    alert("111");

    var category1 = [
        'jljdljadfoojo',
        '就看见了',
        '来了阿斯顿发圣诞',
        'jljdlj就拉开了adfoojo'
    ];
    var category2 = [
        'category2jljdljadfoojo',
        'category2就看见了',
        'category2来了阿斯顿发圣诞',
        'category2jljdlj就拉开了adfoojo'
    ];

    $scope.category = category1;

    $scope.over1 = function () {
        $scope.category = category1;
    }
    $scope.over2 = function () {
        $scope.category = category2;
    }

}]);