<template>
	<view>
		<view class="index-title">
			<view class="text">个人信息</view>
		</view>
		<view class="example">
			<uni-forms ref="baseForm" :modelValue="baseFormData">
				<uni-forms-item label="ID" required>
					<uni-easyinput disabled v-model="userId" placeholder="请输入ID" />
				</uni-forms-item>
				<uni-forms-item label="姓名" required>
					<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
				</uni-forms-item>
				<uni-forms-item label="年龄" required>
					<uni-easyinput type="number" v-model="baseFormData.age" placeholder="请输入年龄" />
				</uni-forms-item>
				<uni-forms-item label="性别" required>
					<uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
				</uni-forms-item>
				<button type="primary" @click="edit()">保存</button>
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
					name: '',
					sex: 2,
					age: 0
				},
				// 单选数据源
				sexs: [{
					text: '男',
					value: 1
				}, {
					text: '女',
					value: 2
				}],
				userId: 0
			}
		},
		methods: {
			edit() {
				console.log(this.baseFormData)
				this.baseFormData.age = parseInt(this.baseFormData.age)
				request("/user/update", 'PUT', JSON.stringify(this.baseFormData), 1).then(res=>{
					console.log(res)
					uni.switchTab({
						url: "/pages/personal/personal"
					})
				}).catch(err=>{
					console.log(err)
				})
			},
			loadUserInfo() {
				request("/user/get", 'GET').then(res=>{
					console.log(res)
					this.userId = res.data.data.id
					this.baseFormData.name = res.data.data.name
					this.baseFormData.sex = res.data.data.sex
					this.baseFormData.age = res.data.data.age
				}).catch(err=>{
					console.log(err)
				})
			}
		},
		onShow() {
			this.loadUserInfo()
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
