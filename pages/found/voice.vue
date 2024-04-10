<template>
	<view>
		<view class="index-title">
			<view class="text">声音世界</view>
		</view>
		<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input"
			@cancel="cancel" @clear="clear">
		</uni-search-bar>
		<uni-section title="最近新上" type="line" titleFontSize="large" titleColor="#5da981">
			<template v-slot:right>
				<navigator url="/pages/list/list?isCourse=false" hover-class="navigator-hover">
					<text>更多 ></text>
				</navigator>
			</template>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
					<navigator url="/pages/audio/audio" hover-class="navigator-hover">
						<view class="scroll-view-item_H">
							<image class="image" mode="scaleToFill" src="https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png" />
							<view class="text">基础冥想</view>
						</view>
					</navigator>
				</scroll-view>
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchValue: '123123'
			}
		},
		methods: {
			search(res) {
			},
			input(res) {
			},
			clear(res) {
			},
			blur(res) {
			},
			focus(e) {
			},
			cancel(res) {
			}
		}
	}
</script>

<style>
	.index-bottom{
		color: #5da981;
		height: 460rpx;
	}
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
	.index-title {
		color: #5da981;
		font-size: x-large;
		font-weight: bold;
		text-align: center;
		padding: 35rpx 35rpx 0rpx 35rpx;
	}
</style>