<template>
  <div>
    <div class="u-select-container">
      <span>数据类型：</span>
      <el-select v-model="value" placeholder="请选择" @change="draw">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
      <template v-if="paper_name != ''">
        <span class="u-tag-name" >数据来源：</span>
        <el-tag @click.native="openFile">{{paper_name}}</el-tag>
      </template>
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
      value: 1,
      paper_name: ''
    }
  },
  methods: {
    draw() {
      let province = this.$route.params.province;
      let chart1 = this.$echarts.init(document.getElementById('container'));
      // 销毁之前的实例
      chart1.dispose();
      let myChart = this.$echarts.init(document.getElementById('container'));  
      myChart.showLoading();
      axios.get(`${server}/getLidarData`, {
        params: {
          country: "China",
          location: this.value == 3 ? 'Pearl River Delta' : ProvinceMap[province]
        }
      }).then((res) => {
        console.log('res', res);
        if (res.data.code == 200) {
          myChart.hideLoading();
          if(this.value == 1) {
            drawLidarHeight(myChart, res.data, province);
          } else if (this.value == 2) {
            drawLidarWave(myChart, res.data);
          } else if (this.value == 3) {
            drawLidarDepo(myChart, res.data);
          }
          myChart.on('click', (params) => {
            let paper_id = params.data[params.data.length - 1];
            axios.get(`${server}/getPaperInfo`, {
              params: {
                paper_id: paper_id
              }
            }).then((res) => {
              console.log('paper_info', res);
              if (res.data.code == 200) {
                this.paper_name = res.data.paper_info.name;
              } else {
                this.$message({
                  showClose: true,
                  message: res.data.msg,
                  type: 'error'
                })
              };
            }).catch((err) => {
              console.warn('err', err);
            });
          });
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
    },
    openFile() {
      console.log('111');
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
  .el-select {
    width: 160px;
  }
  .u-tag-name {
    margin-left: 20px;
  }
  .el-tag {
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
  }
</style>