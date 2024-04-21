<template>
	<view>
		<view class="index-title">
			<view class="text">搜索结果</view>
		</view>
		<uni-search-bar @confirm="search" :focus="true" v-model="searchValue"/>
		<uni-list>
			<uni-list-item v-for="(item,index) in voices" :title="item.voiceName" showArrow
				:thumb="item.picture" thumb-size="lg" :rightText="item.duration"/>
		</uni-list>
	</view>
</template>

<script>
	import request from '@/utils/request'
    export default {
        data() {
            return {
				searchValue: '',
				page: 1,
				size: 5,
				voices: []
            };
        },
        methods: {
			lodaVoiceList() {
				request("/voice/search", 'GET', {
					keyword: this.searchValue,
					page: this.page,
					size: this.size
				}).then(res=>{
					console.log(res)
					if (res.data.data.length != 0) {
						for (let i = 0; i < res.data.data.length; i ++) {
							// 处理时长
							res.data.data[i].duration = parseInt(res.data.data[i].duration / 60) + ":" + parseInt(res.data.data[i].duration % 60)
							this.voices.push(res.data.data[i])
						}
						this.page++;
					}
				}).catch(err=>{
				    console.log(err)
				})
			},
			search() {
				this.page = 1;
				this.voices = []
				this.lodaVoiceList()
			},
        },
		onShow () {
			this.page = 1;
			this.voices = []
			this.searchValue = this.$route.query.searchValue
			this.lodaVoiceList()
		},
		onReachBottom() {
			this.lodaVoiceList()
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