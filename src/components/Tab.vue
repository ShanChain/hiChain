<template>
 <div>
   <button @click="display">{{checked}}</button>
   <div class="tab" v-show="show">
    <el-tabs>
      <el-tab-pane label="HOT"><el-button class="zone" v-for="itemHot in hot" :key="itemHot" @click="select(itemHot)">{{itemHot}}</el-button></el-tab-pane>
      <el-tab-pane label="A"><el-button class="zone" v-for="itemA in A" :key="itemA" @click="select(itemA)">{{itemA}}</el-button></el-tab-pane>
      <el-tab-pane label="B"><el-button class="zone" v-for="itemB in B" :key="itemB" @click="select(itemB)">{{itemB}}</el-button></el-tab-pane>
      <el-tab-pane label="C"><el-button class="zone" v-for="itemC in C" :key="itemC" @click="select(itemC)">{{itemC}}</el-button></el-tab-pane>
      <el-tab-pane label="D"><el-button class="zone" v-for="itemD in D" :key="itemD" @click="select(itemD)">{{itemD}}</el-button></el-tab-pane>
      <el-tab-pane label="E"><el-button class="zone" v-for="itemE in E" :key="itemE" @click="select(itemE)">{{itemE}}</el-button></el-tab-pane>
      <el-tab-pane label="F"><el-button class="zone" v-for="itemF in F" :key="itemF" @click="select(itemF)">{{itemF}}</el-button></el-tab-pane>
      <el-tab-pane label="G"><el-button class="zone" v-for="itemG in G" :key="itemG" @click="select(itemG)">{{itemG}}</el-button></el-tab-pane>
      <el-tab-pane label="H"><el-button class="zone" v-for="itemH in H" :key="itemH" @click="select(itemH)">{{itemH}}</el-button></el-tab-pane>
      <el-tab-pane label="I"><el-button class="zone" v-for="itemI in I" :key="itemI" @click="select(itemI)">{{itemI}}</el-button></el-tab-pane>
      <el-tab-pane label="J"><el-button class="zone" v-for="itemJ in J" :key="itemJ" @click="select(itemJ)">{{itemJ}}</el-button></el-tab-pane>
      <el-tab-pane label="K"><el-button class="zone" v-for="itemK in K" :key="itemK" @click="select(itemK)">{{itemK}}</el-button></el-tab-pane>
      <el-tab-pane label="L"><el-button class="zone" v-for="itemL in L" :key="itemL" @click="select(itemL)">{{itemL}}</el-button></el-tab-pane>
      <el-tab-pane label="M"><el-button class="zone" v-for="itemM in M" :key="itemM" @click="select(itemM)">{{itemM}}</el-button></el-tab-pane>
      <el-tab-pane label="M"><el-button class="zone" v-for="itemN in N" :key="itemN" @click="select(itemN)">{{itemN}}</el-button></el-tab-pane>
      <el-tab-pane label="N"><el-button class="zone" v-for="itemO in O" :key="itemO" @click="select(itemO)">{{itemO}}</el-button></el-tab-pane>
      <el-tab-pane label="O"><el-button class="zone" v-for="itemP in P" :key="itemP" @click="select(itemP)">{{itemP}}</el-button></el-tab-pane>
      <el-tab-pane label="P"><el-button class="zone" v-for="itemQ in Q" :key="itemQ" @click="select(itemQ)">{{itemQ}}</el-button></el-tab-pane>
      <el-tab-pane label="Q"><el-button class="zone" v-for="itemR in R" :key="itemR" @click="select(itemR)">{{itemR}}</el-button></el-tab-pane>
      <el-tab-pane label="R"><el-button class="zone" v-for="itemS in S" :key="itemS" @click="select(itemS)">{{itemS}}</el-button></el-tab-pane>
      <el-tab-pane label="S"><el-button class="zone" v-for="itemT in T" :key="itemT" @click="select(itemT)">{{itemT}}</el-button></el-tab-pane>
      <el-tab-pane label="T"><el-button class="zone" v-for="itemU in U" :key="itemU" @click="select(itemU)">{{itemU}}</el-button></el-tab-pane>
      <el-tab-pane label="U"><el-button class="zone" v-for="itemV in V" :key="itemV" @click="select(itemV)">{{itemV}}</el-button></el-tab-pane>
      <el-tab-pane label="V"><el-button class="zone" v-for="itemW in W" :key="itemW" @click="select(itemW)">{{itemW}}</el-button></el-tab-pane>
      <el-tab-pane label="W"><el-button class="zone" v-for="itemX in X" :key="itemX" @click="select(itemX)">{{itemX}}</el-button></el-tab-pane>
      <el-tab-pane label="X"><el-button class="zone" v-for="itemY in Y" :key="itemY" @click="select(itemY)">{{itemY}}</el-button></el-tab-pane>
      <el-tab-pane label="Y"><el-button class="zone" v-for="itemZ in Z" :key="itemZ" @click="select(itemZ)">{{itemZ}}</el-button></el-tab-pane>

    </el-tabs>

    <img src="../assets/images/close.png" class="close" @click="close"/>
   </div>
   
 </div>
