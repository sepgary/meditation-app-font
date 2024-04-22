<template>
	<view>
		<view class="index-title">
			<view class="text">个人信息</view>
		</view>
		<view class="example">
			<uni-forms ref="baseForm" :modelValue="baseFormData">
				<uni-forms-item label="ID" required>
					<uni-easyinput disabled v-model="baseFormData.id" placeholder="请输入ID" />
				</uni-forms-item>
				<uni-forms-item label="姓名" required>
					<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
				</uni-forms-item>
				<uni-forms-item label="年龄" required>
					<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
				</uni-forms-item>
				<uni-forms-item label="性别" required>
					<uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
				</uni-forms-item>
				<button type="primary" @click="edit()">取消收藏</button>
			</uni-forms>
		</view>
	</view>
</template>

<script>
	import request from '@/utils/request'
	export default {
		data() {
			return {
				// 基础表单数据
				baseFormData: {
					id: 2132412,
					name: '',
					sex: 2,
					age
				},
				// 单选数据源
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}],
			}
		},
		methods: {
			edit() {
				request("/user/update", 'PUT', this.baseFormData, 1).then(res=>{
					console.log(res)
					uni.switchTab({
						url: "/pages/personal/personal"
					})
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>


<style>
	.index-title {
		font-size: x-large;
		font-weight: bold;
		text-align: center;
		padding: 35rpx 35rpx 35rpx 35rpx;
	}
.example {
		padding: 15px;
		background-color: #fff;
	}

	.segmented-control {
		margin-bottom: 15px;
	}

	.button-group {
		margin-top: 15px;
		display: flex;
		justify-content: space-around;
	}

	.form-item {
		display: flex;
		align-items: center;
	}

	.button {
		display: flex;
		align-items: center;
		height: 35px;
		margin-left: 10px;
	}
</style>
