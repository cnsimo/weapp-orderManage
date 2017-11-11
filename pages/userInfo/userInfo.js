// pages/userInfo/userInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {
      id: 20153200,
      phone: 15732136610,
      fullname: "技术刘",
      openid: "fiwerfwenfnfosd234j323n4",
      avatorUrl: "/images/avator.jpg",
      identity: 0
    },
    allOrderNum: 123,
    doingOrderNum: 30,
    doneOrderNum: 93
  },

  changeUserInfo: function () {
    wx.navigateTo({
      url: "../changeUserInfo/changeUserInfo",
      success: function () {
        console.log('跳转到页面成功');
      },
      fail: function () {
        console.log('跳转到页面失败');
      }
    })
  },

  viewAllOrder: function () {
    wx.navigateTo({
      url: "",
      success: function () {
        console.log('跳转到页面成功');
      },
      fail: function () {
        console.log('跳转到页面失败');
      }
    })
  },

  viewDoingOrder: function () {
    wx.navigateTo({
      url: "",
      success: function () {
        console.log('跳转到页面成功');
      },
      fail: function () {
        console.log('跳转到页面失败');
      }
    })
  },

  viewDoneOrder: function () {
    wx.navigateTo({
      url: "",
      success: function () {
        console.log('跳转到页面成功');
      },
      fail: function () {
        console.log('跳转到页面失败');
      }
    })
  },

  changePassword: function () {
    wx.navigateTo({
		url: "../changePass/changePass",
      success: function () {
        console.log('跳转到页面成功');
      },
      fail: function () {
        console.log('跳转到页面失败');
      }
    })
  },

  contactAdmin: function () {
    wx.navigateTo({
      url: "",
      success: function () {
        console.log('跳转到页面成功');
      },
      fail: function () {
        console.log('跳转到页面失败');
      }
    })
  },

  loginout: function () {
    wx.navigateTo({
      url: "",
      success: function () {
        console.log('跳转到页面成功');
      },
      fail: function () {
        console.log('跳转到页面失败');
      }
    })
  },

  viewAboutAndHelp: function () {
    wx.navigateTo({
      url: "",
      success: function () {
        console.log('跳转到页面成功');
      },
      fail: function () {
        console.log('跳转到页面失败');
      }
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