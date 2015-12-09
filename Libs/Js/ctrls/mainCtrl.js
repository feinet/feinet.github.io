mainMoudle.controller('slideImgCtrl', ['$scope', function ($scope) {

}])
.controller('sideMenuCtrl', function ($scope) {
    $scope.sideMenu = [
        {
            name: "脉冲电子围栏", url: "#", child: [
                { name: "脉冲控制器", url: "#", img: "/Sources/imgs/R1.png" },
                { name: "围栏配件", url: "#", img: "/Sources/imgs/R1.png" }
            ], isFocus: false
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
    $scope.blurItem = function (index) {
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
        var container = document.getElementsByClassName("scrollContainer")[0];
        //var container = document.getElementsByClassName("scrollContainer-inner")[0];
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

        //$('[data-toggle="tooltip"]').tooltip({ placement: "bottom" });
    }

})
.controller('QANewsCtrl', function ($scope) {
    //news
    $scope.news = [
        { content: "新闻一。。。。", url: "#", isFocus: false },
        { content: "新闻eer。。。。", url: "#", isFocus: false },
        { content: "sdfdsfsdfd。。。。", url: "#", isFocus: false },
        { content: "新闻一ddfasdf", url: "#", isFocus: false },
        { content: "sdfsdfsd。。。。", url: "#", isFocus: false },
        { content: "ghtrtuyrr。。。。", url: "#", isFocus: false },
        { content: "htre。。。。", url: "#", isFocus: false }
    ]
    $scope.aLinkHover = function (index) {
        $scope.news[index].isFocus = true;
    }
    $scope.aLinkBlur = function (index) {
        $scope.news[index].isFocus = false;
    }
    //end news
    //qa
    $scope.qaZoneLeftImg = "/Sources/imgs/wdBox.png";
    $scope.qaList = [
        {
            question: "了空间了空间浪费空间？",
            answer: "了空间链接了解了了时间段里疯狂就死定了拉开距离龙聚楼酒楼。",
            url: "#"
        },
        {
            question: "欧赔，门将离开了我我我？",
            answer: "路肩路肩了解空间抛弃破IPIQ颇为家里快急死了到家了抛弃破费破量减少了空间刻录机你，没呢，吗。",
            url: "#"
        },
        {
            question: "户名称来看及？",
            answer: "我我我我ijoiiouosuf看见了看见了看见了健康了健康记录劈破。",
            url: "#"
        },
        {
            question: "品牌空间关闭接口卡啦啦啦？",
            answer: "哦IE偶奇偶及皮肤鹿鼎记佛经里看见的怕看见了家里快乐偶奇偶及皮肤鹿鼎记佛经里看见的怕看见了家里快乐偶奇偶及皮肤鹿鼎记佛经里看见的怕看见了家里快乐。",
            url: "#"
        },
        {
            question: "两句话给帮忙看看匹配进口零距离？",
            answer: "我看见了建瓯盘欺骗记录到快来看才看见哦自己哦了。",
            url: "#"
        }
    ];

    window.onload = function () {
        var speed = 20;
        var qaScroll = document.getElementById("qaScroll");
        var qaScroll1 = document.getElementById("qaScroll1");
        var qaScroll2 = document.getElementById("qaScroll2");
        var Scrolling = function () {
            if (qaScroll2.offsetHeight - qaScroll.scrollTop <= 0)
                qaScroll.scrollTop -= qaScroll1.offsetHeight
            else {
                qaScroll.scrollTop++;
            }
        }
        var scrollInterval = setInterval(Scrolling, speed);
        qaScroll.onmouseover = function () { clearInterval(scrollInterval) };
        qaScroll.onmouseout = function () { scrollInterval = setInterval(Scrolling, speed) };

        //$('[data-toggle="tooltip"]').tooltip({ placement: "bottom" });
    }
    //end qa
})

;