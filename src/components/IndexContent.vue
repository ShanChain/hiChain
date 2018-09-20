<template>
  <div class="layout">
    <el-row class="header">
      <el-col :span="24" class="menu">
       <div class="logo">
          <el-breadcrumb class="left">
            <el-breadcrumb-item class="cubeLogo"></el-breadcrumb-item>
          </el-breadcrumb>
        </div>
    
        <div class="navs">
          <el-breadcrumb separator="|">
            <el-breadcrumb-item class="order0"><a href="javascript:void(0)" class="item">首页</a></el-breadcrumb-item>
            <span class="line">|</span>
            <el-breadcrumb-item class="order1"><a href="javascript:void(0)" class="item">发现</a></el-breadcrumb-item>
            <span class="line">|</span>
            <el-breadcrumb-item class="order2"><a href="javascript:void(0)" class="item">我们</a></el-breadcrumb-item>
            <span class="line">|</span>
            <el-breadcrumb-item class="order3"><a href="javascript:void(0)" class="item">白皮书</a></el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
    </el-row>
    <el-row class="container">
      <slot></slot>
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
    height:11%;
    background-color: rgba(85, 85, 85, 0.76);
  }
  .layout .container{
    height:71%;
  }
  .header .menu{
    display: flex;
    height:100%;
    justify-content: space-between;
    align-items: center;
  }
  .header .logo{
    position: relative;
    width: 19.2%;
    height:100%;
  }
  .header .logo .cubeLogo{
    background-image: url(../assets/images/cubeLogo.png);
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    background-repeat: no-repeat;
    background-position: 0 center;
    background-size: 100%;
    position:absolute;
  }
  .header .navs{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
  }
  .header .navs .el-breadcrumb{
    display: flex;
  }
  .header .navs .el-breadcrumb {
    font-size: 0;
 } 
  .header .navs .line{
    border-left: 1.3px solid #c3c3c3;
    height: 25px;
    line-height: 102px;
  }
  .header .navs a.item{
    font-weight: normal;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    border: none;
    box-sizing: border-box;
    font-size: 20px;
    text-align: center;
    font-family: Roboto;
    color: rgba(255, 255, 255, 1);
    padding:0 12px 0 30px;
  }
  .header .navs a.item:hover{
    color: #38d1d5;
    cursor: pointer;
  }


 .layout .footer{
    height:18%;
    background-color: #ffffff3b;
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