</template>

<script>
export default {
   data() {
      return {
        show: true,
        checked: '+86',
        title: ["HOT","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
        hot: ["澳大利亚61","澳门853","德国49","法国33","韩国82","加拿大1","美国1","马来西亚40","日本81","泰国66","新西兰64","新加坡65","香港852","意大利39","英国44","中国86"],
        A: ["埃及20","奥地利43","阿根廷54","澳大利亚61","阿富汗93","阿尔及利亚213","安哥拉244","埃塞俄比亚251","爱尔兰353","阿尔巴尼亚355","爱沙尼亚372","安道尔共和国376","澳门853","阿曼968","阿拉伯联合酋长国971","阿塞拜疆994","安圭拉岛1264","安提瓜和巴布达1268"],
        B: ["比利时32","波兰48","秘鲁51","巴西55","巴基斯坦92","布基纳法索226","贝宁229","布隆迪257","博茨瓦纳267","冰岛354","保加利亚359","白俄罗斯375","伯利兹501","巴拿马507","玻利维亚591","巴拉圭595","巴布亚新几内亚675","巴林973","巴哈马1242","巴巴多斯1246","百慕大群岛1441","波多黎各1787"],
        C: [],
        D: ["丹麦45","德国49","多哥228","多米尼加共和国1890"],
        E: ["俄罗斯7","厄瓜多尔593"],
        F: ["法国33","菲律宾63","芬兰358","法属圭亚那594","斐济679","法属波利尼西亚689"],
        G: ["古巴53","哥伦比亚57","冈比亚220","刚果242","哥斯达黎加506","圭亚那592","格鲁吉亚995","关岛1671","格林纳达1809"],
        H: ["荷兰31","韩国82","哈萨克斯坦327","洪都拉斯504","海地509"],
        I: ["埃及20","奥地利43","阿根廷54","澳大利亚61","阿富汗93","阿尔及利亚213","安哥拉244","埃塞俄比亚251","爱尔兰353","阿尔巴尼亚355","爱沙尼亚372","安道尔共和国376","澳门853","阿曼968","阿拉伯联合酋长国971","阿塞拜疆994","安圭拉岛1264","安提瓜和巴布达1268"],
        J: ["加拿大1","几内亚224","加纳233","加蓬241","吉布提253","津巴布韦263","吉尔吉斯坦331","捷克420","柬埔寨855"],
        K: ["科特迪瓦225","喀麦隆237","肯尼亚254","库克群岛682","科威特965","卡塔尔974","开曼群岛1345"],
        L: ["罗马尼亚40","利比亚218","利比里亚231","留尼旺262","莱索托266","卢森堡352","立陶宛370","拉脱维亚371","列支敦士登423","老挝856"],
        M: ["美国1","墨西哥52","马来西亚60","摩洛哥212","马里223","毛里求斯230","莫桑比克258","马达加斯加261","马拉维265","马耳他356","摩尔多瓦373","摩纳哥377","马提尼克596","孟加拉国880","马尔代夫960","蒙古976","蒙特塞拉特岛1664"],
        N: ["南非27","挪威47","尼日尔227","尼日利亚234","纳米比亚264","尼加拉瓜505","黎巴嫩961","尼泊尔977"],
        O: [],
        P: ["葡萄牙351"],
        Q: [],
        R: ["瑞士41","瑞典46","日本81"],
        S: ["斯里兰卡94","塞内加尔221","塞拉利昂232","圣多美和普林西比239","塞舌尔248","苏丹249","索马里252","塞浦路斯357","斯洛文尼亚386","斯洛伐克421","萨尔瓦多503","苏里南597","所罗门群岛677","沙特阿拉伯966"],
        T: ["泰国66","土耳其90","突尼斯216","坦桑尼亚255","汤加676","台湾省886","塔吉克斯坦992","土库曼斯坦993","特立尼达和多巴哥1809"],
        U: [],
        V: [],
        W: ["委内瑞拉58","乌兹别克斯坦998","乌干达256","乌克兰380","危地马拉502","乌拉圭598","文莱673"],
        X: ["希腊30","西班牙34","匈牙利36","新西兰64","新加坡65","香港852","叙利亚963"],
        Y: ["意大利39","英国44","印度尼西亚62","越南84","印度91","伊朗98","亚美尼亚374","约旦962","伊拉克964","也门967","以色列972","牙买加1876"],
        Z: ["智利56","中国86","乍得235","中非共和国236","赞比亚260","直布罗陀350"]

      };
    },
    methods: {
      select(index){
        this.checked = index;
      },
      close(){
        this.show = false;
      },
      display(){
        this.show = !this.show;
      }
    }
}
</script>


<style>
  .tab{
    width: 440px;
    padding: 10px 20px;
    box-shadow: 0px 0px 12px 2px rgba(77, 77, 77, 1);
    border: 1px solid rgba(255, 255, 255, 1);
    margin: auto;
    margin-top: 20px;
    position: relative;
  }
  .tab .el-tabs__item {
    display: inline-block;
    list-style: none;
    height: 30px;
    box-sizing: border-box;
    margin-right: 1px;
    background-color: #FFF;
    font-size: 12px;
    clear: none;
    cursor: pointer;
    line-height: 30px;
    font-weight: normal;
    font-family: Arial,"microsoft yahei";
    letter-spacing: 0;
    padding: 0 2.43px;
    color: #303133;
  }
  .tab .el-tabs__nav-wrap::after{
    display: none;
  }
  .tab .el-tabs__nav {
    width: 410px;
    border-bottom: 1px solid #f1e5e5;
    text-align: left;
  }
  .tab .el-tabs__active-bar{
    height: 0;
  }
  .tab .el-tabs__item:hover {
    color: rgba(56, 194, 255, 1);
    border-bottom: 2px solid rgba(56, 194, 255, 1);
  }
  .tab .el-button {
    border: none;
    width: 135px;
    height: 30px;
    box-sizing: border-box;
    color: #303133;
    background-color: #FFF;
    font-size: 12px;
    cursor: pointer;
    line-height: 26px;
    font-weight: normal;
    font-family: Arial,"microsoft yahei";
    letter-spacing: 0;
    padding: 0 2.43px;
    text-align: left;
  }
  .tab .el-button span:hover{
    color: #409eff;
  }
  .tab .el-button+.el-button {
    margin-left: 0;
  }
  .tab .el-tab-pane{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .tab .close{
    position: absolute;
    top: 4%;
    right: 3%;
  } 
</style>