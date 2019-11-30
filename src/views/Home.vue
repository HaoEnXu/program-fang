<template>
  <div class="homecover">
    <!-- 广告区域 -->
    <div class="header"></div>
    <!-- 顶部信息栏 -->
    <div class="topBanner">
      <!-- logo -->
      <span class="logo"></span>
      <!-- search -->
      <div class="searchArea">
        <div class="searchInput">
          <el-input placeholder="请输入内容" v-model="serachValue">
            <el-button slot="append" icon="el-icon-search" type="danger"></el-button>
          </el-input>
        </div>
        <div class="hotKey">
          <span class="hotHead">热门搜索：</span>
          <ul class="hotList">
            <li
              v-for="(item,index) in hotKeyList"
              v-bind:key="index"
              v-on:click="getKey(item)"
            >{{item}}</li>
          </ul>
        </div>
      </div>
      <!-- person -->
      <div class="personInfo" v-on:click="toUserPage">
        <span class="userHead"></span>
        <span class="userTips">下午好，{{userName}}</span>
      </div>
    </div>
    <!-- 侧边展开区域 -->
    <div class="slideBar">
      <div class="leftArea">
        <span
          class="leftItem"
          v-bind:class="index==slideIndex?'active':''"
          v-for="(item,index) in leftList"
          v-bind:key="index"
          v-on:click="chooseSlide(index,item)"
        >{{item}}</span>
      </div>
      <div class="rightArea">
        <!-- 内容区 -->
        <div class="itemCover">
          <div class="itemDetail" v-for="(item,index) in rightList" v-bind:key="index">
            <div class="itemImage" :style="{backgroundImage:'url('+item.url+')'}"></div>
            <div class="itemIntro">
              <span class="itemPrice">{{item.price}}</span>
              <span class="itemText">{{item.tips}}</span>
            </div>
          </div>
        </div>
        <!-- 分页 -->
        <div class="paging"></div>
      </div>
    </div>
    <!-- 推荐区 -->
    <div class="recommend">推荐区</div>
    <!-- 底栏 -->
    <div class="footer">底栏</div>
  </div>
</template>

<script type='text/ecmascript-6'>
// import func from '../../vue-temp/vue-editor-bridge';
export default {
  data() {
    return {
      // 搜索区域
      serachValue: "",
      hotKeyList: ["电风扇", "电视", "小米手机", "乐视电视", "动漫周边"],
      hotKey: "",
      userName: "李嘉诚",
      // 侧栏展开区
      leftList: [
        "手机数码",
        "家用电器",
        "运动户外",
        "游戏装备",
        "儿童玩具",
        "趣味图书",
        "精美服装",
        "猎奇百货"
      ],
      slideIndex: 0,
      rightList: [],
      rightValue: "",
      newValue = [
        {
          url: "/static/slideBar/儿童玩具/pic1.jpg",
          tips: "智能机器狗遥控动物对话走路机器人男女孩电动玩具1-6岁",
          price: "¥168.00",
          isNew: false
        },
        {
          url: "/static/slideBar/儿童玩具/pic2.jpg",
          tips: "正版植物大战僵尸玩具全套3男孩大反击僵尸套装豌豆射手儿童公仔",
          price: "¥139.00",
          isNew: false
        },
        {
          url: "/static/slideBar/儿童玩具/pic3.jpg",
          tips: "迪士尼儿童过家家玩具女孩化妆品套装无毒梳妆台盒冰雪奇缘",
          price: "¥49.00",
          isNew: false
        },
        {
          url: "/static/slideBar/儿童玩具/pic4.jpg",
          tips: "迪士尼儿童化妆品公主彩妆盒套装无毒小女孩儿玩具指甲油可水洗",
          price: "¥68.00",
          isNew: false
        },
        {
          url: "/static/slideBar/儿童玩具/pic5.jpg",
          tips: "儿童益智玩具早教音乐一两三周宝宝1-3岁开发智力生日礼物",
          price: "¥28.00",
          isNew: false
        },
        {
          url: "/static/slideBar/儿童玩具/pic6.jpg",
          tips: "儿童钓鱼玩具套装开发智力一两三周宝宝益智礼物女孩儿",
          price: "¥69.00",
          isNew: false
        },
        {
          url: "/static/slideBar/儿童玩具/pic7.jpg",
          tips: "儿童益智玩具2-3小孩7一岁十两三周岁宝宝多功能智力开发",
          price: "¥79.00",
          isNew: false
        },
        {
          url: "/static/slideBar/儿童玩具/pic8.jpg",
          tips: "沃尔沃挖掘机双鹰电动遥控钩机挖土机儿童玩具合金版",
          price: "¥269.00",
          isNew: false
        },
        {
          url: "/static/slideBar/儿童玩具/pic9.jpg",
          tips: "贝恩施儿童厨房玩具过家家套装仿真厨具做饭煮饭男女孩宝宝3-6岁7",
          price: "¥158.00",
          isNew: false
        },
        {
          url: "/static/slideBar/儿童玩具/pic10.jpg",
          tips: "汇乐摇摆鹅儿童电动玩具会唱歌跳舞益智小鸭子宝宝1-3岁男孩抖音",
          price: "¥119.00",
          isNew: false
        },
        {
          url: "/static/slideBar/儿童玩具/pic11.jpg",
          tips: "贝恩施儿童购物车玩具女孩 超市小手推车过家家宝宝",
          price: "¥37.90",
          isNew: false
        },
        {
          url: "/static/slideBar/儿童玩具/pic12.jpg",
          tips: "特宝儿啄木鸟捉虫玩具喂小鸟鸡抓吃虫子俩岁女孩儿宝宝益智",
          price: "¥69.90",
          isNew: false
        }
      ]
    };
  },
  methods: {
    // 获取到点击的热键
    getKey: function(param) {
      this.hotKey = param;
    },
    toUserPage: function() {
      // 跳转到用户信息页
      console.log("跳转用户信息页...");
    },
    // 侧边栏点击
    chooseSlide: function(param1, param2) {
      this.slideIndex = param1;
      this.rightValue = param2;
    },
    // 向后台请求侧边栏对应详情数据
    getSlideDetail:function(param){
      // 侧边栏对应index，根据对应的index获取对应的数据
      var index = param
      // 发起请求-》 获取数据
      // 根据返回的结果赋值 -> 赋值给this.rightList
    }
  },
  beforeMount: function() {
    // 发起请求，获取第一组数据，然后赋值
    this.rightValue = this.leftList[0];
    this.rightList = newValue
  }
};
</script>

