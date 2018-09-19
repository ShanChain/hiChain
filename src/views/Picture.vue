<template>
    <div class="home">
      <div class="menu-nav">
        <div class="nav-1">
          <div class="logop">
              <img src="../assets/images/logo.png"/>
          </div>
          <h2>{{name}}</h2>
        </div>
        <div class="nav-2">
          <ul class="navmenu">
            <li class="menu" v-for="item in navmenu" :key=item><a href="#">{{item}}</a></li>
            <li class="menu language"> 
              <span>
                {{language}}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import './../assets/css/hichain.css'
  export default{
    data(){
      return{
        name: "问答区",
        navmenu: ["首页","白皮书","登录"],
        language: "中文"
      }
    }
  }
</script>
<style>
  h2{
    color:#345345!important;
  }
</style>