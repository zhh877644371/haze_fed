<template>
  <div>
    <div id="mapContainer" class="u-map-container"></div>
  </div>
</template>
<script>
import option from '@/echarts/china-map.js';
import echarts from 'echarts';
import 'echarts/map/js/china.js';

export default {
  name: '',
  data () {
    return {  
    }
  },
  methods: {
    drawChinaMap() {
      var myChart = this.$echarts.init(document.getElementById('mapContainer'));
      myChart.setOption(option);
    }
  },
  mounted() {
    this.drawChinaMap();
  }
}
</script>
<style lang="less" scoped>
  .u-map-container {
    width: 100%;
    height: 600px;
  }
</style>

