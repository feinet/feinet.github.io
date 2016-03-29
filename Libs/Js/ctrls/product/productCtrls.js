mainMoudle.controller('productListCtrl', ['$scope', 'productDataService', '$routeParams', function ($scope, productDataService, $routeParams) {

    $scope.products = productDataService.all();
    $scope.category = productDataService.getCategory($routeParams.id);
    $scope.changeCategory = function (id) {
        $scope.category = productDataService.getCategory(id);
    }
    
}])
.controller('productDetailCtrl', function ($scope, productDataService, $routeParams) {
    //$scope.products = productDataService.all();
    var category = productDataService.getCategory($routeParams.categoryId);
    $scope.product = productDataService.getProduct(category, $routeParams.mainOrSecond, $routeParams.productId);
})

;