<template>
  <div>
    <div id="container" class="u-pic-container"></div>
  </div>
</template>
<script>
import option from '@/echarts/area-option.js';
import echarts from 'echarts';

export default {
  name: '',
  data () {
    return {  
    }
  },
  methods: {
    draw() {
      var myChart = this.$echarts.init(document.getElementById('container'));
      myChart.setOption(option);
    }
  },
  mounted() {
    this.draw();
  }
}
</script>
<style lang="less" scoped>
  .u-pic-container {
    width: 100%;
    height: 600px;
  }
</style>