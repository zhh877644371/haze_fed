<template>
    <div class="header">
        <img alt="Haze Logo" class="web_logo" src="../assets/web_logo.png" v-on:click="toHome"/>
        <span>
          <el-button type="info" class="u-btn-login" v-on:click="toLogin">登录</el-button>
          <el-button type="info" v-on:click="toRegister">注册</el-button>
        </span>
    </div>
</template>

<script>
export default {
    methods: {
        toHome() {
            this.$router.push('/');
        },
        toLogin() {
            this.$router.push('/login');
        },
        toRegister() {
            this.$router.push('/register');
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
        margin-right: 5px;
    }
</style>