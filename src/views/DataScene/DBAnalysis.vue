<template>
  <div>
    <div class="u-select-container">
      <span>图形显示：</span>
      <el-select v-model="picType" placeholder="请选择" @change="draw">
        <el-option
          v-for="item in picOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span class="u-select-span">数据类型：</span>
      <el-select v-model="dataType" placeholder="请选择" @change="draw">
        <el-option
          v-for="item in dataOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div id="container" class="u-pic-container"></div>
  </div>
</template>
<script>
import echarts from 'echarts';
import { countryStatistics, waveStatistics } from '@/assets/dbData';
import { drawCategory, drawPie } from '@/util/draw';

export default {
  name: '',
  data () {
    return {
      picOptions: [{
        value: 1,
        label: '饼形图'
      }, {
        value: 2,
        label: '柱形图'
      }],
      picType: 1,
      dataOptions: [{
        value: 1,
        label: '地区分布'
      }, {
        value: 2,
        label: '波长分布'
      }],
      dataType: 1,
    }
  },
  methods: {
    draw() {
      let chart1 = this.$echarts.init(document.getElementById('container'));
      chart1.dispose();
      let myChart = this.$echarts.init(document.getElementById('container'));
      let drawData = [countryStatistics, waveStatistics];
      let title = ['地区分布', '波长分布'];
      // if (this.dataType == 1 && this.picType == 1) {
      //   drawPie(myChart, countryStatistics, '地区分布');
      // } else if (this.dataType == 1 && this.picType == 2) {
      //   drawCategory(myChart, countryStatistics, '地区分布');
      // } else if (this.dataType == 2 && this.picType == 1) {
      //   drawPie(myChart, waveStatistics, '波长分布');
      // } else if (this.dataType == 2 && this.picType == 2) {
      //   drawCategory(myChart, waveStatistics, '波长分布');
      // }
      if (this.picType == 1) {
        drawPie(myChart, drawData[this.dataType - 1], title[this.dataType - 1]);
      } else if (this.picType == 2) {
        drawCategory(myChart, drawData[this.dataType - 1], title[this.dataType - 1]);
      }
    }
  },
  mounted() {
    this.draw();
  }
}
</script>
<style lang="less" scoped>
  .u-select-span {
    margin-left: 20px;
  }
  .u-select-container {
    width: 100%;
    height: 50px;
    text-align: left;
  }
  .u-pic-container {
    width: 100%;
    height: 600px;
  }
</style>