<template>
	<view>
		<view class="index-title">
			<view class="text">练习计划</view>
		</view>
		<uni-search-bar @confirm="search" :focus="true" v-model="searchValue">
		</uni-search-bar>
		<uni-section v-for="(courseItem, index) in courseList" :title="courseItem.courseName" type="line" titleFontSize="large" titleColor="#5da981">
			<template v-slot:right>
				<text @click="gotoMain(courseItem.id)">全部 ></text>
			</template>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120" @touchmove.stop>
					<view v-for="(voiceItem, index) in courseItem.voices" class="scroll-view-item_H">
						<image class="image" mode="scaleToFill" :src="voiceItem.picture" @click="gotoVoiceMain(voiceItem.id)" />
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
				courseList: []
			}
		},
		methods: {
			search() {
				this.searchVoice();
			},
			loadCourseData() {
				request("/course/list/5",'GET').then(res=>{
					console.log(res)
					this.courseList = res.data.data
				}).catch(err=>{
				    console.log(err)
				})
			},
			gotoMain(courseId) {
				uni.navigateTo({
					url: '../list/list?isCourse=true&dataId=' + courseId,
				});
			},
			searchVoice() {
				uni.navigateTo({
					url: '../list/searchList?searchValue=' + this.searchValue,
				});
			},
			gotoVoiceMain(voiceId) {
				uni.navigateTo({
					url: '../audio/audio?voiceId=' + voiceId,
				});
			},
			statistic() {
				request("/user/event", 'POST', {
					type: 'statistic',
					key: 'STATISTIC_FOUND',
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