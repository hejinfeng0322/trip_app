<template>
  <div id="app"> 
    <div class="header">
       <svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-gonglve"></use>
         </svg>
      旅游攻略</div>
   <div class="container">
     
     <div class="place">
         <div class="search">
            <i class="iconfont icon-sousuo"></i>
           <input type="text" placeholder="请输入您要查找攻略的关键词">
          <span></span>
        </div>
      </div>

      <div class="list">
        <div class="list_top">
          <span class="send"><i><svg class="icon" aria-hidden="true">
               <use xlink:href="#icon-gonglve2"></use>
               </svg></i>发表攻略</span>
          <span class="my"><i><svg class="icon" aria-hidden="true">
               <use xlink:href="#icon-gonglve2"></use>
               </svg></i>我的攻略</span>
        </div>
        <div class="list_bottom">
          <ul>
            <li class="one"><i><svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-jingdian"></use>
         </svg></i>景点大全</li>
            <li class="two"><i><svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-zixun"></use>
         </svg></i>韩游资讯</li>
            <li class="three"><i><svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-zhuantishenhe"></use>
         </svg></i>韩游专题</li>
            <li class="four"><i><svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-changjianwenti"></use>
         </svg></i>韩游问答</li>
          </ul>
        </div>
      </div>

      <div class="book">
        <ul>
          <router-link to="/book_detail"><li v-for="v in list">

            <div class="book_img"><img :src="v.img"></div>

            <div class="book_right">
              <h4>{{v.title}}</h4>
              <span>
                <svg class="icon" aria-hidden="true">
               <use xlink:href="#icon-wode"></use>
               </svg>
               作者：{{v.author}}</span>
              <p>发表时间：{{v.time}}</p>
              <div class="last">
                <span>
                  <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-yanjing1"></use>
                  </svg>{{v.look}}</span>
                <i>
                  <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dianzan"></use>
                  </svg>{{v.num}}</i></div>
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
      this.$axios.get("data/book.json").then(response=>{
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
  margin-top: 5px;
  border: 1px dotted #e4e4e4;
}
.list .list_top{
  width: 100%;
  padding: 10px 0px;
  text-align: center;
  border-bottom: 1px dotted #e4e4e4;
}
.list .list_top span{
  background: #fd8e51;
  height: 36px;
  color: #fff;
  padding: 6px 10px;
  text-align: center;
  line-height: 36px;
  font-size: 14px;
  border-radius: 3px;
  box-shadow: 0 1px 3px #956700;
}
.list .list_top .my{
  margin-left: 15px;
}
.list .list_bottom ul{
  overflow: hidden;
  padding: 10px 0px;
}
.list .list_bottom ul li{
  float: left;
  width: 25%;
  font-size: 14px;
  text-align: center;
}
.list .list_bottom ul li i{
  display: block;
}
.list .list_bottom ul li i .icon{
  width: 35px;
  height: 35px;
}
.book{
  margin-top: 15px;
  overflow: hidden;
}
.book .book_img{
  width: 50%;
  height: 114px;
  border-radius: 5px;
  overflow: hidden;
  float: left;
  margin-bottom: 8px;
}
.book .book_img img{
  width: 100%;
}
.book .book_right{
  position: relative;
  width: 49%;
  height: 114px;
  padding: 5px 5px 5px 12px;
  box-sizing: border-box;
  float: right;
  margin-bottom: 8px;
  font-size: 13px;
}
.book .book_right h4{
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 5px;
}
.book .book_right p{
  margin: 5px 0px; 
}
.book .book_right .last{
  position: absolute;
  bottom: 10px;
}
.book .book_right .last span{
  margin-right: 30px;
}

.bottom{
  height: 50px;
  width: 100%;
}
</style>
