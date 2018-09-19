<template>
  <div style="height: 100%">
    <index-content>
      <template>
        <div class="main">
          <div class="message">
              <div class="us">
                联系我们
              </div>
              <div class="info">
                <div class="introduction">
                  <ul class="detail">
                    <li v-for="itemSite in site" :key="itemSite">{{itemSite}}</li>
                  </ul>
                  <ul class="detail">
                    <li v-for="itemCoo in site" :key="itemCoo">{{itemCoo}}</li>
                  </ul>
                  <ul class="detail">
                    <li v-for="itemTouch in touch" :key="itemTouch">{{itemTouch}}</li>
                    <li class="qrCode"><img src="../assets/images/QRCode.jpg"/></li>
                  </ul>
                </div>
                <div class="map">
                  <img src="../assets/images/map.png"/>
                </div>
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
       site: ["办公地点：",
              "海口市龙华区复兴城A1座A2002阿里办公",
              "电话：xxx-xxxxxxxx",
              "传真：xxx-xxxxxxxx"
       ],
       cooperate: ["产品合作：",
                   "Email：xxxx@xx.com",
                   "电话：xxx-xxxxxxxx"
       ],
       touch: ["媒体联系：",
               "QQ：XXXXXXXX",
               "微信："]
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
  .main .message{
    width:55%;
    height: 75%;
    background-color: #fff;
    border-radius: 30px;
    overflow: auto;
  }
  .main .message .us{
    box-sizing: border-box;
    padding: 2% 8%;
    color: rgba(16, 16, 16, 1);
    font-size: 20px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
  }
  .main .message .info{
    display: flex;
    justify-content: flex-start;
  }
  .main .message .info .introduction{
    width: 50%;
  }
  .main .message .info .introduction .detail{
    padding: 1.5% 16%;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
   }
  .main .message .info .introduction .detail .qrCode{
    padding-left: 18%;
  }
   .main .message .info .introduction .detail .qrCode img{
     width: 33%;
   }
  .main .message .info .map{
    width: 50%;
  }
   .main .message .info .map img{
     width: 90%;
     padding-right: 10%;
   }
</style>
