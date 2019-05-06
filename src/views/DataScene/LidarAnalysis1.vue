<template>
  <div>
    <div class="u-select-container">
      数据类型：
      <el-select v-model="value" placeholder="请选择" @change="draw">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
    </div>
    <div id="container" class="u-pic-container"></div>
  </div>
</template>
<script>
import echarts from 'echarts';
import { close, closeSync } from 'fs';
import { server, ProvinceMap, CountryMap } from '@/assets/constant';
import axios from 'axios';
import { drawLidarHeight, drawLidarWave, drawLidarDepo } from '@/util/draw';

export default {
  name: '',
  data () {
    return {
      options: [{
        value: 1,
        label: '雷达比与高度'
      }, {
        value: 2,
        label: '雷达比与波长'
      }, {
        value: 3,
        label: '雷达比与退偏比',
        disabled: true
      }],
      value: 1
    }
  },
  methods: {
    draw() {
      console.log('value', this.value)
      let province = this.$route.params.province;
      let chart1 = this.$echarts.init(document.getElementById('container'));
      // 销毁之前的实例
      chart1.dispose();
      let myChart = this.$echarts.init(document.getElementById('container'));  
      myChart.hideLoading();
      axios.get(`${server}/getLidarData`, {
        params: {
          country: "China",
          location: this.value == 3 ? 'Pearl River Delta' : ProvinceMap[province]
        }
      }).then((res) => {
        console.log('res', res);
        if(res.data.code == 200) {
          if(this.value == 1) {
            drawLidarHeight(myChart, res.data, province);
          } else if (this.value == 2) {
            drawLidarWave(myChart, res.data);
          } else if (this.value == 3) {
            drawLidarDepo(myChart, res.data);
          }
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
  created() {
    if(this.$route.params.province == '广东') {
      this.options[2].disabled = false;
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
</style>