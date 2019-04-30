<template>
    <div class="header">
      <img alt="Haze Logo" class="web_logo" src="../assets/pic/web_logo.jpg" v-on:click="toHome"/>
      <span v-show="isLogin">
        <el-tag type="info">Hello, {{userName}}</el-tag>
        <el-button type="info" class="u-btn-login" v-on:click="toLogout">退出登录</el-button>
      </span>
      <span v-show="!isLogin">
        <el-button type="info" class="u-btn-login" v-on:click="toLogin">登录</el-button>
        <el-button type="info" v-on:click="toRegister">注册</el-button>
      </span>
    </div>
</template>

<script>
export default {
  // 计算属性
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    },
    userName() {
      return this.$store.state.userName
    }
  },
  // 方法
  methods: {
    toHome() {
      this.$router.push('/');
    },
    toLogin() {
      this.$router.push('/login');
    },
    toRegister() {
      this.$router.push('/register');
    },
    toLogout() {
      this.$store.commit('handleLogout');
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="less" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .web_logo {
    cursor: pointer;
  }
  .u-btn-login {
    margin: 0 5px;
  }
</style>