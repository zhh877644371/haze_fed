<template>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据导入</el-breadcrumb-item>
        <el-breadcrumb-item>文本数据上传</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="u-container">
        <el-form ref="selectForm" label-width="150px" class="u-select-form">
          <el-form-item label="上传方式" prop="method">
            <el-select v-model="method" placeholder="请选择上传方式">
              <el-option label="手动输入" value="1"></el-option>
              <el-option label="文本导入" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-form :model="uploadForm" :rules="rules" ref="uploadForm" label-width="150px" class="u-submit-form" v-if="method == 1">
          <el-form-item label="雷达比数值" prop="value">
            <el-input v-model="uploadForm.value"></el-input>
          </el-form-item>
          <el-form-item label="观测波长" prop="length">
            <el-select v-model="uploadForm.length" placeholder="请选择观测波长">
              <el-option label="532波长" value="5320"></el-option>
              <el-option label="355波长" value="3550"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="高度" prop="height">
            <el-input v-model="uploadForm.height"></el-input>
          </el-form-item>
          <el-form-item label="统计时间">
            <el-date-picker
              v-model="uploadForm.year"
              type="year"
              placeholder="选择时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="时间备注" prop="time_tip">
            <el-input v-model="uploadForm.time_tip"></el-input>
          </el-form-item>
          <el-form-item label="地区备注" prop="location_tip">
            <el-input v-model="uploadForm.location_tip"></el-input>
          </el-form-item>
          <el-form-item label="对应退偏比值" prop="depo_value">
            <el-input v-model="uploadForm.depo_value"></el-input>
          </el-form-item>
        </el-form>
        <el-upload
          class="u-upload"
          drag
          action="http://localhost:3000"
          :before-remove="beforeRemove"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          v-if="method == 2"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传txt文件，txt文件需按一定格式书写</div>
        </el-upload>
        <div class="u-btn-area">
          <el-button class="u-submit-btn" type="primary" @click="submitForm('uploadForm')">提交</el-button>
          <el-button @click="resetForm('uploadForm')" v-if="method == 1">重置</el-button>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        method: '1',
        fileList: [],
        uploadForm: {
          value: '',
          length: '',
          height: '',
          year: '',
          time_tip: '',
          location_tip: '',
          depo_value: ''
        },
        rules: {
          value: [
            { required: true, message: '请输入雷法比数值', trigger: 'blur' }
          ],
          length: [
            { required: true, message: '请选择观测波长', trigger: 'blur' }
          ],
          year: [
            { required: true, message: '请选择年份', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="less" scoped>
  .u-container {
    margin: 66px 30% 0 30%;
    text-align: left;
  }
  .u-upload {
    margin: 10px 0 30px 90px;
  }
  .u-btn-area {
    text-align: center;
  }
</style>

