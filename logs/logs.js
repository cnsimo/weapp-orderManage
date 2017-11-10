// eapdomain/src/pages/login/login.js
var app = getApp();
Page({
  data: {
    backUrl: '',
    loginName: '',
    password: '',
    phone: '',//手机号加密码登录
    fullname:'', //真实姓名
    openid: '',//用户绑定的微信id
    avatarurl:'',//微信头像的url
    identity: 0,//用户身份 0是业务员 1管理员
    status: '',//0:审核中 1：审核通过
    
    arrayshenfen: ['业务员', '管理员'],
  },
  formSubmit: function (e) {
    console.log(e.detail.value);//格式 Object {userName: "user", userPassword: "password"}
    //获得表单数据
    var objData = e.detail.value;
    if (objData.password && objData.fullname) {
      // 同步方式存储表单数据
      wx.setStorageSync('fullname', objData.fullame);
      wx.setStorageSync('password', objData.password);
      wx.setStorageSync('id', objData.id);
      wx.setStorageSync('phone', objData.phone);
     
      //跳转到成功页面
      wx.navigateBack({
        url: '../login/iogin'
      })
    }
  },

  onLoad: function (options) {
    this.setData({
      backUrl: null
    });
    // 页面初始化 options为页面跳转所带来的参数
    //console.log(options.backUrl);
    this.setData({
      backUrl: options.backUrl
    });
  },
  
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      identity: e.detail.value
    })

  },
  inputClick: function (event) {
    //动态 对 paga.data 进行赋值
    //id与 数据项 一一对应
    var objId = event.currentTarget.id;

    var paraObj = {};
    paraObj[objId] = event.detail.value;
    this.setData(paraObj);
    //console.log(event.currentTarget.id);
    //console.log(this.data);
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






  loginClick: function () {
    var loginName = this.data.loginName;
    var passWord = this.data.passWord;
    if (loginName != null && passWord != null) {
      if (loginName == '123' && passWord == '123') {
        wx.redirectTo({
          url: "/pages/index/index"
        })
      }
      var backUrl = this.data.backUrl;
      wx.redirectTo({
        url: '/pages/login/login'
      })


      wx.redirectTo({
        url: backUrl
      });



      //   wx.redirectTo({
      // //目的页面地址
      //       url: 'pages/logs/index',
      //       success: function(res){},

      //   })
    } else {
      this.setData({
        loginName: null,
        passWord: null
      });
    }
  }
})