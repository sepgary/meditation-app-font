const baseUrl = 'http://localhost:9284/api'    //api的固定前部地址
export const request = (url,method,data) =>{
    return new Promise((resolve,reject) =>{
		uni.getSystemInfo({
			success: function (res) {
				uni.setStorageSync('appVersion', res.appVersion)
				uni.setStorageSync('platform',  res.platform)
				uni.setStorageSync('deviceId', res.deviceId)
				uni.setStorageSync('brand', res.deviceModel)
				uni.setStorageSync('model', res.model)
			}
		})
        uni.request({
            url: baseUrl + url,//拼接请求路径
            data: data,
            method: method,
            header: {
                'content-type': 'application/x-www-form-urlencoded',
				'x-app-id': '10023',
				'x-token': uni.getStorageSync('token') == null ? '' : uni.getStorageSync('token'),
				'x-version': uni.getStorageSync('appVersion'),
				'x-platform': uni.getStorageSync('platform'),
				'x-device-id': uni.getStorageSync('deviceId'),
				'x-mobile-brand': uni.getStorageSync('brand'),
				'x-mobile-model': uni.getStorageSync('model'),
            },
            success: (res) => {
                resolve(res)
            },
            fail: (error) => {
                reject(error)
            }
        })
    })
}
 
//暴露函数
export default request