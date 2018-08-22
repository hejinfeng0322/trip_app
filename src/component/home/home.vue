<template>
  <div id="app"> 
   <div class="container">
      <div class="header">
        <div class="ip_box">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="请输入搜索关键字"> 
        </div>
        <span><svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-geren"></use>
           </svg></span>
      </div>

      <div class="view">
        <mt-swipe :auto="4000">
           <mt-swipe-item v-for="v in list[0].view">
              <img :src="v.img">
           </mt-swipe-item>
        </mt-swipe>
      </div>

      <div class="service">
        <span>
          <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-fuwu"></use>
           </svg>
           <p>旅游服务</p>
         </span>
        <ul>
          <li><i></i><p>护照</p></li>
          <li><i class="visa"></i><p>签证</p></li>
          <li><i class="plane"></i><p>机场</p></li>
          <li><i class="bus"></i><p>大巴</p></li>

          <li><i class="taxi"></i><p>出租车</p></li>
          <li><i class="subway"></i><p>地铁</p></li>
          <li><i class="live"></i><p>公演</p></li>
          <li><i class="money"></i><p>货币</p></li>
        </ul>
      </div>

        <div class="hot">
          <span>
            <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-remen"></use>
           </svg>
            <p>济州岛人气地区排行榜</p>
          </span>
          <ul>
            <router-link to="/home_top"><li v-for="v in list[1].hot">
              <div class="hot_imgbox">
                <i></i>
                <img :src="v.img">
              </div>
              <div class="hot_right">
                <h4>{{v.title}}</h4>
                <p>{{v.text}}</p>
              </div>
            </li></router-link>
          </ul>
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
      this.$axios.get("data/home.json").then(response=>{
        console.log(response.data.data)
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
  width: 19px;
  height: 19px;
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
.container{
  width:100%;
  padding: 5px 6px 0px 6px;
  box-sizing: border-box;
}
.header{
  width: 100%;
  display: flex;
  height: 30px;
  line-height: 30px;
  margin-bottom: 7px;
}
.header .ip_box{
  width: 85%;
  height: 30px;
  line-height: 30px;
  padding: 0px 5px;
  border: 1px solid #a0c4c4;
  border-radius: 5px;
  margin-right: 5px;
}
.header input{
  width: 90%;
  outline: none;
  background: none;   
  border: none;    
}
.header span{
  width: 10%;
}
.header span .icon{
  width: 32px;
  height: 32px;
}
.view{
  width: 100%;
  height: 160px;
  border-radius: 5px;
  overflow: hidden;
}
.view img{
  width: 100%;
}
.service{
  padding: 10px 0px;
  width: 100%;
}
.service span{
  font-size: 16px;
  display: flex;
}
.service span .icon{
  width: 25px;
  height: 25px;
}
.service span p{
  margin-left: 8px;
}
.service ul{
  overflow: hidden;
}
.service ul li{
  float: left;
  width: 25%;
  text-align: center;
  
}
.service ul li i{
  background: url('../../assets/img/home/h_service.png') no-repeat;
  display: inline-block;
  width: 38px;
  height: 38px;
  margin-top: 14px;
}
.service ul li .visa{
  background-position: -47px 0;
}
.service ul li .plane{
  background-position: -96px 0;
}
.service ul li .bus{
  background-position: -144px 0;
}
.service ul li .taxi{
  background-position: 0 -46px;
}
.service ul li .subway{
  background-position: -144px -46px;
}
.service ul li .live{
  background-position: 0 -92px;
}
.service ul li .money{
  background-position: -96px -46px;
}
.hot{
  padding: 10px 0px 5px 0px;
}
.hot span{
  display: flex;
  font-size: 16px;
}
.hot span .icon{
  width: 25px;
  height: 25px;
}
.hot span p{
  margin-bottom: 10px;
  margin-left: 8px;
}
.hot ul li{
  margin-bottom: 8px;
  overflow: hidden;
}
.hot .hot_imgbox{
  width: 50%;
  height: 130px;
  border-radius: 5px;
  overflow: hidden;
  float: left; 
}

.hot .hot_imgbox img{
  width: 100%;
}
.hot .hot_right{
  width: 50%;
  height: 130px;
  float: left;
  padding: 5px 0px 5px 10px;
  box-sizing: border-box;
}
.hot .hot_right h4{
  margin-bottom: 5px;
}
.hot .hot_right p{
  font-size: 14px;
}
.bottom{
  height: 50px;
  width: 100%;

}
</style>
