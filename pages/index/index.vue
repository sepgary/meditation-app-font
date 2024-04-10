<template>
	<view>
		<view class="index-top">
			<view class="index-title" style="margin-bottom: 30rpx;">
				<view class="text">Hi~ 新朋友</view>
				<view class="text" style="margin-top: 10rpx;">欢迎来到冥想</view>
			</view>
			<view class="uni-margin-wrap">
				<swiper class="swiper" :circular="circular" :indicator-dots="indicatorDots" :autoplay="autoplay">
					<swiper-item>
						<view class="card-all">
							<view class="card-top flex-item">
								<view class="uni-flex uni-row" style="justify-content: space-between;">
									<view class="text">第一天</view>
									<uni-icons type="checkbox-filled" size="26"/>
								</view>
							</view>
							<view class="card-middle flex-item">21天正念辛福课</view>
							<view class="card-bottom flex-item ">
								<view class="uni-flex uni-row">
									<view class="text" style="-webkit-flex: 1;flex: 1;">正念冥想初体验</view>
									<view class="text" style="-webkit-flex: 1;flex: 1; text-align: right;">10分钟</view>
								</view>
							</view>
							<view class="card-button flex-item">
								<button type="primary" plain="true">重播</button>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="card-all">
							<view class="card-top flex-item">
								<view class="uni-flex uni-row" style="justify-content: space-between;">
									<view class="text">第二天</view>
									<uni-icons type="checkbox" size="26"/>
								</view>
							</view>
							<view class="card-middle flex-item">21天正念辛福课</view>
							<view class="card-bottom flex-item ">
								<view class="uni-flex uni-row">
									<view class="text" style="-webkit-flex: 1;flex: 1;">正念冥想初体验</view>
									<view class="text" style="-webkit-flex: 1;flex: 1; text-align: right;">8分钟</view>
								</view>
							</view>
							<view class="card-button flex-item">
								<button type="primary" plain="true">重播</button>
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
					<view class="scroll-view-item_H">
						<image class="image" mode="scaleToFill" src="https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png" />
						<view class="text">基础冥想</view>
					</view>
					<view class="scroll-view-item_H">
						<image class="image" mode="scaleToFill" src="https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png" />
						<view class="text">正念冥想</view>
					</view>
					<view class="scroll-view-item_H">
						<image class="image" mode="scaleToFill" src="https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png" />
						<view class="text">xxxxx</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				indicatorDots: false,
				autoplay: false,
				circular: false,
				ImageSrc: "./static/logo/png"
			}
		},
		methods: {
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
