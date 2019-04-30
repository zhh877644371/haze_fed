<template>
  <div class="u-container">
    <div id="container1" class="u-pic-container"></div>
    <div id="container2" class="u-pic-container"></div>
  </div>
</template>
<script>
import option1 from '@/echarts/height-time1.js';
import option2 from '@/echarts/height-time2.js';
import echarts from 'echarts';

export default {
  name: '',
  data () {
    return {  
    }
  },
  methods: {
    draw() {
      var myChart = this.$echarts.init(document.getElementById('container1'));
      myChart.setOption(option1);
      var myChart2 = this.$echarts.init(document.getElementById('container2'));
      myChart2.setOption(option2);
    }
  },
  mounted() {
    this.draw();
  }
}
</script>
<style lang="less" scoped>
  .u-container {
    display: flex;
    height: 600px;
  }
  .u-pic-container {
    width: 50%;
  }
</style>