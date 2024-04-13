<template>
    <view>
        <view class="index-title">
            <view class="text">开始冥想</view>
        </view>
        <view class="example">
            <uni-forms ref="baseForm" :modelValue="baseFormData">
                <uni-forms-item label="手机号" required>
                    <uni-easyinput v-model="baseFormData.phone" placeholder="请输入手机号" />
                </uni-forms-item>
                <uni-forms-item label="验证码" required>
                    <view class="verification-code-input">
                        <uni-easyinput v-model="baseFormData.code" placeholder="请输入验证码" />
                        <button class="mini-btn" type="primary" size="mini" @click="sendCode">发送验证码</button>
                    </view>
                </uni-forms-item>
            </uni-forms>
			<button type="primary" plain="true" @click="submit">登录</button>
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
					phone: "",
					code: ""
                }
            }
        },
        methods: {
            submit() {
            },
			sendCode() {
				request("/user/code",'POST',{
				    phone: this.baseFormData.phone
				}).then(res=>{
				    console.log(res)
				}).catch(err=>{
				    console.log(err)
				})
			}
        },
		onLoad() {
			request("/base/launch",'GET').then(res=>{
			    console.log(res)
			}).catch(err=>{
			    console.log(err)
			})
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

    /* New styles for the verification code input */
    .verification-code-input {
        display: flex;
        align-items: center;
    }

    .verification-code-input uni-easyinput {
        flex: 1;
    }

    .verification-code-input button {
        margin-left: 10px;
    }
</style>
