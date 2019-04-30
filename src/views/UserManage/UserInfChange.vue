<template>
    <div>
      <p class="u-lable">密码修改</p>
      <div>
        <el-form :model="registerForm" status-icon :rules="registerRules" ref="registerForm" label-width="100px" class="u-register-form">
          <el-form-item label="新密码" prop="newPwd">
            <el-input type="password" v-model="registerForm.newPwd" autocomplete="off" minlength="6"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPwd">
            <el-input type="password" v-model="registerForm.checkPwd" autocomplete="off" minlength="6"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('registerForm')">确认</el-button>
            <el-button @click="resetForm('registerForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
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
        callback(new Error('请设置6位以上的密码'));
      } else {
        if (this.registerForm.checkPwd !== '') {
          this.$refs.registerForm.validateField('checkPwd');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.newPwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        oldPwd: '',
        newPwd: '',
        checkPwd: ''
      },
      registerRules: {
        newPwd: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPwd: [
          { required: true, validator: validatePass2, trigger: 'blur' }
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
          axios({
            method: 'post',
            url: `${server}/changePwd`,
            data: {
              email: store.state.userName,
              newPwd: this.registerForm.newPwd
            }
          }).then(function(res) {
            console.log('res', res);
            if(res.data.code == 200) {
              message({
                showClose: true,
                message: res.data.msg,
                type: 'success'
              });
              // 退出登录并跳转至登录页
              store.commit('handleLogout');
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
          console.log('error submit!!');
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
