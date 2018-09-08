//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //顶部导航栏数据
    tablist:[
      "公告牌","旧物","发布","旧书","我的"
    ],
    //下导航栏数据
    tablist1:[
      "最新消息",
      "免费专区"
    ],
    //上面滚动的图片
    imgUrls:[
      "../../images/gundong1.jpg",
      "../../images/gundong2.jpg",
      "../../images/gundong3.jpg"

    ],
    /*下面滚动的图片*/
    rementuijian:[
      {pic:"../../images/gundong4.jpg",tcontent:"英语书",tcontent1:"每本一元"},
      { pic: "../../images/gundong5.jpg", tcontent: "数学书", tcontent1: "每本三元"},
      { pic: "../../images/gundong6.jpg", tcontent: "高等数学", tcontent1: "每本五元"}

    ],
    /*主要信息*/
    sell:[
      { pic: "../../images/sell1.jpg", current: "戴尔笔记本", name: "范晓萱", sellmessage: "出售笔记本", src: "../../images/icon1.jpg" },
      { pic: "../../images/sell2.jpg", current: "联想笔记本", name: "张雨涵", sellmessage: "转让笔记本", src: "../../images/icon8.jpg" },
      { pic: "../../images/sell3.jpg", current: "华为笔记本", name: "华思奇", sellmessage: "出售笔记本", src: "../../images/icon9.jpg" },
    ]

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  //自定义函数**********************************
  //顶部导航栏点击切换
  click: function (e) {
    this.setData({
      current: e.currentTarget.dataset.pos //currentTarget是监听器
    })
  },
  bindChang: function (e) {
   console.log(e) //控制台输出一条信息
  },
  //底部导航切换
  click1: function (e) {
    this.setData({
      current1: e.currentTarget.dataset.pos1
    })
  }
})
