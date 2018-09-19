<template>
    <div class="home">
      <div class="menu-nav">
        <div class="nav-1">
          <div class="logop">
              <img src="../assets/images/logo.png"/>
          </div>
          <i style="color:#fff;">{{name}}</i>
        </div>
        <div class="nav-2">
          <ul class="navmenu">
            <li class="menu"><a href="#">首页</a></li>
            <li class="menu"><a href="#">白皮书</a></li>
            <li class="menu"><a href="#" @click="showLogin">登录</a></li>
            <li class="menu language"> 
              <el-dropdown :hide-on-click="false">
                <span class="el-dropdown-link">
                  {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="item in languages" :key="item.value" :label="item.label" :value="item.value">{{item.label}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="home-pic" :style="BGIMG">
        <div class="point">
          <a class="Aegean-Sea">
          <img src="./../assets/images/Aegean-Sea.png">
          <img src="./../assets/images/Aegean-SeaRound.png" class="Aegean-SeaRound" @click="toPicture">
          </a>
          <a class="Nile">
          <img src="./../assets/images/Nile.png">
          <img src="./../assets/images/NileRound.png" class="NileRound" @click="toWrite">
          </a>
          <a class="Ganges">
          <img src="./../assets/images/Ganges.png">
          <img src="./../assets/images/GangesRound.png" class="GangesRound" @click="toListen">
          </a>
          <a class="Huanghe">
          <img src="./../assets/images/Huanghe.png">
          <img src="./../assets/images/HuangheRound.png" class="HuangheRound" @click="toVideo">
          </a>
          
          <img class="Aegean-SeaCircle" src="./../assets/images/Aegean-SeaCircle.png">
          <img class="NileCircle" src="./../assets/images/NileCircle.png">
          <img class="GangesCircle" src="./../assets/images/GangesCircle.png">
          <img class="HuangheCircle" src="./../assets/images/HuangheCircle.png">
        </div>
      </div>    
     
      <modal v-bind:mdShow="mdLogin" @close="closeModal">
        <div slot="title" class="title">{{pupLogin}}</div>
        <div slot="message">
          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-input v-model="sizeForm.name" placeholder="用户名" class="input"></el-input>
            <el-input v-model="sizeForm.passWord" placeholder="密码" class="input"></el-input>
            <el-checkbox>下次自动登录</el-checkbox>
            <a href="#" class="forget">忘记密码？</a>
            <el-button type="primary" class="login">登录</el-button>
            <div class="reg"><a href="#" @click="toReg">还未有账号？立即注册</a></div>
          </el-form>
        </div>
      </modal>

      <modal v-bind:mdShow="mdReg" @close="closeModal">
        <div slot="title" class="title">{{pupReg}}</div>
        <div slot="message">
          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-input v-model="sizeForm.userRegName" placeholder="用户名" class="input"></el-input>
            <el-input v-model="sizeForm.userRegPwd" placeholder="密码" class="input"></el-input>
            <el-input v-model="sizeForm.userComPwd" placeholder="确认密码" class="input"></el-input>
            <el-input v-model="sizeForm.userRegPhone" placeholder="注册电话" class="input"></el-input>
            <el-input v-model="sizeForm.userRegEmail" placeholder="注册邮箱" class="input"></el-input>
            <el-input v-model="sizeForm.userRegQuetion" placeholder="问题" class="input"></el-input>
            <el-input v-model="sizeForm.userRegAnswer" placeholder="回答" class="input"></el-input>
            <el-button type="primary" class="login">注册</el-button>
            <div class="reg"><a href="#" @click="toLogin">已有账号？马上登陆</a></div>
          </el-form>
        </div>
      </modal>
    </div>
</template>

<script>    
  import './../assets/css/hichain.css'
  import Modal from '@/components/Modal'
  export default{
    data(){
      return{
        name: "HiChain",
        navmenu: ["首页","白皮书","登录"],
        language: "中文",
        BGIMG:{
          backgroundImage: "url(" + require('./../assets/images/background.jpg') + ") ",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        
backgroundSize:"contain"
          

        },
        languages: [
          {
            label: 'English',
            value: 'en'
          },
          {
            label: '中文(简体)',
            value: 'zhcn'
          }
        ],
        language: '中文(简体)',
        mdLogin: false,
        mdReg: false,
        pupLogin: "登录",
        pupReg: "注册",
        userName: '',
        passWord: '',
        isDefault: false,
         sizeForm: {
          name: '',
          passWord: '',
          userRegName: '',
          userRegPwd: '',
          userComPwd: '',
          userPhone: '',
          userEmail: '',
          userQuestion: '',
          userAnswer: ''
        }
      }
    },
    components:{
      Modal
    },
    methods: {
      toPicture(){
        this.$router.push({ path: '/picture' })
      },
       toWrite(){
        this.$router.push({ path: '/write' })
      },
       toListen(){
        this.$router.push({ path: '/listen' })
      },
       toVideo(){
        this.$router.push({ path: '/video' })
      },      
      showLogin(){
        this.mdLogin = true;
      },
      closeModal(){
        this.mdLogin = false;
        this.mdReg = false;
      },
       toReg(){
        this.mdLogin = false;
        this.mdReg = true;
        this.userRegName = '';
        this.userRegPwd = '';
        this.userComPwd = '';
        this.userPhone = '';
        this.userEmail = '';
        this.userQuestion = '';
        this.userAnswer = '';
      },
        toLogin(){
        this.mdLogin = true;
        this.mdReg = false;
        this.userName = '';
        this.userPwd = '';
      },
    }
  }
</script>

<style>
  .title{
    color:#000;
    font-size:18px;
    font-weight:bold;
    font-family: Arial,"microsoft yahei";
    letter-spacing:15px;
  }
  .el-checkbox{
    position:relative;
    left:-22%;
    margin-top:2%;
  }
  .input{
    width:85%;margin:1%;
  }
  .forget{
    position:relative;
    font-size:16px;
    text-decoration: none;
    color: #2e82ff;
    left:21%;
  }
  .login{
    width:85%;
    margin:1%;
    font-weight:bold;
    letter-spacing:10px;
  }
  .reg{
    font-size: 15px;
    position: relative;
    right: 25%;
    margin-top:1%;
    
  }
  .reg a{
    text-decoration: none;
    color: #2e82ff;
  }
</style>