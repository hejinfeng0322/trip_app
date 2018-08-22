<template>
  <div id="app"> 
    <div class="header">
      <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-geren"></use>
      </svg>我的主页</div>

   <div class="detail">
     <ul>
       <li @click="num1=1">我的信息<svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youla"></use>
          </svg></li>
       <li @click="num2=1">我的攻略<svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youla"></use>
          </svg></li>
       <li @click="num3=1">我的旅程<svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youla"></use>
          </svg></li>
       <li @click="num4=1">更多帮助<svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youla"></use>
          </svg></li>
     </ul>
   </div>

      <mt-popup v-model="num1" position="right" :modal=false class="more">
        <div class="more_header">
          <svg class="icon" aria-hidden="true" @click="num1=0">
          <use xlink:href="#icon-anniu"></use>
          </svg><span>注册</span>
        </div>
        <div class="more_login">
          <div class="id">
            <span>账号</span>
            <input type="text" placeholder="请输入您的账号">
          </div>
          <div class="pass">
            <span>密码</span>
            <input type="password" placeholder="请输入您的密码">
          </div>
          <button>登录</button>
        </div>
      </mt-popup>

      <mt-popup v-model="num2" position="right" :modal=false class="more">
        <div class="more_header">
          <svg class="icon" aria-hidden="true" @click="num2=0">
          <use xlink:href="#icon-anniu"></use>
          </svg>
        </div>
        <ul>
          <li>攻略：VIP的特别攻略</li>
        </ul>
      </mt-popup>

      <mt-popup v-model="num3" position="right" :modal=false class="more">
        <div class="more_header">
          <svg class="icon" aria-hidden="true" @click="num3=0">
          <use xlink:href="#icon-anniu"></use>
          </svg>
        </div>
        <ul>
          <li>主人您没有任何旅程哦！</li>
        </ul>
      </mt-popup>


      <mt-popup v-model="num4" position="right" :modal=false class="more">
        <div class="more_header">
          <svg class="icon" aria-hidden="true" @click="num4=0">
          <use xlink:href="#icon-anniu"></use>
          </svg>
        </div>
        <ul>
          <li>修改信息</li>
          <li>找回密码</li>
        </ul>
      </mt-popup>

      <div class="bottom"></div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      num1:0,
      num2:0,
      num3:0,
      num4:0,
      list:""
    }
  },
  methods:{
    getHomeData(){
      this.$axios.get("data/book_detail.json").then(response=>{
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
#app{
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
}
.title{
  width: 100%;
  height: 70px;
  line-height: 25px;
  background: #eff8fe;
  font-size: 14px;
  padding: 5px 5px;
  box-sizing: border-box;
  border-radius: 5px;
}
.detail{
  padding: 0px 0px;
}
.detail ul li{
  padding: 10px 20px;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #e4e4e4;
  position: relative;
}
.detail ul li .icon{
  position: absolute;
  right: 5px;
  top: 15px;
}
.more{
  width: 100%;
  height: 100%;
  background: white;
}
.more_header{
  width: 100%;
  height: 35px;
  border-bottom: 1px solid lightgray;
  position: relative;
}
.more_header .icon{
  width: 22px;
  height: 22px;
  position: absolute;
  top: 7px;
  left: 5px;
}
.more_header span{
  position: absolute;
  top: 7px;
  right: 13px;
}
.more ul li{
  padding: 10px 20px;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #e4e4e4;
}
.more_login{
  width: 70%;
  margin: auto auto;
  margin-top: 40px;
  padding-left: 20px;
}
.more_login .id{
  margin-bottom: 15px;
}
.more_login input{
  width: 60%;
  height: 25px;
  padding-left: 5px;
  outline: none;
}
.more_login button{
  padding: 5px 5px;
  margin-top: 20px;
  width: 60px;
  margin-left: auto;
  margin-right: auto;
  background: #00d2db;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  color: white;
  outline: none;
  margin-left: 60px;
}


.bottom{
  height: 50px;
  width: 100%;
}
</style>
