<template>
  <div>
    <div class="u-select-container">
      站点：
      <el-select v-model="station" placeholder="请选择" @change="draw">
        <el-option
          v-for="item in options"
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
import { close, closeSync } from 'fs';
import { server, CountryMap } from '@/assets/constant';
import axios from 'axios';
import { drawEuropeData } from '@/util/draw';

export default {
  name: '',
  data () {
    return {
      options: [{
        value: 'na',
        label: 'na'
      }, {
        value: 'gr',
        label: 'gr'
      }, {
        value: 'ba',
        label: 'ba'
      }, {
        value: 'co',
        label: 'co'
      }, {
        value: 'kb',
        label: 'kb'
      }, {
        value: 'th',
        label: 'th'
      }, {
        value: 'po',
        label: 'po'
      }, {
        value: 'hb',
        label: 'hb'
      }, {
        value: 'hh',
        label: 'hh'
      }, {
        value: 'sp',
        label: 'sp'
      }, {
        value: 'at',
        label: 'at'
      }, {
        value: 'ms',
        label: 'ms'
      }, {
        value: 'ox',
        label: 'ox'
      }],
      station: "th"
    }
  },
  methods: {
    draw() {
      let chart1 = this.$echarts.init(document.getElementById('container'));
      // 销毁之前的实例
      chart1.dispose();
      let myChart = this.$echarts.init(document.getElementById('container'));  
      myChart.showLoading();
      axios.get(`${server}/getEuropeData`, {
        params: {
          station: this.station
        }
      }).then((res) => {
        console.log('res', res);
        if(res.data.code == 200) {
          myChart.hideLoading();
          drawEuropeData(myChart, res.data.result);
        } else {
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: 'error'
          });
        }
      }).catch((err) => {
        console.warn('err', err);
      });
    }
  },
  mounted() {
    this.draw();
  }
}
</script>
<style lang="less" scoped>
  .u-select-container {
    width: 100%;
    height: 50px;
    text-align: left;
  }
  .u-pic-container {
    width: 100%;
    height: 600px;
  }
  .el-select {
    width: 160px;
  }
</style>