<style lang='less' scoped='' type='text/css'>
.homecover {
  width: calc(100% - 600px);
  padding: 100px 300px 0;
  background-image: linear-gradient(to bottom, rgb(1, 13, 49), rgb(22, 3, 133));
  position: relative;
  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: #f5f5f5;
    background-image: url("../assets/image/home_bg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .topBanner {
    width: 100%;
    height: 80px;
    background-color: #f5f5f5;
    position: relative;
    .logo {
      width: 14%;
      height: 80px;
      display: inline-block;
      background-image: url("../assets/image/logo1.png");
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center center;
      position: absolute;
      left: 0;
      top: 0;
    }
    .searchArea {
      width: 500px;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      .searchInput {
        width: 100%;
        height: 40%;
      }
      .hotKey {
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        .hotHead {
          display: inline-block;
          color: #ff0000;
          font-weight: 400;
          font-size: 12px;
        }
        .hotList {
          list-style: none;
          margin: 0;
          padding: 0;
          li {
            display: inline-block;
            font-size: 12px;
            margin-right: 15px;
            cursor: pointer;
            &:hover {
              color: rgb(255, 0, 0);
            }
          }
        }
      }
    }
    .personInfo {
      width: 14%;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      .userHead {
        display: block;
        width: 30%;
        height: 60%;
        background-image: url("../assets/image/userHead.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      .userTips {
        font-size: 14px;
        color: #a2a2a2;
        font-weight: 400;
      }
    }
  }
  .slideBar {
    width: 100%;
    height: 600px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    .leftArea {
      width: 200px;
      height: 100%;
      background-color: #f5f5f5;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      .leftItem {
        width: calc(100% - 2px);
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        text-align: center;
        border: 1px solid #f1f1f1;
        background-color: #f5f5f5;
        color: #000;
        border-radius: 5px;
        font-weight: 400;
        cursor: pointer;
        &:hover {
          background-color: #aaaaaa;
          color: #fff;
        }
        &.active {
          background-color: #868585;
          color: #fff;
        }
      }
    }
    .rightArea {
      width: calc(100% - 232px);
      height: calc(100% - 2px);
      border: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      .itemCover {
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        .itemDetail {
          width: 22%;
          height: 150px;
          border: 1px solid #ccc;
          background-color: #fff;
          border-radius: 10px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
          animation: all 0.5s linear;
          cursor: pointer;
          &:hover {
            box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.4);
          }
          .itemImage {
            width: 100%;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            height: 100px;
            background-color: #fff;
            border-radius: 10px 10px 0 0;
          }
          .itemIntro {
            width: calc(100% - 20px);
            height: 50px;
            display: flex;
            justify-content: flex-start;
            align-items: left;
            flex-direction: column;
            padding: 0 10px;
            .itemText {
              width: 100%;
              height: 20px;
              line-height: 20px;
              font-size: 12px;
              color: #a2a2a2;
              text-align: left;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .itemPrice {
              width: 100%;
              height: 30px;
              line-height: 30px;
              font-size: 20px;
              color: #ff0000;
              font-weight: 100;
              text-align: left;
            }
          }
        }
      }
    }
  }
  .recommend {
    width: 100%;
    height: 500px;
    background-color: #f2f2f2;
  }
  .footer {
    width: 100%;
    height: 300px;
    background-color: rgb(82, 43, 43);
  }
}
</style>
