<template>
	<view>
		<view class="index-title">
			<view class="text">声音世界</view>
		</view>
		<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input"
			@cancel="cancel" @clear="clear">
		</uni-search-bar>
		<uni-section v-for="(typeItem, index) in typeAndVoiceList" :title="typeItem.typeName" type="line" titleFontSize="large" titleColor="#5da981">
			<template v-slot:right>
				<navigator url="/pages/list/list?isCourse=true" hover-class="navigator-hover">
					<text>全部 ></text>
				</navigator>
			</template>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120" @touchmove.stop>
					<view v-for="(voiceItem, index) in typeItem.voices" class="scroll-view-item_H">
						<image class="image" mode="scaleToFill" :src="voiceItem.picture" />
						<view class="text">{{voiceItem.voiceName}}</view>
					</view>
				</scroll-view>
			</view>
		</uni-section>
	</view>
</template>

<script>
	import request from '@/utils/request'
	export default {
		data() {
			return {
				searchValue: '123123',
				typeAndVoiceList: []
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
			},
			loadCourseData() {
				request("/voice/list/5",'GET').then(res=>{
					console.log(res)
					this.typeAndVoiceList = res.data.data
				}).catch(err=>{
				    console.log(err)
				})
			}
		},
		onShow() {
			this.loadCourseData()
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