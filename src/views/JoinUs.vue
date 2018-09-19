<template>
  <div style="height: 100%">
    <index-content>
      <template>
        <div class="main">
          <div class="message">
            <div class="us">
              加入我们
            </div>
            <ul class="require">
              <li v-for="item in message" :key="item">{{item}}</li>
            </ul>
            <div class="add">
              <el-collapse class="collapse">
                <el-collapse-item title="长老院（规则委员会)" name="1" class="institution">
                  <div class="describe">长老院的长老由在全球邀请、推荐、自荐的350人组成，实行终身荣誉制，每届35人（每届一年，每年四季，每季20人，每季更换四分之一）组成执行长老院，包括海链新加坡基金会发起人、全球合伙人、核心研发团队、天涯社区等全球泛文创社区以及火币区块链等区块链社区的意见领袖。
                  </div>
                  <div class="describe">
                    <p>工作内容：</p>
                    <p class="detail">海链治理制度和规则设计。</p>
                    <p class="detail">长老院日常实际履行海链规则委员会的职能，主网上线后，主要从已担任过其他委员会成员的志愿者中抽签选出。</p>
                  </div>
                  <div class="describe">
                    <p>工作性质：</p>
                    <p class="detail">兼职，每人最多只能任四季</p>
                  </div>
                  <div class="describe">
                    <p>报酬标准：</p>
                    <p class="detail">每人每季价值3000美元的海币（以任职期间火币交易所上的平均价格计算数量），另有差旅补贴，具体需要完成的工作量和职责由第一届第一季长老院确定。</p>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="议程设置委员会" name="2">
                </el-collapse-item>
                <el-collapse-item title="议题讨论组" name="3">
               
                </el-collapse-item>
                <el-collapse-item title="议题评审委员会" name="5">
                
                </el-collapse-item>
                 <el-collapse-item title="议题决策陪审团" name="6">
                
                </el-collapse-item>
                 <el-collapse-item title="骑士团" name="7">
                  
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </div>
      </template>
    </index-content>
  </div>
</template>

<script>
  import IndexContent from './../components/IndexContent'

  export default {
    data(){
      return{
        message: ["以下是各个岗位具体职责与要求，有意者请详阅，并发简历、相应作品及个人阐述至：",
                  "xxxx@xx.com"],
        input: ''
      }
    },
    components:{
      IndexContent
    }
  }
</script>

<style>
  .main{
    background-color: #ffffff3b;
    height:100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main .message .us{
    box-sizing: border-box;
    padding: 2% 8%;
    color: rgba(16, 16, 16, 1);
    font-size: 20px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
  }
  .main .message{
    width:55%;
    height: 75%;
    background-color: #fff;
    border-radius: 30px;
    padding-bottom: 10px;
    overflow: auto;
  }
  .main .message .require{
    box-sizing: border-box;
    padding: 0.4% 8%;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
   }
   .main .message .add{
    box-sizing: border-box;
    padding: 1% 8% 2%;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
  }
  .main .message .add .collapse{
    border: none;
  }
  .main .message .add .collapse .institution .el-collapse-item__wrap{
    background-color: rgba(204, 204, 204, 1);
    margin-top: -1%;
    margin-bottom: 1%;
    width: 100%;
  }
  .main .message .add .collapse .institution .describe{
    padding-left: 2%;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
  }
  .main .message .add .collapse .institution .describe p{
    padding-top: 2%;
    margin: 0;
  }
  .main .message .add .collapse .institution .describe p.detail{
    padding-top: 0.3%;
    padding-left: 3.5%;
  }
  .main .message .add .collapse .el-collapse-item__header{
    background-color: rgba(204, 204, 204, 1);
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: Roboto;
    margin-bottom: 1%;
  }
</style>
