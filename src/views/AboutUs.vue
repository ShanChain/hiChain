<template>
  <div style="height: 100%">
    <index-content>
      <template>
        <div class="main">
          <div class="message">
              <div class="us">关于我们</div>
              <div v-for="item in message" :key="item" class="text item">
                {{item}}
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
        message: ["人有创造的本能，每个人都在某时某地某个领域以某种程度创造着、生活着、奋斗着。随着技术的升级，人们在内容生产上，比如文字创作的修改，比传统的纸上创作更加便捷。这种便捷为每个人全职或职            创作提供了巨大空间，海量的数据呈指数增长。与此同时，文创领域利益相关方的矛盾日益凸显，如文创作者与创作平台提供商之间的不对等、内容审查过多、知名作者的强势、平台的垄断和不知名作者正常           价值不能被体现等等。",
                  "因此，海链将改变这种现状，我们认为，区块链上的原创数字内容将创造海链文明。海链文明的技术底层是海链，以服务全球原创内容社区为出发点，以打造成为全球范围内应用场景丰富、用户社群庞大、底层技术先进的区块链为核心目标，能够承载大规模交易，满足海量用户同时使用，满足智能合约的安全性和易用性，成为下一代基于区块链技术的数字内容资产社交平台。",
                  "海链文明中的“文创”，指的是包括文字、图片、音乐、视频在内的“泛文创”，包括一切原创数字内容。人们需要一个原创内容分享与变现的舞台，但普通用户的贡献难以得到应有的回报，大量价值被平台及少数头部用户获取。海链文明将催生一个包容、多样、普世、平等、互利的全球精神家园。海链文明是海链生态的内容呈现，在主网上线前，由尼罗河文明（对应于原创文字）、爱琴海文明（对应于原创图片）、恒河文明（对应于原创音乐）和黄河文明（对应于原创视频）这四大文明组成，每个文明里都有大大小小不同主题和特色的“城邦”（生态项目），主网上线前，海链文明的社区、功能、内容主要体现在自己的官网和app里"
        ]
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
    padding-bottom: 10px;
    overflow: auto;
  }
  .main .message .us{
    padding: 2% 8%;
    color: rgba(16, 16, 16, 1);
    font-size: 20px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
  }
  .main .message .text{
    box-sizing: border-box;
    padding: 1% 8%;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: SourceHanSansSC-regular;

    }
</style>
