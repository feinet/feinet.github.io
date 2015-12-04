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
})
.controller("classicalCaseCtrl", function ($scope) {
    $scope.scrollImgs = [
        { name: "test001", url: "#", img: "/Sources/imgs/01.jpg" },
        { name: "test002", url: "#", img: "/Sources/imgs/02.jpg" },
        { name: "test003", url: "#", img: "/Sources/imgs/03.jpg" },
        { name: "test004", url: "#", img: "/Sources/imgs/04.jpg" },
        { name: "test005", url: "#", img: "/Sources/imgs/05.jpg" },
        { name: "test006", url: "#", img: "/Sources/imgs/06.jpg" }
    ];

    window.onload = function () {
        var speed = 20;
        //var container = document.getElementsByClassName("scrollContainer")[0];
        var container = document.getElementsByClassName("scrollContainer-inner")[0];
        var imgsDiv = document.getElementsByClassName("scrollContainer-imgs");
        var imgdiv1 = imgsDiv[0];
        var imgdiv2 = imgsDiv[1];
        //imgdiv2.innerHTML = imgdiv1.innerHTML;
        var Scrolling = function () {
            if (imgdiv2.offsetWidth - container.scrollLeft <= 0)
                container.scrollLeft -= imgdiv1.offsetWidth
            else {
                container.scrollLeft++;
            }
        }
        var scrollInterval = setInterval(Scrolling, speed);
        container.onmouseover = function () { clearInterval(scrollInterval) };
        container.onmouseout = function () { scrollInterval = setInterval(Scrolling, speed) };

        $('[data-toggle="tooltip"]').tooltip({ placement: "bottom" });
    }
   
})

;