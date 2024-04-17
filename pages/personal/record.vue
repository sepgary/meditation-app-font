<template>
	<view class="index-title">
		<view class="text">历史记录</view>
	</view>
	<uni-list>
		<uni-list-item v-for="(item, index) in voiceList" :title="item.voiceName" 
		:note="item.gmtCreate" :thumb="item.picture"
			thumb-size="lg" :rightText="item.duration" link to=""  @click="gotoVoiceMain(item.id)"/>
	</uni-list>
</template>

<script>
	import request from '@/utils/request'
    export default {
        data() {
            return {
				page: 1,
				voiceList: []
            };
        },
		onLoad () {
		},
        methods: {
			loadVoiceList() {
				request("/user/history?page=" + this.page + "&size=5", 'GET').then(res=>{
					console.log(res)
					for (let i = 0; i < res.data.data.length; i ++) {
						// 格式化日期
						res.data.data[i].gmtCreate = res.data.data[i].gmtCreate.substring(0, 10)
						// 格式化时长
						res.data.data[i].duration = parseInt(res.data.data[i].duration / 60) + ":" + parseInt(res.data.data[i].duration % 60)
						this.voiceList.push(res.data.data[i])
					}
					if (res.data.data.length > 0) {
						this.page ++
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			gotoVoiceMain(voiceId) {
				uni.navigateTo({
					url: '../audio/audio?voiceId=' + voiceId,
				});
			},
        },
		onPageScroll() {
			this.loadVoiceList()
		},
		onShow() {
			this.voiceList = []
			this.page = 1
			this.loadVoiceList()
		}
    }
</script>
<style lang="scss">
	.index-title {
		font-size: x-large;
		font-weight: bold;
		text-align: center;
		padding: 35rpx 35rpx 35rpx 35rpx;
	}
</style>