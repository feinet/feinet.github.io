mainMoudle.controller('slideImgCtrl', ['$scope', function ($scope) {

}])
.controller('sideMenuCtrl', function ($scope) {
    $scope.sideMenu = [
        {
            name: "脉冲电子围栏", url: "#", child: [
                { name: "脉冲控制器", url: "#", img: "/Sources/imgs/R1.png" },
                { name: "围栏配件", url: "#", img: "/Sources/imgs/R1.png" }
            ],isFocus:false
        },
        {
            name: "张力电子围栏", url: "#", child: [
                { name: "张力探测器", url: "#", img: "/Sources/imgs/R1.png" },
                { name: "围栏配件", url: "#", img: "/Sources/imgs/R1.png" }
            ], isFocus: false
        },
        {
            name: "智能管理中心", url: "#", child: [
                { name: "智能报警主机", url: "#", img: "/Sources/imgs/R1.png" },
                { name: "主机配套设备", url: "#", img: "/Sources/imgs/R1.png" }
            ], isFocus: false
        },
        {
            name: "振动光纤探测器", url: "#", child: [
                { name: "双防区探测控制器", url: "#", img: "/Sources/imgs/R1.png" },
                { name: "八防区光纤探测控制器", url: "#", img: "/Sources/imgs/R1.png" }
            ], isFocus: false
        },
        {
            name: "高清网络光端机", url: "#", child: [
                { name: "100M（百兆）高清系列", url: "#", img: "/Sources/imgs/R1.png" },
                { name: "1000M（千兆）高清系列", url: "#", img: "/Sources/imgs/R1.png" }
            ], isFocus: false
        }
    ];

    $scope.focusItem = function (index) {
        $scope.sideMenu[index].isFocus = true;
    }
    $scope.blurItem=function(index){
        $scope.sideMenu[index].isFocus = false;
    }
});