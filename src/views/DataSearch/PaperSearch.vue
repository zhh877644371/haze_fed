<template>
  <div>
    <!-- <div class="u-select-container">
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
    </div> -->
    <el-table
      :data="lidarData"
      style="width: 98%"
      :default-sort = "{prop: 'date', order: 'descending'}"
      >
      <el-table-column
        prop="id"
        label="论文ID"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="题目">
      </el-table-column>
      <el-table-column
        prop="journal"
        label="出版社">
      </el-table-column>
      <el-table-column
        prop="DOI"
        label="DOI">
      </el-table-column>
      <el-table-column
        prop="method"
        label="数据获取方式">
      </el-table-column>
      <el-table-column
        prop="instrument"
        label="设备"
        width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { server } from '@/assets/constant';
import axios from 'axios';

export default {
  data() {
    return {
      lidarData: []
    }
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    renderData() {
      axios.get(`${server}/getPaperData`, {
        params: {
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
    }
  },
  mounted() {
    this.renderData();
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

