<template>
  <div id="body" style="margin-top: 40px">
      <div style="border-bottom: 1px solid rgb(230,230,230);padding-bottom: 35px">
    <div id="upload-img-placeholder">
      <img src="../img/camera.png">
      <span>이미지를 업로드해주세요.</span>
    </div>
      </div>
    <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm" style="margin-top: 40px">
      <el-form-item
        label="판매자 명"
        prop="seller"
        :rules="[
      { required: true, message: '판매자 명을 입력해주세요'},
      // { type: 'number', message: 'age must be a number'}

    ]"
      >

        <el-input v-model.number="numberValidateForm.seller" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="상품 이름"
        prop="productsName"
        :rules="[
      { required: true, message: '상품 이름을 입력해주세요'},

    ]"
      >

        <el-input v-model.number="numberValidateForm.productsName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="상품 가격"
        prop="productsPrice"
        :rules="[
      { required: true, message: '상품 가격을 입력해주세요'},

    ]"
      >

        <el-input v-model.number="numberValidateForm.productsPrice" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="상품 소개"
        prop="productsDescription"
        :rules="[
      { required: true, message: '상품 소개를 입력해주세요'},

    ]"
      >

        <el-input v-model.number="numberValidateForm.productsDescription" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item style="margin-top: 50px; text-align: center">
        <el-button type="primary" @click="submitForm('numberValidateForm')">등록하기</el-button>
        <el-button @click="resetForm('numberValidateForm')">초기화</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
    export default {
        name: "Upload",
      data() {
        return {
          numberValidateForm: {
            seller: '',
            productsName:'',
            productsPrice:'',
            productsDescription:'',
          }
        };
      },
      methods: {
        submitForm(data) {
          this.$refs[data].validate((valid) => {
            if (valid) {
              alert('submit!');
              console.log(this.numberValidateForm)
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(data) {
          this.$refs[data].resetFields();
        }
      }
    }
</script>

<style scoped>
  #upload-img-placeholder{
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(230,230,230);
  background: rgb(250,250,250);
  margin-left: 50px;
  }
  #upload-img-placeholder img{
    width: 50px;
    height: 50px;

  }
  #upload-img-placeholder span{
    font-size: 14px;
    color: rgb(195,195,195);
  }
  .upload-name{
    width: 300px;
  }
  .upload-label{
    font-size: 18px;
    width: 80px;
  }
</style>
