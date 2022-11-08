<template>
    <div id="body">
      <div id="image-box">
        <img :src="imageUrl">
      </div>
      <div id="profile-box">
        <img src="../img/avatar.png">
        <span>{{seller}}</span>
      </div>
      <div id="contents-box">
        <div id="name">{{name}}</div>
        <div id="price">{{price}}</div>
        <div id="createAt">2022년 1월 1일</div>
        <div id="description">{{description}}</div>
      </div>
    </div>
</template>

<script>

    export default {
        name: "Detail",
        data(){
          return{
            seller:'',
            name:'',
            price: '',
            imageUrl: '',
            description:''
          }
        },
      methods:{

      },
      created() {
          const dt = this.$root.readData(this.$route.params.id)
        if(dt){
          this.seller=dt.seller
          this.name=dt.name
          this.price=dt.price
          this.imageUrl= dt.imageUrl
          this.description=dt.description
        }
      }
    }
</script>

<style scoped>

  #image-box{
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  }
  #image-box img{
    height: 100%;
  }
  #profile-box{
    padding: 16px;
    margin-top: 8px;
    border-bottom: 1px solid #e9ecef;
    display: flex;
    align-items: center;
  }
  #profile-box img{
    width: 50px;
    height: 50px;
  }
  #profile-box span{
    font-size: 15px;
    margin-left: 8px;
    font-weight: 600;
  }
  #contents-box{
    padding: 16px;
  }
  #name{
    font-size: 20px;
    font-weight: 400;
  }
  #price{
    font-size: 16px;
    font-weight: 600;
  }
  #description{
    margin-top: 16px;
  }
  #createAt{
    font-size: 12px;
    color: rgb(204,204,204);
  }
</style>
