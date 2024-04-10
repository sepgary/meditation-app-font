<template>
	<view class="audio_center">
		<sy-audio 
			isCountDown ref="audio" src='https://cdn.yic3.cn/meditation/music/%E5%8F%91%E7%8E%B0/%E5%86%A5%E6%83%B3/%E4%B8%93%E6%B3%A8/5.MP3' 
			audioCover='https://cdn.yic3.cn/meditation/pciture/%E5%8F%91%E7%8E%B0/%E5%86%A5%E6%83%B3/%E4%B8%93%E6%B3%A8/5.jpg'  
			audioTitle='我爱你'
			@audioPlay="audioPlay()"
			@audioPause="audioPause()"
		/>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				playTime: 0,
				startTime: 0
			}
		},
		onBackPress() {
			this.playTime += (Math.floor(Date.now() / 1000) - this.startTime);
			console.log('last play time:' + this.playTime);
			this.$refs.audio.audioDestroy();
		},
		methods: {
			audioPlay() {
				this.startTime = Math.floor(Date.now() / 1000);
			},
			audioPause() {
				this.playTime += (Math.floor(Date.now() / 1000) - this.startTime);
				console.log(this.playTime);
			}
		}
	}
</script>
<style>
</style>