<template>
	<view class="audio_center">
		<sy-audio 
			isCountDown ref="audio" :src='voiceMain.playUrl' :audioCover='voiceMain.picture'  :audioTitle='voiceMain.voiceName'
			@audioPlay="audioPlay()"
			@audioPause="audioPause()"
		/>
		<button v-if="voiceMain.isLike" type="warn" @click="loveVoice(voiceMain.id)">取消收藏</button>
		<button v-if="!voiceMain.isLike" type="primary" @click="loveVoice(voiceMain.id)">收藏</button>
	</view>
</template>
<script>
	import request from '@/utils/request'
	export default {
		data() {
			return {
				playTime: 0,
				startTime: 0,
				voiceMain: {}
			}
		},
		onBackPress() {
			this.playTime += Math.min((Math.floor(Date.now() / 1000) - this.startTime), this.startTime);
			let userStatisticsRequest = {}
			// 如果播放完，可以有5秒buffer
			userStatisticsRequest.success = this.playTime > this.voiceMain.duration - 5
			// 大于5秒或者播放完才增加播放记录
			if (this.playTime >= 5 || userStatisticsRequest.success) {
				userStatisticsRequest.voiceName = this.voiceMain.voiceName
				userStatisticsRequest.voiceId = this.voiceMain.id
				userStatisticsRequest.seconds = this.playTime
				// 获取当前时间
				let now = new Date();
				userStatisticsRequest.hour = now.getHours()
				userStatisticsRequest.day = String(now.getDate()).padStart(2, '0')
				userStatisticsRequest.month = String(now.getMonth() + 1).padStart(2, '0')
				userStatisticsRequest.year = now.getFullYear()
				request("/user/statistics", 'POST', userStatisticsRequest, 1).then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			}
			this.$refs.audio.audioDestroy();
		},
		methods: {
			audioPlay() {
				this.startTime = Math.floor(Date.now() / 1000);
			},
			audioPause() {
				this.playTime += (Math.floor(Date.now() / 1000) - this.startTime);
				console.log(this.playTime);
			},
			loadVoice() {
				// 获取音频详情
				let voiceId = this.$route.query.voiceId
				request("/voice/get/" + voiceId, 'GET').then(res=>{
					console.log(res)
					this.voiceMain = res.data.data
				}).catch(err=>{
					console.log(err)
				})
			},
			loveVoice(voiceId) {
				let i = 1
				request("/voice/like/" + voiceId, 'GET').then(res=>{
					console.log(res)
					this.loadVoice()
				}).catch(err=>{
					console.log(err)
				})
			},
			statistic() {
				request("/user/event", 'POST', {
					type: 'statistic',
					key: 'STATISTIC_AUDIO',
					value: '',
					extra: ''
				}, 1).then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			}
		},
		created() {
			this.playTime = 0
			this.startTime = 0
			this.loadVoice()
			this.statistic()
		}
	}
</script>
<style>
</style>