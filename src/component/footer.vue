<template>
  <div id="app">
    <ul class="footer">
    <router-link to="/home"><li><svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shouye1"></use>
    </svg><p>首页</p></li></router-link>
    <router-link to="/hot"><li><svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-remen1"></use>
    </svg><p>热门推荐</p></li></router-link>
    <router-link to="/book"><li><svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-gonglve"></use>
    </svg></i><p>旅游攻略</p></li></router-link>
    <router-link to="/mine"><li><svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-geren"></use>
    </svg><p>我的</p></li></router-link>
    </ul>
  </div>
</template>

<style scoped>
body,ul,li{
  margin: 0;
  padding: 0;
  list-style: none;
}
.footer{
  max-width: 480px;
  margin: auto auto;
  background: white;
  width: 100%;
  height: 50px;
  line-height: 17px;
  border-top: 1px solid lightgray;
  padding: 5px 0px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0px;
}
.footer li{
  float: left;
  width: 25%;
  text-align: center;
  font-size: 14px;
}
.icon{
  width: 19px;
  height: 19px;
}
</style>
