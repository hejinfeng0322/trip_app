<template>
  <div id="app">
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vfooter from './component/footer.vue'

  export default{
    components:{
      'v-footer': vfooter
    }
  }
</script>

<style>
  body{
    max-width: 480px;
    margin: auto auto;
  }
  * {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  a:link, a:visited, a:hover, a:active {
    color: black;
  }
</style>
