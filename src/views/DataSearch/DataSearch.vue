<template>
  <div>
    <div class="u-select-container">
      <span>国家：</span>
      <el-select v-model="country" placeholder="请选择">
        <el-option
          v-for="item in countryOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span class="u-span-ml">波长：</span>
      <el-select v-model="wavelength" placeholder="请选择">
        <el-option
          v-for="item in waveOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button icon="el-icon-search" circle class="u-span-ml" @click="search"></el-button>
    </div>
    <el-table
      :data="lidarData"
      style="width: 100%"
      :default-sort = "{prop: 'date', order: 'descending'}"
      >
      <el-table-column
        prop="value"
        label="雷达比"
        sortable>
      </el-table-column>
      <el-table-column
        prop="wavelength"
        label="波长">
      </el-table-column>
      <el-table-column
        prop="height"
        label="高度"
        sortable>
      </el-table-column>
      <el-table-column
        prop="year"
        label="年份">
      </el-table-column>
      <el-table-column
        prop="time_tip"
        label="时间备注">
      </el-table-column>
      <el-table-column
        prop="country"
        label="国家">
      </el-table-column>
      <el-table-column
        prop="location_tip"
        label="地区">
      </el-table-column>
      <el-table-column
        prop="paper_id"
        label="对应论文ID">
      </el-table-column>
      <el-table-column
        prop="depo_value"
        label="退偏比">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { server, CountryMap } from '@/assets/constant';
import axios from 'axios';

let countryOptions = [];
for(let prop in CountryMap) {
  countryOptions.push({
    label: prop,
    value: CountryMap[prop]
  });
}

export default {
  data() {
    return {
      countryOptions,
      country: '',
      waveOptions: [{
        lable: "355nm",
        value: "355nm"
      }, {
        lable: "532nm",
        value: "532nm"
      }, {
        lable: "351nm",
        value: "351nm"
      }, {
        lable: "1064nm",
        value: "1064nm"
      }],
      wavelength: '',
      lidarData: []
    }
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    search() {
      this.lidarData = [];
      console.log('country', this.country, 'wavelength', this.wavelength);
      axios.get(`${server}/getSearchData`, {
        params: {
          country: this.country,
          wavelength: this.wavelength
        }
      }).then((res) => {
        console.log('res', res);
        if(res.data.code == 200) {
          this.lidarData = res.data.result;
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: 'success'
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
    renderData() {
      console.log('111');
    }
  }
}
</script>
<style lang="less" scoped>
  .u-select-container {
    width: 100%;
    height: 50px;
    text-align: left;
  }
  .u-span-ml {
    margin-left: 10px;
  }
  .el-select {
    width: 160px;
  }
</style>

