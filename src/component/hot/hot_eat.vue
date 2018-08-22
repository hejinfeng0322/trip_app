<template>
  <div id="app"> 
    <div class="header">
      <router-link to="/hot"><svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-anniu"></use>
      </svg></router-link>Dombe豚(黑猪肉)</div>
   <div class="container">
        <div class="introduce" v-for="v in list[0].introduce">
          <span>{{v.title}}</span>
          <p>{{v.text}}</p>
        </div>

        <div class="introduce" v-for="v in list[1].tips">
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
      this.$axios.get("data/hot_eat.json").then(response=>{
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
}
.introduce span{
  font-size: 16px;
}
.introduce p{
  font-size: 13px;
  margin: 10px 0px 15px 0px;
  line-height: 24px;
}


.bottom{
  height: 50px;
  width: 100%;
}
</style>
