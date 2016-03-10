mainMoudle.controller('slideImgCtrl', ['$scope', function ($scope) {

    $scope.slideImgs = [
        { img: "/Sources/realImgs/slideImgs/ps1.jpg" },
        { img: "/Sources/realImgs/slideImgs/ps2.jpg" },
        { img: "/Sources/realImgs/slideImgs/ps3.jpg" },
        { img: "/Sources/realImgs/slideImgs/ps4.jpg" },
        { img: "/Sources/realImgs/slideImgs/ps5.jpg" }
    ];

    //slideImg
    var $ = function (id) { return typeof id === "string" ? document.getElementById(id) : id };
    var $$ = function (tagName, oParent) { return (oParent || document).getElementsByTagName(tagName) };
    //自动播放对象
    var AutoPlay = function (id) { this.initialize(id) };
    AutoPlay.prototype = {
        initialize: function (id) {
            var oThis = this;
            this.oBox = $(id);
            this.oUl = $$("ul", this.oBox)[0];
            this.aImg = $$("img", this.oBox);
            this.timer = null;
            this.autoTimer = null;
            this.iNow = 0;
            this.creatBtn();
            this.aBtn = $$("li", this.oCount);
            this.toggle();
            this.autoTimer = setInterval(function () {
                oThis.next()
            }, 3000);
            this.oBox.onmouseover = function () {
                clearInterval(oThis.autoTimer)
            };
            this.oBox.onmouseout = function () {
                oThis.autoTimer = setInterval(function () {
                    oThis.next()
                }, 3000)
            };
            for (var i = 0; i < this.aBtn.length; i++) {
                this.aBtn[i].index = i;
                this.aBtn[i].onmouseover = function () {
                    oThis.iNow = this.index;
                    oThis.toggle()
                }
            }
        },
        creatBtn: function () {
            this.oCount = document.createElement("ul");
            this.oFrag = document.createDocumentFragment();
            this.oCount.className = "count";
            for (var i = 0; i < this.aImg.length; i++) {
                var oLi = document.createElement("li");
                oLi.innerHTML = i + 1;
                this.oFrag.appendChild(oLi)
            }
            this.oCount.appendChild(this.oFrag);
            this.oBox.appendChild(this.oCount)
        },
        toggle: function () {
            for (var i = 0; i < this.aBtn.length; i++) this.aBtn[i].className = "";
            this.aBtn[this.iNow].className = "current";
            //this.doMove(-(this.iNow * this.aImg[0].offsetHeight))
            this.doMove(-(this.iNow * this.aImg[0].offsetWidth))
        },
        next: function () {
            this.iNow++;
            this.iNow == this.aBtn.length && (this.iNow = 0);
            this.toggle()
        },
        doMove: function (iTarget) {
            var oThis = this;
            clearInterval(oThis.timer);
            oThis.timer = setInterval(function () {
                var iSpeed = (iTarget - oThis.oUl.offsetLeft) / 5;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                oThis.oUl.offsetLeft == iTarget ? clearInterval(oThis.timer) : (oThis.oUl.style.left = oThis.oUl.offsetLeft + iSpeed + "px")
            }, 30)
        }
    };
    $scope.setScroll = function () {
        new AutoPlay("box_yingxinslide");
    };
    //end slideImg

}])
.controller('sideMenuCtrl', function ($scope) {
    $scope.sideMenu = [
        {
            name: "脉冲电子围栏", url: "#/", child: [
                { name: "脉冲控制器", url: "#/", img: "/Sources/imgs/R1.png" },
                { name: "围栏配件", url: "#/", img: "/Sources/imgs/R1.png" }
            ], isFocus: false
        },
        {
            name: "张力电子围栏", url: "#/", child: [
                { name: "张力探测器", url: "#/", img: "/Sources/imgs/R1.png" },
                { name: "围栏配件", url: "#/", img: "/Sources/imgs/R1.png" }
            ], isFocus: false
        },
        {
            name: "智能管理中心", url: "#/", child: [
                { name: "智能报警主机", url: "#/", img: "/Sources/imgs/R1.png" },
                { name: "主机配套设备", url: "#/", img: "/Sources/imgs/R1.png" }
            ], isFocus: false
        },
        {
            name: "振动光纤探测器", url: "#/", child: [
                { name: "双防区探测控制器", url: "#/", img: "/Sources/imgs/R1.png" },
                { name: "八防区光纤探测控制器", url: "#/", img: "/Sources/imgs/R1.png" }
            ], isFocus: false
        },
        {
            name: "数字监控专用光端机", url: "#/", child: [
                { name: "100M（百兆）高清系列", url: "#/", img: "/Sources/imgs/R1.png" },
                { name: "1000M（千兆）高清系列", url: "#/", img: "/Sources/imgs/R1.png" }
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
        { name: "宝山幼儿园", url: "#/", img: "/Sources/realImgs/classicalCase/1bsyey.jpg" },
        { name: "崇明纪检会", url: "#/", img: "/Sources/realImgs/classicalCase/2qmjjh.jpg" },
        { name: "东沟油库", url: "#/", img: "/Sources/realImgs/classicalCase/3dgyh.jpg" },
        { name: "二炮部队", url: "#/", img: "/Sources/realImgs/classicalCase/4epbd.jpg" },
        { name: "甘肃牧场", url: "#/", img: "/Sources/realImgs/classicalCase/5gsmc.jpg" },
        { name: "公交枢纽站", url: "#/", img: "/Sources/realImgs/classicalCase/6gjsnz.jpg" },
        { name: "锅炉厂", url: "#/", img: "/Sources/realImgs/classicalCase/7glc.jpg" },
        { name: "国家电网", url: "#/", img: "/Sources/realImgs/classicalCase/8gjdw.jpg" },
        { name: "和庄别墅", url: "#/", img: "/Sources/realImgs/classicalCase/9hzbs.jpg" },
        { name: "黄渡小学", url: "#/", img: "/Sources/realImgs/classicalCase/10hdxx.jpg" },
        { name: "绿地新城", url: "#/", img: "/Sources/realImgs/classicalCase/11ldxc.jpg" },
        { name: "绿茵社区", url: "#/", img: "/Sources/realImgs/classicalCase/12lysq.jpg" },
        { name: "农家小院", url: "#/", img: "/Sources/realImgs/classicalCase/13njxy.jpg" },
        { name: "普陀中学", url: "#/", img: "/Sources/realImgs/classicalCase/14ptzx.jpg" },
        { name: "山西变电站", url: "#/", img: "/Sources/realImgs/classicalCase/15xabdz.jpg" },
        { name: "上海世纪苑", url: "#/", img: "/Sources/realImgs/classicalCase/16shsjy.jpg" },
        { name: "私人住宅", url: "#/", img: "/Sources/realImgs/classicalCase/17srzz.jpg" },
        { name: "泰悦豪庭", url: "#/", img: "/Sources/realImgs/classicalCase/18tyht.jpg" },
        { name: "万科小区", url: "#/", img: "/Sources/realImgs/classicalCase/19wkxq.jpg" },
        { name: "污水处理厂", url: "#/", img: "/Sources/realImgs/classicalCase/20wsclc.jpg" },
        { name: "西郊花园", url: "#/", img: "/Sources/realImgs/classicalCase/21xjhy.jpg" },
        { name: "新建工地", url: "#/", img: "/Sources/realImgs/classicalCase/22xjgd.jpg" },
        { name: "阳光小区", url: "#/", img: "/Sources/realImgs/classicalCase/23ygxq.jpg" }
    ];

    $scope.setScroll = function () {
        var speed = 15;
        var container = document.getElementsByClassName("scrollContainer")[0];
        var imgsDiv = document.getElementsByClassName("scrollContainer-imgs");
        var imgdiv1 = imgsDiv[0];
        var imgdiv2 = imgsDiv[1];
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
    }

})
.controller('QANewsCtrl', function ($scope,qaDataService) {
    //news
    $scope.news = [
        { content: "新闻一。。。。", url: "#/", isFocus: false },
        { content: "新闻eer。。。。", url: "#/", isFocus: false },
        { content: "sdfdsfsdfd。。。。", url: "#/", isFocus: false },
        { content: "新闻一ddfasdf", url: "#/", isFocus: false },
        { content: "sdfsdfsd。。。。", url: "#/", isFocus: false },
        { content: "ghtrtuyrr。。。。", url: "#/", isFocus: false },
        { content: "htre。。。。", url: "#/", isFocus: false }
    ]
    $scope.aLinkHover = function (index) {
        $scope.news[index].isFocus = true;
    }
    $scope.aLinkBlur = function (index) {
        $scope.news[index].isFocus = false;
    }
    //end news
    //qa
    //$scope.qaZoneLeftImg = "/Sources/imgs/wdBox.png";
    $scope.qaZoneLeftImg = "/Sources/realImgs/others/FAQ.jpg";
    //$scope.qaList = [
    //    {
    //        question: "了空间了空间浪费空间？",
    //        answer: "了空间链接了解了了时间段里疯狂就死定了拉开距离龙聚楼酒楼。",
    //        url: "#/"
    //    },
    //    {
    //        question: "欧赔，门将离开了我我我？",
    //        answer: "路肩路肩了解空间抛弃破IPIQ颇为家里快急死了到家了抛弃破费破量减少了空间刻录机你，没呢，吗。",
    //        url: "#/"
    //    },
    //    {
    //        question: "户名称来看及？",
    //        answer: "我我我我ijoiiouosuf看见了看见了看见了健康了健康记录劈破。",
    //        url: "#/"
    //    },
    //    {
    //        question: "品牌空间关闭接口卡啦啦啦？",
    //        answer: "哦IE偶奇偶及皮肤鹿鼎记佛经里看见的怕看见了家里快乐偶奇偶及皮肤鹿鼎记佛经里看见的怕看见了家里快乐偶奇偶及皮肤鹿鼎记佛经里看见的怕看见了家里快乐。",
    //        url: "#/"
    //    },
    //    {
    //        question: "两句话给帮忙看看匹配进口零距离？",
    //        answer: "我看见了建瓯盘欺骗记录到快来看才看见哦自己哦了。",
    //        url: "#/"
    //    }
    //];
    $scope.qaList = qaDataService.getCategory(1).data;
    $scope.tabFocus = function (index) {
        $scope.qaList = qaDataService.getCategory(index).data;
    }
        

    $scope.setScroll = function () {
        var speed = 30;
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

    }
    //end qa
})

;