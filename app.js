//app.js
function Login(code, username, img) {
	var that = this
	wx.request({
		url: HTTP_URL,
		data:
		{
			appid: '你后台获取的appdi',
			secret: '你后台获取的secret',
			js_code: code,
			grant_type: 'authorization_code'
		},
		method: 'GET',
		header: { 'content-type': 'application/json' },
		success: function (a) {
			var openid = a.data.openid
			// 请求自己的服务器 
			wx.request({
				url: API_URL,
				data:
				{
					img: img,
   					openid : openid,
					username: username,
				},
				success: function (b) {
					// 成功返回用户的唯一ID(这是数据库ID) 
					console.log(b.data.uid)
					// 我这里是把用户返回的ID存到了缓存里因为，我在使用全局变 
					// 量时候发现有时候引入了js但是还会有丢失找不到的现象 
					wx.setStorageSync('uid', b.data.uid)
				}
			})
		},
		fail: function () {
			// 在这里你要考虑到用户登录失败的情况 
			wx.showToast({
				title: '网站正在维护中...',
				icon: 'loading',
				duration: 10000
			});
		}
	})
} 
var API_URL = "http://cnsimo.cn:8080/wxlogin"; 
var HTTP_URL = "https://api.weixin.qq.com/sns/jscode2session?appid=appid&secret=app_sectet&grant_type=authorization_code&js_code=code";
App({
	onLaunch: function() {
		wx.login({
			success: function (res) {
				if (res.code) {
					//发起网络请求
					wx.request({
						url: 'https://test.com/onLogin',
						data: {
							code: res.code
						}
					})
				} else {
					console.log('获取用户登录态失败！' + res.errMsg)
				}
			}
		});
	},
	getUserInfo: function (cb) {
		var that = this
		if (this.globalData.userInfo) {
			typeof cb == "function" && cb(this.globalData.userInfo)
		} else {
			// 调用登录接口 
			wx.login({
				// login流程 
				success: function (res) {
					//登录成功 
					if (res.code) {
						// 这里是用户的授权信息每次都不一样 
						var code = res.code;
						wx.getUserInfo({
							// getUserInfo流程 
							success: function (res2) {
								// console.log(res2) 
								that.globalData.userInfo = res2.userInfo
								typeof cb == "function" && cb(that.globalData.userInfo)
								var username = res2.userInfo.nickName
								var img = res2.userInfo.avatarUrl
								// 请求自己的服务器 
								Login(code, username, img);
							}
						})
					} else {
						wx.showModal({
							title: '提示',
							content: '获取用户登录态失败！' + res.errMsg
						})
					}
				}
			})
		}
	},
	globalData:
	{
		userInfo: null
	} 
})