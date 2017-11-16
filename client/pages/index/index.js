// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["全部", "进行中", "已完成"],
    currentNavtab: 0,
    hasInfo: true,
    orderInfo: [{
      orderNum: 123456789,
      projectName: '铁木箱制作',
      createdTime: '2017-2-16 11:42',
      orderTime: '2017年1月16日  11:42',
      contact: '张宇',
      phone: '18202801506',
      status: 0
    },{
      orderNum: 123456789,
      projectName: '铁木箱制作',
      createdTime: '2017-2-16 11:42',
      orderTime: '2017年1月16日  11:42',
      contact: '张宇',
      phone: '18202801506',
      status: 0
    },{
      orderNum: 123456789,
      projectName: '笔记本电脑采购',
      createdTime: '2017-2-16 11:42',
      orderTime: '2017年1月16日  11:42',
      contact: '刘立伟',
      phone: '18202801506',
      status: 1
	}, {
		orderNum: 123456789,
		projectName: '铁木箱制作',
		createdTime: '2017-2-16 11:42',
		orderTime: '2017年1月16日  11:42',
		contact: '张宇',
		phone: '18202801506',
		status: 0
	}, {
		orderNum: 123456789,
		projectName: '铁木箱制作',
		createdTime: '2017-2-16 11:42',
		orderTime: '2017年1月16日  11:42',
		contact: '张宇',
		phone: '18202801506',
		status: 0
	}, {
		orderNum: 123456789,
		projectName: '笔记本电脑采购',
		createdTime: '2017-2-16 11:42',
		orderTime: '2017年1月16日  11:42',
		contact: '刘立伟',
		phone: '18202801506',
		status: 1
	}, {
		orderNum: 123456789,
		projectName: '铁木箱制作',
		createdTime: '2017-2-16 11:42',
		orderTime: '2017年1月16日  11:42',
		contact: '张宇',
		phone: '18202801506',
		status: 0
	}, {
		orderNum: 123456789,
		projectName: '铁木箱制作',
		createdTime: '2017-2-16 11:42',
		orderTime: '2017年1月16日  11:42',
		contact: '张宇',
		phone: '18202801506',
		status: 0
	}, {
		orderNum: 123456789,
		projectName: '笔记本电脑采购',
		createdTime: '2017-2-16 11:42',
		orderTime: '2017年1月16日  11:42',
		contact: '刘立伟',
		phone: '18202801506',
		status: 1
	}, {
		orderNum: 123456789,
		projectName: '铁木箱制作',
		createdTime: '2017-2-16 11:42',
		orderTime: '2017年1月16日  11:42',
		contact: '张宇',
		phone: '18202801506',
		status: 0
	}, {
		orderNum: 123456789,
		projectName: '铁木箱制作',
		createdTime: '2017-2-16 11:42',
		orderTime: '2017年1月16日  11:42',
		contact: '张宇',
		phone: '18202801506',
		status: 0
	}, {
		orderNum: 123456789,
		projectName: '笔记本电脑采购',
		createdTime: '2017-2-16 11:42',
		orderTime: '2017年1月16日  11:42',
		contact: '刘立伟',
		phone: '18202801506',
		status: 1
	}],
    statusImage: ['/images/loading.png', '/images/over.png'],
    statusText: ['进行中', '已完成'],
    startPoint: [0, 0]
  },

  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },

  catchtouchstart:function(e){
    var that = this;
    that.setData({
      startPoint: [e.touches[0].clientX,e.touches[0].clientY]
    })
  },

  catchtouchend:function(e){
    var that = this;
    var currentNum = parseInt(this.data.currentNavtab);

    var endPoint = [e.changedTouches[0].clientX,e.changedTouches[0].clientY];
    var startPoint = that.data.startPoint
    if(endPoint[0] <= startPoint[0]) {
      if(Math.abs(endPoint[0] - startPoint[0]) >= Math.abs(endPoint[1] - startPoint[1]) && currentNum< this.data.navTab.length -1) {
         currentNum=currentNum + 1;  
      }
    }else {
      if(Math.abs(endPoint[0] - startPoint[0]) >= Math.abs(endPoint[1] - startPoint[1]) && currentNum > 0) {
          currentNum -= 1;
      }
    }

    this.setData({
      currentNavtab: currentNum
    });
  },
  addNewOrder: function () {
	  wx.navigateTo({
		  url: '../newOrder/newOrder',
	  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})