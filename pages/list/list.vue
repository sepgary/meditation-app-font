<template>
	<view>
		<view class="index-title">
			<view class="text">冥想入门</view>
		</view>
		<uni-card v-if="isCourse" title="冥想入门" extra="13章节">
			<text class="uni-body">冥想(meditation)是一种意识状态,可以通过某些特定的技术实现,包括专注呼吸、静坐冥想、动态冥想等。冥想可以帮助人们降低压力、缓解焦虑、增强身心健康和调整内心平衡。在冥想状态下，人们尝试专注于当下的感受和情感,减少对过去、未来的关注，从而放松身心，提升自我意识和内在智翘。</text>
		</uni-card>
		<uni-list>
			<uni-list-item title="01 放下所有" showArrow
				thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
				thumb-size="lg" rightText="09:00" />
			<uni-list-item title="01 放下所有" showArrow
				thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
				thumb-size="lg" rightText="09:00" />
			<uni-list-item title="01 放下所有" showArrow
				thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
				thumb-size="lg" rightText="09:00" />
			<uni-list-item title="01 放下所有" showArrow
				thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
				thumb-size="lg" rightText="09:00" />
		</uni-list>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                isCourse: false
            };
        },
		onLoad () {
			this.isCourse = this.$route.query.isCourse === 'true'
		},
        methods: {
        }
    }
</script>

<style>
	.index-title {
		color: #5da981;
		font-size: x-large;
		font-weight: bold;
		text-align: center;
		padding: 35rpx 35rpx 0rpx 35rpx;
	}
</style>