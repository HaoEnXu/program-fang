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
        <div class="paging">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"
            layout="prev, pager, next"
            :total="13"
            :size="12"
          ></el-pagination>
        </div>
      </div>
    </div>
    <!-- 推荐区 -->
    <div class="recommend">
      <span class="recommend_title">爆款推荐</span>
      <div class="recomment_content">
        <div class="item_cover">
          <div class="item_type">AJ1</div>
          <div class="item_content" v-for="(item,index) in aj1" v-bind:key="index">
            <div class="item_image" :style="{backgroundImage:'url('+item.url+')'}"></div>
            <!-- 名字 -->
            <span class="recomment_name">{{item.name}}</span>
            <!-- 价格 -->
            <span class="recomment_price">{{item.price}}</span>
          </div>
        </div>
        <div class="item_cover">
          <div class="item_type">AJ13</div>
          <div class="item_content" v-for="(item,index) in aj13" v-bind:key="index">
            <div class="item_image" :style="{backgroundImage:'url('+item.url+')'}"></div>
            <!-- 名字 -->
            <span class="recomment_name">{{item.name}}</span>
            <!-- 价格 -->
            <span class="recomment_price">{{item.price}}</span>
          </div>
        </div>
      </div>
      <span class="recommend_title">大牌云集</span>
      <div class="recomment_content">
        <div class="item_cover">
          <div class="item_type">IPhone</div>
          <div class="item_content" v-for="(item,index) in iphone" v-bind:key="index">
            <div class="item_image" :style="{backgroundImage:'url('+item.url+')'}"></div>
            <!-- 名字 -->
            <span class="recomment_name">{{item.name}}</span>
            <!-- 价格 -->
            <span class="recomment_price">{{item.price}}</span>
          </div>
        </div>
        <div class="item_cover">
          <div class="item_type">XiaoMi</div>
          <div class="item_content" v-for="(item,index) in xm" v-bind:key="index">
            <div class="item_image" :style="{backgroundImage:'url('+item.url+')'}"></div>
            <!-- 名字 -->
            <span class="recomment_name">{{item.name}}</span>
            <!-- 价格 -->
            <span class="recomment_price">{{item.price}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <!-- 底栏 -->
    <div class="footer">
      <ul class="JD_banner">
        <li>
          <span class="icon_JD one"></span>
          <span class="text_JD">品类齐全，轻松购物</span>
        </li>
        <li>
          <span class="icon_JD two"></span>
          <span class="text_JD">多仓直发，极速配送</span>
        </li>
        <li>
          <span class="icon_JD three"></span>
          <span class="text_JD">正品行货，精致服务</span>
        </li>
        <li>
          <span class="icon_JD four"></span>
          <span class="text_JD">天天低价，畅选无忧</span>
        </li>
      </ul>
      <div class="bottomPart">
        <ul class="bottom_list">
          <li>关于我们</li>
          <i></i>
          <li>联系我们</li>
          <i></i>
          <li>联系客服</li>
          <i></i>
          <li>合作招商</li>
          <i></i>
          <li>商家帮助</li>
          <i></i>
          <li>营销中心</li>
          <i></i>
          <li>手机京东</li>
          <i></i>
          <li>友情链接</li>
          <i></i>
          <li>销售联盟</li>
          <i></i>
          <li>京东社区</li>
          <i></i>
          <li>风险监测</li>
          <i></i>
          <li>隐私政策</li>
          <i></i>
          <li>京东公益</li>
          <i></i>
          <li>English Site</li>
        </ul>
        <ul class="bottom_list2">
          <li><span>京公网安备11000002000088号</span><span>京CP证070359号</span><span>互联网药品信息服务资格证编号(京)-经营性-2014-0008</span><span>新出发京季字第大120007号</span></li>
          <li><span>互联网出版许可证编号新出网证(京)字150号</span><span>出版物经营许可证</span><span>网络文化经营许可证京网文(2014)2148-348号</span><span>违法和不良信息举报电话:4006561155</span></li>
          <li><span>CopyrightC2004-2019京东JD.com版权所有</span><span>消费者维权热线:40060</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
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
      newValue: [
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
      ],
      // 分页
      currentPage: 1, //初始页
      pagesize: 12,
      // 热门推荐
      aj1: [
        {
          url: "/static/hotRecomment/shoes/1/2.jpg",
          price: "¥168.00",
          name: "AirJoran1 伦纳德"
        },
        {
          url: "/static/hotRecomment/shoes/1/3.jpg",
          price: "¥168.00",
          name: "AirJoran1 黑粉脚趾"
        },
        {
          url: "/static/hotRecomment/shoes/1/4.jpg",
          price: "¥168.00",
          name: "AirJoran1 骚粉"
        },
        {
          url: "/static/hotRecomment/shoes/1/5.jpg",
          price: "¥168.00",
          name: "AirJoran1 鸳鸯拼接"
        }
      ],
      aj13: [
        {
          url: "/static/hotRecomment/shoes/2/1.jpg",
          price: "¥168.00",
          name: "Air Jordan 13 OGChicago"
        },
        {
          url: "/static/hotRecomment/shoes/2/2.jpg",
          price: "¥168.00",
          name: "Air Jordan 13 Playoffs"
        },
        {
          url: "/static/hotRecomment/shoes/2/3.jpg",
          price: "¥168.00",
          name: "Air Jordan 13 蒂芙尼"
        },
        {
          url: "/static/hotRecomment/shoes/2/4.jpg",
          price: "¥168.00",
          name: "Air Jordan 13 黑白熊猫"
        }
      ],
      iphone: [
        {
          url: "/static/hotRecomment/electric/1/11pro.jpg",
          price: "¥168.00",
          name: "iPhone11pro"
        },
        {
          url: "/static/hotRecomment/electric/1/iPhone8.jpg",
          price: "¥168.00",
          name: "iPhone8"
        },
        {
          url: "/static/hotRecomment/electric/1/xr.jpg",
          price: "¥168.00",
          name: "iPhoneXR"
        },
        {
          url: "/static/hotRecomment/electric/1/xs.jpg",
          price: "¥168.00",
          name: "iPhoneXS"
        }
      ],
      xm: [
        {
          url: "/static/hotRecomment/electric/2/1.jpg",
          price: "¥168.00",
          name: "CC9PRO"
        },
        {
          url: "/static/hotRecomment/electric/2/2.jpg",
          price: "¥168.00",
          name: "游戏本2019款"
        },
        {
          url: "/static/hotRecomment/electric/2/3.jpg",
          price: "¥168.00",
          name: "小爱音箱"
        },
        {
          url: "/static/hotRecomment/electric/2/4.jpg",
          price: "¥168.00",
          name: "mix3"
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
      this.getSlideDetail(this.slideIndex);
    },
    // 向后台请求侧边栏对应详情数据
    getSlideDetail: function(param) {
      // 侧边栏对应index，根据对应的index获取对应的数据
      var index = param;
      console.log(index);
      // 发起请求-》 获取数据
      // 根据返回的结果赋值 -> 赋值给this.rightList
    },
    // 分页
    handleSizeChange: function(pagesize) {
      console.log(pagesize);
    },
    handleCurrentChange: function(currentPage) {
      console.log(currentPage);
    }
  },
  beforeCreate: function() {
    // 发起请求---获取第一页的数据---赋值给rightList
  },
  beforeMount: function() {
    // 发起请求，获取第一组数据，然后赋值
    this.rightValue = this.leftList[0];
    this.rightList = this.newValue;
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
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    .leftArea {
      width: 200px;
      height: 100%;
      background-color: #fff;
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
        background-color: #fff;
        color: #000;
        border-radius: 5px;
        font-weight: 400;
        animation: show 0.5s ease-in-out;
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
      width: calc(100% - 200px);
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
          cursor: pointer;
          &:hover {
            animation: show 0.3s ease-in-out;
            animation-fill-mode: forwards;
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
      .paging {
        width: 100%;
        height: 10%;
        position: relative;
        .el-pagination {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  .recommend {
    width: calc(100% - 40px);
    background-color: #fff;
    padding: 10px 20px;
    .recommend_title {
      display: block;
      width: 100px;
      height: 30px;
      font-size: 20px;
      color: #000;
      border-bottom: 2px solid #000;
      border-radius: 1px;
    }
    .recomment_content {
      width: 100%;
      height: 400px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      .item_cover {
        width: 100%;
        height: 180px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        border-radius: 20px;
        .item_type {
          width: 100px;
          height: 180px;
          line-height: 180px;
          text-align: center;
          font-weight: bold;
          font-size: 30px;
          color: #000;
          text-shadow: 0 2px 2px rgb(250, 183, 0);
        }
        .item_content {
          width: 200px;
          height: 180px;
          border: 1px solid #ccc;
          box-shadow: 0 4px 4px #ccc;
          border-radius: 20px;
          &:hover {
            animation: show 0.3s ease-in-out;
            animation-fill-mode: forwards;
          }
          .item_image {
            width: 100%;
            height: 120px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
          .recomment_name {
            display: block;
            width: 100%;
            height: 20px;
            line-height: 20px;
            font-size: 16px;
            color: #aaa;
            text-align: center;
          }
          .recomment_price {
            display: block;
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 22px;
            line-height: 40px;
            color: #ff0000;
            font-weight: bold;
            text-align: center;
          }
        }
      }
    }
    .shoes {
      .AJ1 {
        width: 100%;
        height: 180px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        .AJ1_item {
          width: 18%;
          height: 100%;
          border: 1px solid #ccc;
        }
      }
    }
  }
  .footer {
    width: 100%;
    // height: 300px;
    padding: 20px 0;
    background-color: #fff;
    overflow: hidden;
    .JD_banner {
      width: 100%;
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-content: center;
      flex-direction: row;
      margin: 10px 0;
      li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        height: 50px;
        line-height: 50px;
        .icon_JD {
          width: 36px;
          height: 42px;
          &.one {
            background-image: url("../assets/image/jd1.png");
            background-size: 100%;
            background-repeat: no-repeat;
          }
          &.two {
            background-image: url("../assets/image/jd2.png");
            background-size: 100%;
            background-repeat: no-repeat;
          }
          &.three {
            background-image: url("../assets/image/jd3.png");
            background-size: 100%;
            background-repeat: no-repeat;
          }
          &.four {
            background-image: url("../assets/image/jd4.png");
            background-size: 100%;
            background-repeat: no-repeat;
          }
        }
        .text_JD {
          margin-left: 10px;
          height: 50px;
          font-size: 22px;
          color: #000;
          font-weight: bold;
        }
      }
    }
    .bottomPart {
      width: 100%;
      border-top: 1px solid #ccc;
      .bottom_list {
        width: calc(100% - 60px);
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 30px;
        padding: 10px 30px;
        li {
          font-size: 12px;
          color: #ccc;
          &:hover {
            color: #ff0000;
            cursor: pointer;
          }
        }
        i {
          width: 1px;
          height: 16px;
          background-color: #ccc;
        }
      }
      .bottom_list2 {
        width: calc(100% - 60px);
        list-style: none;
        margin: 10px 0 0 0 ;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 30px;
        padding: 10px 30px;
        li {
          width: 100%;
          height: 20px;
          margin-bottom: 5px;
          
          span {
            display: inline-block;
            font-size: 12px;
            color: #ccc;
            padding: 0 10px;
            border-right: 1px solid #CCC;
            cursor: pointer;
            &:hover {
              color: #ff0000;
            }
            &:last-child {
              border: 0;
            }
          }
        }
      }
    }
  }
}
@keyframes show {
  0% {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  }
  100% {
    transform: translateY(2px);
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.4);
  }
}
</style>
