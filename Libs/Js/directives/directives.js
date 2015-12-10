mainMoudle.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last == true) {
                $timeout(function () {
                    var fn = attr.onFinishRender;
                    scope.$eval(fn);
                });
            }
        }
    };
})

;