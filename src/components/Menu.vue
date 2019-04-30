<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-upload"></i>
          <span>数据导入</span>
        </template>
          <el-menu-item index="1-1" v-on:click="toDataStorage">图片数据存储</el-menu-item>
          <el-menu-item index="1-2" v-on:click="toTxtDataStorage">文本数据存储</el-menu-item>
      </el-submenu> -->
      <el-menu-item index="1">
        <i class="el-icon-search"></i>
        <span slot="title" v-on:click="toDataSearch">数据查询</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-view"></i>
          <span>数据展示</span>
        </template>
          <el-menu-item index="2-1" v-on:click="toWorldMap">雷达比数据世界分布</el-menu-item>
          <el-menu-item index="2-2" v-on:click="toChinaMap">雷达比数据中国分布</el-menu-item>
          <el-menu-item index="2-3" v-on:click="toLidarAnalysis1">雷达比与高度</el-menu-item>
          <el-menu-item index="2-4" v-on:click="toLidarAnalysis2">雷达比与波长</el-menu-item>
          <el-menu-item index="2-5" v-on:click="toDataAnalysis1">雷达比数据库分析</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title" v-on:click="toUserInfChange">用户信息修改</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-document"></i>
        <span slot="title" v-on:click="toHome">Home</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-service"></i>
        <span slot="title" v-on:click="toAbout">About</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    toHome() {
      this.$router.push('/');
    },
    toAbout() {
      this.$router.push('/about');
    },
    // toDataStorage() {
    //   this.$router.push('/picDataStorage1');
    // },
    toDataSearch() {
      this.$router.push('/dataSearch');
    },
    toScatterPicture() {
      this.$router.push('/picDataStorage2');
    },
    // toTxtDataStorage() {
    //   this.$router.push('/txtDataStorage');
    // },
    toChinaMap() {
      this.$router.push('/ChinaMap');
    },
    toWorldMap() {
      this.$router.push('/WorldMap');
    },
    toUserInfChange() {
      this.$router.push('/userInfChange');
    },
    toDataAnalysis1() {
      this.$router.push('/dataAnalysis1');
    },
    toLidarAnalysis1() {
      this.$router.push('/lidarAnalysis1');
    },
    toLidarAnalysis2() {
      this.$router.push('/lidarAnalysis2');
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
