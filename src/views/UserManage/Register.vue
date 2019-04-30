<template>
    <div>
      <p class="u-lable">欢迎注册</p>
      <p class="u-tips">已有账号？<router-link to="/login">去登录</router-link></p>
      <div>
        <el-form :model="registerForm" status-icon :rules="registerRules" ref="registerForm" label-width="100px" class="u-register-form">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="registerForm.email"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="registerForm.pass" autocomplete="off" minlength="6"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="registerForm.checkPass" autocomplete="off" minlength="6"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="userRegister('registerForm')">注册</el-button>
            <el-button @click="resetForm('registerForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>
<script>
import { server } from '@/assets/constant';
import axios from 'axios';

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value.length < 6) {
        callback(new Error('请设置6位以上的密码'));
      } else {
        if (this.registerForm.checkPass !== '') {
          this.$refs.registerForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        pass: '',
        checkPass: '',
        email: ''
      },
      registerRules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    userRegister(formName) {
      let router = this.$router,
          message = this.$message;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios({
            method: 'post',
            url: `${server}/reg`,
            data: {
              email: this.registerForm.email,
              pwd: this.registerForm.pass
            }
          }).then(function(res) {
            console.log('res', res);
            if(res.data.code == 200 || res.data.code == 1) {
              message({
                showClose: true,
                message: res.data.msg,
                type: res.data.code == 200 ? 'success' : 'warning'
              });
              router.push('/login');
            } else {
              message({
                showClose: true,
                message: res.data.msg,
                type: 'error'
              });
            }
          }).catch(function(err) {
            console.warn('err', err);
          })
        } else {
          console.warn('error submit!!');
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
  .u-tips {
    margin-left: 100px;
  }
  .u-register-form {
    margin: 66px 30% 0 30%;
  }
</style>
