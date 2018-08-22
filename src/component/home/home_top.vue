<template>
  <div id="app"> 
    <div class="header">
      <router-link to="/home"><svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-anniu"></use>
      </svg></router-link>西归浦市서귀포시</div>
   <div class="container">
    
      <div class="weather" v-for="v in list[0].weather">
        <img :src="v.img">
        <h2>{{v.title}}</h2>
        <span>{{v.high_low}}</span>
        <p>{{v.text}}</p>
      </div>

      <div class="food">
        <span><svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-miao"></use>
        </svg>西归浦市美食</span>

        <ul>
        <li v-for="v in list[1].food">
        <div class="conimg_box"><img :src="v.img"></div>
        <div class="box_bottom">
        <h4>{{v.title}}</h4>
        <span><p>{{v.grade}}</p>{{v.text}}</span>
        </div>
        </li>
        </ul>
      </div>

      <div class="view">
        <span><svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tubiaozhizuomoban_daoshipai"></use>
        </svg>西归浦市景点</span>

        <ul>
        <li v-for="v in list[2].view">
        <div class="conimg_box"><img :src="v.img"></div>
        <div class="box_bottom">
        <h4>{{v.title}}</h4>
        <span><p>{{v.grade}}</p>{{v.text}}</span>
        </div>
        </li>
        </ul>
      </div>

      <div class="buy">
        <span><svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconzhengli-"></use>
        </svg>西归浦市购物</span>

        <ul>
        <li v-for="v in list[3].buy">
        <div class="conimg_box"><img :src="v.img"></div>
        <div class="box_bottom">
        <h4>{{v.title}}</h4>
        <span><p>{{v.grade}}</p>{{v.text}}</span>
        </div>
        </li>
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
      this.$axios.get("data/home_top.json").then(response=>{
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
.weather{
  background: #f7f8fa;
  width: 100%;
  height: 66px;
  line-height: 50px;
  padding: 10px 10px;
  box-sizing: border-box;
  display: flex;
  border-radius: 5px;
}
.weather h2{
  color: #0091d9;
  margin: 0px 10px;
  font-weight: 500;
  font-size: 26px;
}
.weather span{
  color: #fe4546;
  fong-size: 11px;
  margin-top: 3px;
}
.weather p{
  font-size: 12px;
  margin-left: 10px;
  margin-top: 2px;
}
.food{
  padding: 10px 0px;
}
ul{
  width: 100%;
  overflow-x: scroll;
  margin-top: 10px;
  display: flex;
}
ul li{
  margin-right: 10px;
}
.conimg_box{
  width: 158px;
  overflow: hidden;
}
.conimg_box img{
  width: 100%;
}
.box_bottom{
  width: 158px;
}
.box_bottom h4{
  font-size: 14px;
  font-weight: 500;
}
.box_bottom span{
  display: flex;
  font-size: 12px;
  margin-top: 5px;
}
.box_bottom span p{
  color: #fe4546;
  font-size: 15px;
  margin-top: -3px;
}
.buy{
  margin: 10px 0px;
}


.bottom{
  height: 50px;
  width: 100%;
}
</style>
