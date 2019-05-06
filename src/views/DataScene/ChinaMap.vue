<template>
  <div>
    <div id="mapContainer" class="u-map-container"></div>
  </div>
</template>
<script>
import option from '@/echarts/china-map.js';
import echarts from 'echarts';
import 'echarts/map/js/china.js';
import { ProvinceMap } from '@/assets/constant';

export default {
  name: '',
  data () {
    return {  
    }
  },
  methods: {
    drawChinaMap() {
      var router = this.$router;
      var myChart = this.$echarts.init(document.getElementById('mapContainer'));
      myChart.setOption(option);
      myChart.on('click', function(params) {
        console.log(params);
        if(ProvinceMap[params.name]) {
          router.push(`/lidarAnalysis1/China/${params.name}`);
        }
      })
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

