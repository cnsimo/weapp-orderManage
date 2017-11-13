var app = getApp()
Page({
  data: {
    //motto: '修改密码\n',
    userName: '',
    userPassword: '',
    id_token: '',//方便存在本地的locakStorage  
    response: '' //存取返回数据  
  },
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  userPasswordInput: function (e) {
    this.setData({
      userPassword: e.detail.value
    })
    console.log(e.detail.value)
  },

  logIn: function () {
  }
})  