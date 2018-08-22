<template>
  <div id="app"> 
    <div class="header">
      <router-link to="/hot"><svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-anniu"></use>
      </svg></router-link>济州东门传统市场</div>
   <div class="container">
        <div class="introduce" v-for="v in list[0].introduce">
          <span>{{v.title}}</span>
          <p>{{v.text}}</p>
        </div>

        <div class="introduce">
          <span  v-for="v in list[1].buy">{{v.title}}</span>     
          <ul>
            <li  v-for="v in list[1].buy">
              <img :src="v.img">
              <div class="img_bottom">
                <span>{{v.span}}</span>
                <p>{{v.text}}</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="introduce" v-for="v in list[2].bus">
          <span>{{v.title}}</span>
          <p>{{v.text}}</p>
        </div>

      <div class="bottom"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      list:""
    }
  },
  methods:{
    getHomeData(){
      this.$axios.get("data/hot_buy.json").then(response=>{
        this.list=response.data.data
        console.log(this.list)
      })
      .catch(error=>{
        console.log(error);
      })
    }
  },
  mounted(){
    this.getHomeData();
  }
}

</script>

<style scoped>
.icon{
  width: 22px;
  height: 22px;
}
body,ul,li,p{
  margin: 0;
  padding: 0;
  list-style: none;
}
body{
  max-width: 480px;
  margin: auto auto;
}
.header{
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-bottom: 1px solid lightgray;
  position: relative;
}
.header .icon{
  width: 22px;
  height: 22px;
  position: absolute;
  top: 7px;
  left: 5px;
}
.container{
  width:100%;
  padding: 0px 6px 0px 6px;
  box-sizing: border-box;
}
.introduce{
  margin: 10px 0px;
  border-bottom: 1px dotted #e4e4e4;
  overflow: hidden;
}
.introduce span{
  font-size: 16px;
}
.introduce p{
  font-size: 13px;
  margin: 10px 0px 15px 0px;
  line-height: 24px;
}
.introduce ul{
  width: 100%;
  margin-top: 15px;
}
.introduce ul li{
  width: 33.33%;
  overflow: hidden;
  padding-right: 10px;
  box-sizing: border-box;
  float: left;
}
.introduce ul li img{
  width: 100%;
}
.introduce .img_bottom p{
  font-size: 12px;
  margin-top: 5px;
  line-height: 20px;
}
.introduce .img_bottom span{
  font-size: 14px;
}



.bottom{
  height: 50px;
  width: 100%;
}
</style>
