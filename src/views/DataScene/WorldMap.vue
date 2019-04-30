<template>
  <div>
    <div id="mapContainer" class="u-pic-container"></div>
  </div>
</template>
<script>
import option from '@/echarts/world-map.js';
import echarts from 'echarts';
import 'echarts/map/js/world.js';

export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {
    drawWorldMap() {
      var myChart = this.$echarts.init(document.getElementById('mapContainer'));
      var router = this.$router;
      myChart.setOption(option);
      myChart.on('click', function(params) {
        console.log(params);
        if(params.name == "中国") {
          router.push('/ChinaMap');
        }
      })
    },
  },
  mounted() {
    this.drawWorldMap();
  }
}
</script>
<style lang="less" scoped>
  .u-pic-container {
    width: 100%;
    height: 600px;
  }
</style>
