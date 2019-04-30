<template>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据导入</el-breadcrumb-item>
        <el-breadcrumb-item>图片数据上传</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="u-container">
        <el-upload
          class="u-upload"
          drag
          action="http://localhost:3000"
          :before-remove="beforeRemove"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="u-submit-form">
          <el-form-item label="图片类型" prop="type">
            <el-select v-model="ruleForm.type" placeholder="请选择图片类型">
              <el-option label="散点图" value="1"></el-option>
              <el-option label="直方图" value="2"></el-option>
              <el-option label="折线图" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="横坐标对应属性" prop="xAttribute">
            <el-input v-model="ruleForm.xAttribute"></el-input>
          </el-form-item>
          <el-form-item label="横坐标对应值范围" prop="xValue">
            <el-input class="u-number-input" v-model="ruleForm.xMinValue"></el-input>&nbsp;--
            <el-input class="u-number-input" v-model="ruleForm.xMaxValue"></el-input>
          </el-form-item>
          <el-form-item label="纵坐标对应属性" prop="yAttribute">
            <el-input v-model="ruleForm.yAttribute"></el-input>
          </el-form-item>
          <el-form-item label="纵坐标对应值范围" prop="yValue">
            <el-input class="u-number-input" v-model="ruleForm.yMinValue"></el-input>&nbsp;--
            <el-input class="u-number-input" v-model="ruleForm.yMaxValue"></el-input>
          </el-form-item>
          <el-form-item label="统计时间">
            <el-date-picker
              v-model="ruleForm.year"
              type="year"
              placeholder="选择时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="观测波长" prop="length">
            <el-select v-model="ruleForm.length" placeholder="请选择观测波长">
              <el-option label="532波长" value="5320"></el-option>
              <el-option label="355波长" value="3550"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        fileList: [],
        ruleForm: {
          type: '',
          xAttribute: '',
          xMinValue: '',
          xMaxValue: '',
          yAttribute: '',
          yMinValue: '',
          yMaxValue: '',
          year: '',
          length: '',
        },
        rules: {
          type: [
            { required: true, message: '请选择图片类型', trigger: 'change' }
          ],
          xAttribute: [
            { required: true, message: '请输入X轴代表含义', trigger: 'blur' }
          ],
          xMinValue: [
            { required: true, message: '请输入X轴最小值', trigger: 'blur' }
          ],
          xMaxValue: [
            { required: true, message: '请输入X轴最大值', trigger: 'blur' }
          ],
          yAttribute: [
            { required: true, message: '请输入Y轴代表含义', trigger: 'blur' },
          ],
          yMinValue: [
            { required: true, message: '请输入Y轴最小值', trigger: 'blur' }
          ],
          yMaxValue: [
            { required: true, message: '请输入Y轴最大值', trigger: 'blur' }
          ],
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
    position: relative;
  }
  .u-upload {
    position: absolute;
    top: 100px;
    left: 50px;
  }
  .u-submit-form {
    margin: 66px 10% 0 40%;
    text-align: left;
  }
  .u-number-input {
    width: 100px;
  }
</style>

