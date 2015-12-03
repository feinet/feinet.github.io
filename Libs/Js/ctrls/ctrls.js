mainMoudle.controller('navbarCtrl', ['$scope', function ($scope) {
    $scope.topMenu = [
        { name: "网站首页", url: "#", child: null },
        {
            name: "服务支持", url: "#/test/t1", child: [
                { name: "售后服务", url: "#" },
                { name: "法规标准", url: "#" },
                { name: "下载中心", url: "#" },
                { name: "安装方式", url: "#" },
                { name: "操作视频", url: "#" },
                { name: "用户反馈", url: "#" }
            ]
        },
        {
            name: "解决方案", url: "#", child: [
                { name: "电力", url: "#" },
                { name: "小区", url: "#" },
                { name: "别墅", url: "#" },
                { name: "学校", url: "#" },
                { name: "军事基地", url: "#" },
                { name: "监狱", url: "#" },
                { name: "看守所", url: "#" },
                { name: "能源", url: "#" },
                { name: "机场", url: "#" },
                { name: "动植物基地", url: "#" },
                { name: "仓库", url: "#" }
            ]
        },
        {
            name: "常识解答", url: "#", child: [
                { name: "脉冲电子围栏", url: "#" },
                { name: "张力电子围栏", url: "#" },
                { name: "振动光纤系统", url: "#" },
                { name: "数字光端机", url: "#" }
            ]
        },
        {
            name: "走近应心", url: "#", child: [
                { name: "公司介绍", url: "#" },
                { name: "生产基地", url: "#" },
                { name: "公司资质", url: "#" },
                { name: "经典案例", url: "#" },
                { name: "员工动态", url: "#" }
            ]
        },
        { name: "新闻中心", url: "#", child: null },
        {
            name: "加入应心", url: "#", child: [
                { name: "应聘流程", url: "#" },
                { name: "招聘职位", url: "#" }
            ]
        },
        { name: "联系我们", url: "#", child: null }

    ];


}]);