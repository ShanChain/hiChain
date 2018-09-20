<template>
  <div class="layout">
    <el-row class="header">
      <el-col :span="24" class="menu">
       <div class="regs">
          <el-breadcrumb class="cubeReg">
            <el-breadcrumb-item>方车</el-breadcrumb-item>
            <el-breadcrumb-item class="welcome">欢迎注册</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
    
        <div class="navs">
          <el-breadcrumb separator="|">
            <el-breadcrumb-item class="order0"><a href="javascript:void(0)" class="item login">登录</a></el-breadcrumb-item>
            <span class="line">|</span>
            <el-breadcrumb-item class="order1"><a href="javascript:void(0)" class="item have">已有账号？</a></el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
    </el-row>
    <el-row class="container">
      <div class="main">
        <slot></slot>
      </div>
    </el-row>
    <el-row class="footer">
      <el-col :span="24" class="aboutInfo">
          <el-breadcrumb separator="|">
            <el-breadcrumb-item><a href="javascript:void(0)" class="footerWrap">关于我们</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="javascript:void(0)" class="footerWrap">联系我们</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="javascript:void(0)" class="footerWrap">加入我们</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="javascript:void(0)" class="footerWrap">隐私政策</a></el-breadcrumb-item>
          </el-breadcrumb>
      </el-col>
      <el-col :span="12" :offset="6" class="line"><div></div></el-col>
      <el-col :span="12" :offset="6" class="text"><div>Copyright © 2018   All rights reserved  千千世界科技有限公司</div></el-col>
    </el-row>
  </div>

  
</template>

<script>

  export default {
    data(){
      return{
        
      }
    }
  }
</script>

<style>
  #app{
    background-image: url(../assets/images/backgrounds.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height:100%;
  }
  .layout{
    height:100%;
  }
  .layout .header{
    height:10%;
    opacity: 0.55;
    background-color: rgba(33, 153, 193, 1);
  }
  .layout .container{
    height:71%;
  }
  .header .regs{
    position: relative;
    width: 19.2%;
    height:100%;
  }
  .header .regs .cubeReg{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    padding-left: 14%;
  }
  .header .regs .el-breadcrumb__inner {
    color: rgba(255, 255, 255, 1);
    font-size: 36px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
  }
  .header .regs .welcome .el-breadcrumb__inner{
    font-size: 17px;
    position: absolute;
    bottom: 32%;
  }
   .header .regs .cubeReg .el-breadcrumb__separator{
     font-size: 0;
   }
  .header .navs{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
  }
  .header .menu{
    display: flex;
    height:100%;
    justify-content: space-between;
    align-items: center;
  }
  .header .navs .el-breadcrumb{
    display: flex;
  }
  .header .navs .el-breadcrumb__separator {
    font-size: 0;
  }
   .header .navs .line{
    border-left: 1.3px solid #c3c3c3;
    height: 35px;
    line-height: 102px;
    font-size: 0;
  }
 
  .header .navs a.login{
    font-weight: normal;
    cursor: pointer;
    border: none;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 1);
    font-size: 36px;
    text-align: center;
    font-family: Roboto;
    padding-right: 10px;
    letter-spacing: 0;
  }
  .header .navs a.have{
    font-weight: normal;
    cursor: pointer;
    border: none;
    box-sizing: border-box;
    padding: 0 49px 0 20px;
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
    text-align: center;
    font-family: Roboto;
    line-height: 35px;
  }
  .header .navs a.menu:hover{
    color: #38d1d5;
    cursor: pointer;
  }

  .layout .container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .layout .container .main{
    width: 1130px;
    height: 600px;
    line-height: 20px;
    opacity: 0.85;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    box-shadow: 0px 0px 20px 7px rgba(85, 85, 85, 1);
    font-family: Roboto;
    border: 1px solid rgba(255, 255, 255, 0);
  }

 .layout .footer{
    height:18%;
  }
.layout .footer .aboutInfo{
    height:50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer .footerWrap{
  box-sizing: border-box;
  font-size: 20px;
  text-align: center;
  font-family: Roboto;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  padding:0 30px;
}
.footer span{
  font-size: 0;
}
 
.footer .el-breadcrumb__inner a.footerWrap{
  color: rgba(255, 255, 255, 1);
  font-weight: normal;
  cursor: pointer;
  border: none;
  box-sizing: border-box;
  font-size: 20px;
  text-align: center;
  font-family: Roboto;
  padding:0 30px;
}
.footer .el-breadcrumb__inner a.footerWrap:hover{
  color: #38d1d5;
  cursor: pointer;
}

.layout .footer .line{
  height: 5%;
  border-top: 1px solid #fff;
}
.layout .footer .text{
  height: 25%;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  font-family: SourceHanSansSC-regular;
}
</style>
