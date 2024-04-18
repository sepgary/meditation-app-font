<template>
	<view>
		<view class="index-title">
			<view v-if="isCourse" class="text">{{courseMain.courseName}}</view>
			<view v-if="!isCourse" class="text">{{typeMain.typeName}}</view>
		</view>
		<uni-card v-if="isCourse" :title="courseMain.courseName" :extra="voices.length + '章节'">
			<text class="uni-body">{{courseMain.courseMain}}</text>
		</uni-card>
		<uni-list>
			<uni-list-item v-for="(item,index) in voices" :title="item.voiceName" showArrow
				:thumb="item.picture"
				thumb-size="lg" :rightText="item.duration" />
		</uni-list>
	</view>
</template>

<script>
	import request from '@/utils/request'
    export default {
        data() {
            return {
                isCourse: false,
				dataId: 0,
				courseMain: {},
				typeMain: {},
				voices: []
            };
        },
        methods: {
			loadCourseData() {
				request("/course/get/" + this.dataId,'GET').then(res=>{
					console.log(res)
					this.courseMain = res.data.data
					this.voices = res.data.data.voices
					for (let i = 0; i < this.voices.length; i ++) {
						// 处理标题
						this.voices[i].voiceName = ((i + 1) + " ") + this.voices[i].voiceName
						// 处理时长
						this.voices[i].duration = parseInt(this.voices[i].duration / 60) + ":" + parseInt(this.voices[i].duration % 60)
					}
				}).catch(err=>{
				    console.log(err)
				})
			},
			loadTypeVoiceData() {
				request("/voice/main/" + this.dataId,'GET').then(res=>{
					console.log(res)
					this.typeMain = res.data.data
					this.voices = res.data.data.voices
					for (let i = 0; i < this.voices.length; i ++) {
						// 处理时长
						this.voices[i].duration = parseInt(this.voices[i].duration / 60) + ":" + parseInt(this.voices[i].duration % 60)
					}
				}).catch(err=>{
				    console.log(err)
				})
			}
        },
		onShow () {
			this.isCourse = this.$route.query.isCourse === 'true'
			this.dataId = this.$route.query.dataId
			if (this.isCourse) {
				this.loadCourseData()
			} else {
				this.loadTypeVoiceData()
			}
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