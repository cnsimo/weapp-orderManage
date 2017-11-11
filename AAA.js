// pages/AAA/AAA.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUal: "/images/img/u3.png",
    nickname: "中国移动",
    //sex:"",
    openid: "中国移动10086",
    fullname: "中国移动",
    phone: "10086",
    id: "10086",
    array:[],
    bin: true,
    focus: false,
    hidden: true,
  },

  setbin: function (e) {
    this.setData({
      bin: !this.data.bin,
      focus: !this.data.focus,
      hidden: !this.data.hidden
    })

  },
  //问题函数
  ctrls: function (e) {
    this.setData({
      bin: true,
      focus: false,
      hidden: true,


    })

  },


  nickname: function (e) {

    this.setData({
      nickname: e.detail.value.name
    })

  },
  openid: function (e) {
    this.setData({
      openid: e.detail.value
    })

  },
  fullname: function (e) {
    this.setData({
      fullname: e.detail.value
    })
  },
  phone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  id: function (e) {
    this.setData({
      id: e.detail.value
    })

  },


  formSubmit: function (e) {
console.log()

  },
formReset:function(){

},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var user=this.getUser();
    //wx.setStorageSync('user',user)

  },
  /**getUser:function(){
  var user=new Object();
  user.name=nickname;
  user.openid=openid;
  user.fullname=fullname;
  user.id=id;
  return user;
  },
  */








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