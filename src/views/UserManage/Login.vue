<template>
    <div>
      <p class="u-lable">欢迎登录</p>
      <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="100px" class="u-login-form">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="loginForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input type="password" v-model="loginForm.pwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
import axios from 'axios';
import { server } from '@/assets/constant';

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value.length < 6) {
        callback(new Error('请输入6位以上的密码'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        email: '',
        pwd: ''
      },
      loginRules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        pwd: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let store = this.$store,
          router = this.$router,
          message = this.$message;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 发送登陆请求
          axios.post(`${server}/login`, {
            email: this.loginForm.email,
            pwd: this.loginForm.pwd,
          }).then(function(res) {
            console.log('res', res);
            if(res.data.code == 200) {
              store.commit('handleLogin', res.data.userEmail);
              message({
                showClose: true,
                message: res.data.msg,
                type: 'success'
              });
              router.push('/');
            } else {
              message({
                showClose: true,
                message: res.data.msg,
                type: 'error'
              });
            }
          }).catch(function(err) {
            message({
              showClose: true,
              message: `操作失败！${err}`,
              type: 'error'
            });
            console.warn('err', err);
          });
        } else {
          this.$message({
            showClose: true,
            message: '请输入正确的邮箱和密码！',
            type: 'error'
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style lang="less" scoped>
  .u-lable {
    font-size: 20px;
    margin-left: 100px;
  }
  .u-login-form {
    margin: 66px 30% 0 30%;
  }
</style>
