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
				<uni-forms-item label="性别" required>
					<uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
				</uni-forms-item>
				<uni-forms-item label="日期时间">
					<uni-datetime-picker type="datetime" return-type="timestamp" v-model="baseFormData.datetimesingle"/>
				</uni-forms-item>
			</uni-forms>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 基础表单数据
				baseFormData: {
					id: 2132412,
					name: '',
					sex: 2,
					datetimesingle: 1627529992399
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
			onClickItem(e) {
				console.log(e);
				this.current = e.currentIndex
			},
			add() {
				this.dynamicLists.push({
					label: '域名',
					rules: [{
						'required': true,
						errorMessage: '域名项必填'
					}],
					id: Date.now()
				})
			},
			del(id) {
				let index = this.dynamicLists.findIndex(v => v.id === id)
				this.dynamicLists.splice(index, 1)
			},
			submit(ref) {
				this.$refs[ref].validate().then(res => {
					console.log('success', res);
					uni.showToast({
						title: `校验通过`
					})
				}).catch(err => {
					console.log('err', err);
				})
			},
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
