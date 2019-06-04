<template>
  <div id="app">
    <el-container>
      <el-header style="height: 92px;">
        <Header />
      </el-header>
    <el-container>
      <el-aside width="200px">
        <Menu />
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
      <el-footer style="height: 130px;">
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Menu
  }
}
</script>

<style lang="less">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container {
    height: 100%;
  }
  .el-header {
    background-color: #292929;
    color: #ffffff;
  }
  .el-footer {
    background-color: #292929;
    color: #ffffff;
  }
  .el-main {
    height: 100%;
    min-height: 650px;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  .el-aside {
    background-color: #545C64;
    color: #333;
    text-align: center;
  }
</style>
