<template>
	<view class="container">
			<view class="avatar">
			  <image class="avatar-img" src="https://img-cdn-tx.dcloud.net.cn/dev/img/ext/git.png" />
			</view>
		<navigator url="/pages/personal/edit">
		<view>
			<view class="name">hello</view>
			<view class="des" style="margin-left: 50rpx; margin-top: 10rpx;">学习冥想的第29天</view>
		</view>
		</navigator>
	  </view>
	<uni-list>
		<view class="index-title">
			<view class="text">冥想数据</view>
		</view>
	</uni-list>
	<uni-list>
		 <view class="uni-flex uni-row memstatic" style="padding-top: 30rpx;">
			<view class="text" style="-webkit-flex: 1;flex: 1;">
				<view class="number">24</view>
				<view class="des">今日冥想 (分钟)</view>
			</view>
			<view class="text" style="-webkit-flex: 1;flex: 1;">
				<view class="number">344</view>
				<view class="des">积累 (天数)</view>
			</view>
			<view class="text" style="-webkit-flex: 1;flex: 1;">
				<view class="number">23</view>
				<view class="des">连续 (天数)</view>
			</view>
		 </view>
	</uni-list>
	<uni-list>
		 <view class="uni-flex uni-row memstatic" style="padding-top: 30rpx;">
		 	<view class="text" style="-webkit-flex: 1;flex: 1;">
		 		<view class="number">24</view>
				<view class="des">本周冥想 (分钟)</view>
		 	</view>
		 	<view class="text" style="-webkit-flex: 1;flex: 1;">
		 		<view class="number">344</view>
		 		<view class="des">本月冥想 (分钟)</view>
		 	</view>
		 	<view class="text" style="-webkit-flex: 1;flex: 1;">
		 		<view class="number">23</view>
		 		<view class="des">本年冥想 (分钟)</view>
		 	</view>
		 </view>
	</uni-list>
	<view>
		<uni-list>
			<navigator url="/pages/personal/record" hover-class="navigator-hover">
				<uni-list-item title="最近一次播放" showArrow
					thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
					thumb-size="lg" />
			</navigator>
			<navigator url="/pages/personal/love" hover-class="navigator-hover">
				<uni-list-item title="我的收藏" showArrow
					thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
					thumb-size="lg" />
			</navigator>
		</uni-list>
	</view>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
		onLoad () {
		},
        methods: {
			
        }
    }
</script>
<style lang="scss">
	.memstatic{
		margin-bottom: 45rpx;
	}
	.number{
		font-size: x-large;
		text-align: center;
	}
	.des{
		font-size: small;
		color: darkgray;
		text-align: center;
	}
	.index-title {
		color: #5da981;
		font-size: large;
		font-weight: bold;
		padding: 35rpx 35rpx 35rpx 35rpx;
	}
	.container {
	  display: flex;
	  align-items: center;
	  padding: 20rpx;
	}
	
	.avatar {
	  width: 180rpx;
	  height: 180rpx;
	  border-radius: 50%;
	  overflow: hidden;
	}
	
	.avatar-img {
	  width: 100%;
	  height: 100%;
	}
	
	.name {
	  margin-left: 50rpx;
	  font-size: x-large;
	  font-weight: bold;
	}
</style>