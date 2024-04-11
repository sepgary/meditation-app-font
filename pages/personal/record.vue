<template>
	<view class="index-title">
		<view class="text">历史记录</view>
	</view>
	<uni-list>
		<uni-list-item title="冥想冥想" note="2024/04/11" thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
			thumb-size="lg" rightText="12:23" link to="/pages/vue/index/index"/>
		<uni-list-item title="冥想冥想" note="2024/04/11" thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
			thumb-size="lg" rightText="12:23" link to="/pages/vue/index/index"/>
		<uni-list-item title="冥想冥想" note="2024/04/11" thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
			thumb-size="lg" rightText="12:23" link to="/pages/vue/index/index"/>
	</uni-list>
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
	.index-title {
		font-size: x-large;
		font-weight: bold;
		text-align: center;
		padding: 35rpx 35rpx 35rpx 35rpx;
	}
</style>