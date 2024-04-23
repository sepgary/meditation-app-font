<template>
	<view>
		<view class="index-top">
			<view class="index-title" style="margin-bottom: 30rpx;">
				<view class="text">Hi~ 新朋友</view>
				<view class="text" style="margin-top: 10rpx;">欢迎来到冥想</view>
			</view>
			<view class="uni-margin-wrap">
				<swiper class="swiper" :circular="circular" :indicator-dots="indicatorDots" :autoplay="autoplay">
					<swiper-item v-for="(item, index) in indexCourseVoiceList">
						<view class="card-all">
							<view class="card-top flex-item">
								<view class="uni-flex uni-row" style="justify-content: space-between;">
									<view class="text">第{{index + 1}}天</view>
									<uni-icons v-if="item.isSuccess" type="checkbox-filled" size="26"/>
									<uni-icons v-if="!item.isSuccess" type="checkbox" size="26"/>
								</view>
							</view>
							<view class="card-middle flex-item"></view>
							<view class="card-bottom flex-item ">
								<view class="uni-flex uni-row">
									<view class="text" style="-webkit-flex: 1;flex: 1;">{{item.voiceName}}</view>
									<view class="text" style="-webkit-flex: 1;flex: 1; text-align: right;">{{parseInt(item.duration / 60)}}分钟</view>
								</view>
							</view>
							<view class="card-button flex-item" @click="gotoVoiceMain(item.id)">
								<button type="primary" plain="true">{{item.isSuccess ? "重播" : "开始"}}</button>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="index-bottom">
			<view class="index-title">
				<view class="text">推荐冥想</view>
			</view>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
					<view v-for="(item, index) in recommendVoiceList" class="scroll-view-item_H">
						<image class="image" mode="scaleToFill" :src="item.picture" @click="gotoVoiceMain(item.id)" />
						<view class="text">{{item.voiceName}}</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>
<script>
	import request from '@/utils/request'
	export default {
		data() {
			return {
				indicatorDots: false,
				autoplay: false,
				circular: false,
				indexCourseMain: {},
				indexCourseVoiceList: [],
				recommendVoiceList: []
			}
		},
		methods: {
			loadIndexCourse() {
				this.indexCourseVoiceList = []
				// 获取系统配置课程
				let indexCourseId = uni.getStorageSync('config')['server.course.id']
				request("/course/get/" + indexCourseId, 'GET').then(res=>{
					console.log(res)
					this.indexCourseMain = res.data.data
					for (let i = 0; i < res.data.data.voices.length; i ++) {
						this.indexCourseVoiceList.push(res.data.data.voices[i])
						if (!res.data.data.voices[i].isSuccess) {
							break;
						}
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
			loadRecommendVoiceList() {
				request("/voice/recommend", 'GET').then(res=>{
					console.log(res)
					this.recommendVoiceList = res.data.data
				}).catch(err=>{
					console.log(err)
				})
			},
			statistic() {
				request("/user/event", 'POST', {
					type: 'statistic',
					key: 'STATISTIC_INDEX',
					value: '',
					extra: ''
				}, 1).then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			}
		},
		onShow() {
			this.statistic()
			this.loadIndexCourse()
			this.loadRecommendVoiceList()
		}
	}
</script>

<style>
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 40%;
		text-align: center;
	}
	.image {
		width: 240rpx;
		height: 240rpx;
		border-radius: 30rpx;
	}
	.index-top{
		height: 980rpx;
		background-image: url("./static/index-back.jpeg");
		color: #5da981;
	}
	.index-bottom{
		background-color: #F7F7F7;
		color: #5da981;
		height: 460rpx;
	}
	.index-title {
		color: #5da981;
		font-size: large;
		font-weight: bold;
		padding: 35rpx 35rpx 35rpx 35rpx;
	}
	.uni-margin-wrap {
		width:690rpx;
		width: 100%;
	}
	.swiper {
		height: 700rpx;
		font-size: x-large;
	}
	.card-all{
		margin-left: 50rpx;
		margin-right: 50rpx;
		padding: 30rpx 30rpx 30rpx 30rpx;
		border-radius: 30rpx;
		/* 添加阴影 */
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 水平偏移量 | 垂直偏移量 | 模糊半径 | 阴影颜色 */
		/* 添加边框 */
		border: 2px solid #000; /* 边框粗细和颜色 */
	}
	.card-top{
		display: block;
		height: 100rpx;
		margin-top: 10rpx;
		margin-bottom: 250rpx;
		font-weight: bold;
	}
	.card-middle{
		display: block;
		height: 60rpx;
		margin-bottom: 20rpx;
		font-weight: bold;
	}
	.card-bottom{
		display: block;
		height: 50rpx;
		font-size: x-small;
	}
	.card-button{
		display: block;
		height: 100rpx;
		text-align: center;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		color: cornflowerblue;
	}
</style>
