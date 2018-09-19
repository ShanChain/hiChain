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
      <div>
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
    </div>
</template>

<script>
  import './../assets/css/hichain.css'
  export default{
    data(){
      return{
        name: "音频上传",
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