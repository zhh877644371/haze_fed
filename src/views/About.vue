<template>
  <div class="about">
      <div class="block">
        <el-timeline>
          <el-timeline-item timestamp="2018/12/10" placement="top" hide-timestamp="false">
            <el-card>
              <h4>气溶胶数据分析系统项目</h4>
              <p>致力于搭建全面、实时、准确的气溶胶数据库</p>
              <p>提供专业气溶胶文献统计与分析服务</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/1/20" placement="top">
            <el-card>
              <h4>数据库数据量简介</h4>
              <p>目前存储抽取气溶胶数据10000+条及欧洲观测数据27W+，数据量还在不断扩充中</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/2/26" placement="top">
            <el-card>
              <h4>提供的功能支持</h4>
              <p>提供气溶胶数据分析系统相应的基础服务及可视化服务</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
      <p>您有什么好的建议和意见吗？</p>
      <el-input
        class="u-input"  
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
      <el-button>提交</el-button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "about",
//   components: {
//     HelloWorld
//   }
// };
export default {
  name: "about",
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
      textarea: ''
    }
  }
}
</script>

<style lang="less" scoped>
  .u-input {
    width: 500px;
  }
</style>
