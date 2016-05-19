mainMoudle.factory('caseDataService', function () {
    var caseData = [
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
        { name: "阳光小区", url: "#/", img: "/Sources/realImgs/classicalCase/23ygxq.jpg" },
        { name: "铝制弯杆", url: "#/", img: "/Sources/realImgs/classicalCase/24lzwg.jpg" }
    ];
    

    return {
        all: function () {
            return caseData;
        }
        //getJob: function (jobId) {
        //    for (var i = 0; i < jobData.length; i++) {
        //        if (jobData[i].id === parseInt(jobId)) {
        //            return jobData[i];
        //        }
        //    }
        //    return null;
        //}
    };
});
