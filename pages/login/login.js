// pages/login/login.js
Page({
  data: {
    userName: '',
    userPassword: '',
    imgCodeSrc: '',
    array:  ['请联系管理员'  ],
    arrayshenfen:['业务员','管理员'],
    index:0,
  },    

  getImgCode() {
    var capKey = "zdx-weixin" + Math.random();
    this.setData({
      imgCodeSrc: "http://prezdx.geinihua.com/invite/WeChat/verify?capKey=" + capKey,
      capKey: capKey
    });
  },
 
  formSubmit: function (e) {
    console.log(e.detail.value);//格式 Object {userName: "user", userPassword: "password"}
    //获得表单数据
    var objData = e.detail.value;
    if (objData.userName && objData.userPassword) {
      // 同步方式存储表单数据
      wx.setStorageSync('userName', objData.userName);
      wx.setStorageSync('userPassword', objData.userPassword);
      //跳转到成功页面
     wx.switchTab({
       url: '../index/index',
     })
    }
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
   ontap:function(){
   wx.navigateTo({
     url: '../signup/signup',
   })
   },
  //加载完后，处理事件 
  // 如果有本地数据，则直接显示
  onLoad: function (options) {
    //获取本地数据
    var userName = wx.getStorageSync('userName');
    var userPassword = wx.getStorageSync('userPassword');
    console.log(userName);
    console.log(userPassword);
    if (userName) {
      this.setData({ userName: userName });
    }
    if (userPassword) {
      this.setData({ userPassword: userPassword });
    }
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
})