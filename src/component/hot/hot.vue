<template>
  <div id="app"> 
    <div class="header">
       <svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-remen1"></use>
         </svg>
      热门推荐</div>

   <div class="container">
     <div class="place">
         <div class="search">
            <i class="iconfont icon-sousuo"></i>
           <input type="text" placeholder="搜索景点/美食/购物广场/时尚">
          <span></span>
        </div>
      </div>

      <div class="list">
        <ul>
          <li><svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-lvyou"></use>
             </svg><p>景点</p></li>
          <li><svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-meishijiayin"></use>
             </svg><p>美食</p></li>
          <li><svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-ziyuan"></use>
             </svg><p>购物</p></li>
        </ul>
      </div>

      <div class="look">
        <div class="project">
        <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tubiaozhizuomoban_daoshipai"></use>
                </svg>必游
        </div>
        <ul>
          <router-link to="/hot_trip"><li v-for="(v,i) in list[0].look">
            <div class="hot_imgbox">
               <mt-swipe  :auto="0">
                 <mt-swipe-item v-for="(n,j) in v.img">
                   <img :src="n.m">
                  </mt-swipe-item>
               </mt-swipe>
            </div>

            <div class="hot_right">
              <div class="right_title">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tubiaozhizuomoban_daoshipai"></use>
                </svg>{{v.title}}
                <span>{{v.star}}</span>
              </div>
              <div class="con">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xindiantu"></use>
                </svg>
                <span>{{v.grade}}</span>{{v.content}}
              </div>
              <div class="con_text">{{v.text}}</div>
            </div>
            </li></router-link>
        </ul>
      </div>

      <div class="eat">
        <div class="project">
        <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-miao"></use>
                </svg>必吃
        </div>
        <ul>
          <router-link to="/hot_eat"><li v-for="(v,i) in list[1].eat">
            <div class="hot_imgbox">
               <mt-swipe  :auto="0">
                 <mt-swipe-item v-for="(n,j) in v.img">
                   <img :src="n.m">
                  </mt-swipe-item>
               </mt-swipe>
            </div>

            <div class="hot_right">
              <div class="right_title">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tubiaozhizuomoban_daoshipai"></use>
                </svg>{{v.title}}
              </div>
              <div class="con">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xindiantu"></use>
                </svg>
                <span>{{v.grade}}</span>{{v.content}}
              </div>
              <div class="con_text">{{v.text}}</div>
            </div>
          </li></router-link>
        </ul>
      </div>

      <div class="buy">
        <div class="project">
        <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-iconzhengli-"></use>
                </svg>必逛
        </div>
        <ul>
          <router-link to="/hot_buy"><li v-for="(v,i) in list[2].buy">
            <div class="hot_imgbox">
               <mt-swipe :auto="0">
                 <mt-swipe-item v-for="(n,j) in v.img">
                   <img :src="n.m">
                  </mt-swipe-item>
               </mt-swipe>
            </div>

            <div class="hot_right">
              <div class="right_title">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tubiaozhizuomoban_daoshipai"></use>
                </svg>{{v.title}}
              </div>
              <div class="con">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xindiantu"></use>
                </svg>
                <span>{{v.grade}}</span>{{v.content}}
              </div>
              <div class="con_text">{{v.text}}</div>
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
      this.$axios.get("data/hot.json").then(response=>{
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
.header{
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-bottom: 1px solid lightgray;
}
.header .icon{
  width: 19px;
  height: 19px;
}

.container{
  width:100%;
  padding: 5px 6px 0px 6px;
  box-sizing: border-box;
}
.place{
  width: 100%;
  height: 100px;
  background: url(../../assets/img/hot/hot_bg1.jpg) no-repeat;
  padding-top: 33px;
  box-sizing: border-box;
}
.place .search{
  width: 80%;
  height: 34px;
  line-height: 34px;
  background: white;
  margin: auto auto;
  border-radius: 12px;
  overflow: hidden;
  padding: 0px 6px;
}
.place .search input{
  border: none;
  outline: none;
  width: 80%;
}
.list{
  padding: 15px 0px 15px 0px;
  border-bottom: 1px dotted #e4e4e4;
}
.list .icon{
  width: 25px;
  height: 25px;
}
.list ul li{
  float: left;
  width: 33.33%;
  text-align: center;
}
.project{
  width: 100%;
  text-align: center;
  margin: 10px 0px;
}
.project .icon{
  width: 25px;
  height: 25px;
}
ul{
  overflow: hidden;
}
.hot_imgbox{
  width: 48%;
  height: 100px;
  border-radius: 5px;
  overflow: hidden;
  float: left;
  margin-bottom: 8px;
}
.hot_imgbox img{
  width: 100%;
}
.hot_right{
  width: 51%;
  height: 100px;
  overflow: hidden;
  float: right;
  padding: 3px 0px 5px 5px;
  margin-bottom: 8px;
  box-sizing: border-box;
}
.hot_right .right_title{
  font-size: 15px;
  position: relative;
}
.hot_right .right_title span{
  background: skyblue;
  font-size: 13px;
  padding: 2px 4px;
  border-radius: 5px;
  position: absolute;
  right: 0px;
  top: 2px;
}
.hot_right .con{
  font-size: 13px;
  margin: 0px 0px 5px 0px; 
}
.hot_right .con span{
  font-size: 14px;
  margin-right: 5px;
  color: #3380fc;
}
.hot_right .con_text{
  font-size: 13px;
}

.bottom{
  height: 50px;
  width: 100%;
}
</style>
