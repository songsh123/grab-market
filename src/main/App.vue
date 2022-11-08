<template>
  <div>
    <div id="header">
      <div id="header-area">
        <img src="./img/logo.png" @click="$router.push('/')"/>
        <el-button @click="$router.push('/upload')">상품 업로드</el-button>
      </div>
    </div>
    <router-view style="height: 1000px"></router-view>
    <div id="footer"></div>
  </div>
</template>

<script>

  export default {
    name: "App",
  }
</script>

<style lang="scss">
  *{
    list-style: none;
    text-decoration: none;
    margin: 0px;
    padding: 0px;
    color: black;
  }

  #header{
    height: 64px;
    border-bottom: 1px solid gray;
  }

  #body{
    /*height: 100%;*/
    height: 1000px;
    width: 1024px;
    margin: 0 auto;
    padding-bottom: 24px;
  }

  #footer{
    height: 200px;
    background: grey;
  }

  #banner{
    height: 300px;
  }

  #header-area{
    height: 100%;
    width: 1024px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #header-area img{
    width: 128px;
    height: 36px;
  }

  #banner img{
    width: 100%;
  }

  #banner{
    margin-top: 16px;
  }

  #product-list{
    display: flex;
    flex-wrap: wrap;
    margin-top: 12px;
  }

  .product-card{
    width: 180px;
    height: 300px;
    margin-right: 12px;
    margin-bottom: 12px;
    border: 1px solid rgb(230,230,230);
    border-radius: 12px;
    overflow: hidden;
  }

  .product-img{
    width: 100%;
    height: 210px;
  }

  .product-contents{
    padding: 8px;
  }

  .product-seller{
    display: flex;
    margin-top: 12px;
  }

  .avatar-img{
    width: 24px;
  }

</style>
