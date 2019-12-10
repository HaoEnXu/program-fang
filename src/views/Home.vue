<template>
  <div class="homecover">
    <!-- 广告区域 -->
    <!-- <div class="header"></div> -->
    <!-- 顶部信息栏 -->
    <div class="topBanner">
      <!-- logo -->
      <span class="logo"></span>
      <!-- search -->
      <div class="searchArea">
        <div class="searchInput">
          <el-input placeholder="请输入内容" v-model="serachValue">
            <el-button slot="append" icon="el-icon-search" type="danger" v-on:click="toSearch()"></el-button>
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
      <div class="banner_right">
        <div class="personInfo" v-on:click="toUserPage">
          <span class="userHead"></span>
        </div>
        <div class="to_shopCar" v-on:click="toShopCar"></div>
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
          <div
            class="itemDetail"
            v-for="(item,index) in rightList"
            v-bind:key="index"
            v-on:click="toDetail(item)"
          >
            <div class="itemImage" :style="{backgroundImage:'url('+item.url+')'}"></div>
            <div class="itemIntro">
              <span class="itemPrice">￥{{item.price}}</span>
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
          <div
            class="item_content"
            v-for="(item,index) in aj1"
            v-bind:key="index"
            v-on:click="toDetail(item)"
          >
            <div class="item_image" :style="{backgroundImage:'url('+item.url+')'}"></div>
            <!-- 名字 -->
            <span class="recomment_name">{{item.name}}</span>
            <!-- 价格 -->
            <span class="recomment_price">￥{{item.price}}</span>
          </div>
        </div>
        <div class="item_cover">
          <div class="item_type">AJ13</div>
          <div
            class="item_content"
            v-for="(item,index) in aj13"
            v-bind:key="index"
            v-on:click="toDetail(item)"
          >
            <div class="item_image" :style="{backgroundImage:'url('+item.url+')'}"></div>
            <!-- 名字 -->
            <span class="recomment_name">{{item.name}}</span>
            <!-- 价格 -->
            <span class="recomment_price">￥{{item.price}}</span>
          </div>
        </div>
      </div>
      <span class="recommend_title">大牌云集</span>
      <div class="recomment_content">
        <div class="item_cover">
          <div class="item_type">IPhone</div>
          <div
            class="item_content"
            v-for="(item,index) in iphone"
            v-bind:key="index"
            v-on:click="toDetail(item)"
          >
            <div class="item_image" :style="{backgroundImage:'url('+item.url+')'}"></div>
            <!-- 名字 -->
            <span class="recomment_name">{{item.name}}</span>
            <!-- 价格 -->
            <span class="recomment_price">￥{{item.price}}</span>
          </div>
        </div>
        <div class="item_cover">
          <div class="item_type">XiaoMi</div>
          <div
            class="item_content"
            v-for="(item,index) in xm"
            v-bind:key="index"
            v-on:click="toDetail(item)"
          >
            <div class="item_image" :style="{backgroundImage:'url('+item.url+')'}"></div>
            <!-- 名字 -->
            <span class="recomment_name">{{item.name}}</span>
            <!-- 价格 -->
            <span class="recomment_price">￥{{item.price}}</span>
          </div>
        </div>
      </div>
    </div>
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
          <li>
            <span>京公网安备11000002000088号</span>
            <span>京CP证070359号</span>
            <span>互联网药品信息服务资格证编号(京)-经营性-2014-0008</span>
            <span>新出发京季字第大120007号</span>
          </li>
          <li>
            <span>互联网出版许可证编号新出网证(京)字150号</span>
            <span>出版物经营许可证</span>
            <span>网络文化经营许可证京网文(2014)2148-348号</span>
            <span>违法和不良信息举报电话:4006561155</span>
          </li>
          <li>
            <span>CopyrightC2004-2019京东JD.com版权所有</span>
            <span>消费者维权热线:40060</span>
          </li>
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
          name: "智能机器狗遥控动物对话走路机器人男女孩电动玩具1-6岁",
          url: "/static/slideBar/儿童玩具/pic1.jpg",
          tips: "智能机器狗遥控动物对话走路机器人男女孩电动玩具1-6岁",
          price: "168",
          isNew: false,
          id: 1
        },
        {
          name: "正版植物大战僵尸玩具全套3男孩大反击僵尸套装豌豆射手儿童公仔",
          url: "/static/slideBar/儿童玩具/pic2.jpg",
          tips: "正版植物大战僵尸玩具全套3男孩大反击僵尸套装豌豆射手儿童公仔",
          price: "139",
          isNew: false,
          id: 2
        },
        {
          name: "迪士尼儿童过家家玩具女孩化妆品套装无毒梳妆台盒冰雪奇缘",
          url: "/static/slideBar/儿童玩具/pic3.jpg",
          tips: "迪士尼儿童过家家玩具女孩化妆品套装无毒梳妆台盒冰雪奇缘",
          price: "49",
          isNew: false,
          id: 3
        },
        {
          name: "迪士尼儿童化妆品公主彩妆盒套装无毒小女孩儿玩具指甲油可水洗",
          url: "/static/slideBar/儿童玩具/pic4.jpg",
          tips: "迪士尼儿童化妆品公主彩妆盒套装无毒小女孩儿玩具指甲油可水洗",
          price: "68",
          isNew: false,
          id: 4
        },
        {
          name: "儿童益智玩具早教音乐一两三周宝宝1-3岁开发智力生日礼物",
          url: "/static/slideBar/儿童玩具/pic5.jpg",
          tips: "儿童益智玩具早教音乐一两三周宝宝1-3岁开发智力生日礼物",
          price: "28",
          isNew: false,
          id: 5
        },
        {
          name: "儿童钓鱼玩具套装开发智力一两三周宝宝益智礼物女孩儿",
          url: "/static/slideBar/儿童玩具/pic6.jpg",
          tips: "儿童钓鱼玩具套装开发智力一两三周宝宝益智礼物女孩儿",
          price: "69",
          isNew: false,
          id: 6
        },
        {
          name: "儿童益智玩具2-3小孩7一岁十两三周岁宝宝多功能智力开发",
          url: "/static/slideBar/儿童玩具/pic7.jpg",
          tips: "儿童益智玩具2-3小孩7一岁十两三周岁宝宝多功能智力开发",
          price: "79",
          isNew: false,
          id: 7
        },
        {
          name: "沃尔沃挖掘机双鹰电动遥控钩机挖土机儿童玩具合金版",
          url: "/static/slideBar/儿童玩具/pic8.jpg",
          tips: "沃尔沃挖掘机双鹰电动遥控钩机挖土机儿童玩具合金版",
          price: "269",
          isNew: false,
          id: 8
        },
        {
          name: "贝恩施儿童厨房玩具过家家套装仿真厨具做饭煮饭男女孩宝宝3-6岁7",
          url: "/static/slideBar/儿童玩具/pic9.jpg",
          tips: "贝恩施儿童厨房玩具过家家套装仿真厨具做饭煮饭男女孩宝宝3-6岁7",
          price: "158",
          isNew: false,
          id: 9
        },
        {
          name: "汇乐摇摆鹅儿童电动玩具会唱歌跳舞益智小鸭子宝宝1-3岁男孩抖音",
          url: "/static/slideBar/儿童玩具/pic10.jpg",
          tips: "汇乐摇摆鹅儿童电动玩具会唱歌跳舞益智小鸭子宝宝1-3岁男孩抖音",
          price: "119",
          isNew: false,
          id: 10
        },
        {
          name: "贝恩施儿童购物车玩具女孩 超市小手推车过家家宝宝",
          url: "/static/slideBar/儿童玩具/pic11.jpg",
          tips: "贝恩施儿童购物车玩具女孩 超市小手推车过家家宝宝",
          price: "37",
          isNew: false,
          id: 11
        },
        {
          name: "特宝儿啄木鸟捉虫玩具喂小鸟鸡抓吃虫子俩岁女孩儿宝宝益智",
          url: "/static/slideBar/儿童玩具/pic12.jpg",
          tips: "特宝儿啄木鸟捉虫玩具喂小鸟鸡抓吃虫子俩岁女孩儿宝宝益智",
          price: "69",
          isNew: false,
          id: 12
        }
      ],
      // 分页
      currentPage: 1, //初始页
      pagesize: 12,
      // 热门推荐
      aj1: [
        {
          url: "/static/hotRecomment/shoes/1/2.jpg",
          price: "168",
          name: "AirJoran1 伦纳德",
          level: 1
        },
        {
          url: "/static/hotRecomment/shoes/1/3.jpg",
          price: "168",
          name: "AirJoran1 黑粉脚趾",
          level: 2
        },
        {
          url: "/static/hotRecomment/shoes/1/4.jpg",
          price: "168",
          name: "AirJoran1 骚粉",
          level: 3
        },
        {
          url: "/static/hotRecomment/shoes/1/5.jpg",
          price: "168",
          name: "AirJoran1 鸳鸯拼接",
          level: 4
        }
      ],
      aj13: [
        {
          url: "/static/hotRecomment/shoes/2/1.jpg",
          price: "168",
          name: "Air Jordan 13 OGChicago",
          level: 1
        },
        {
          url: "/static/hotRecomment/shoes/2/2.jpg",
          price: "168",
          name: "Air Jordan 13 Playoffs",
          level: 2
        },
        {
          url: "/static/hotRecomment/shoes/2/3.jpg",
          price: "168",
          name: "Air Jordan 13 蒂芙尼",
          level: 3
        },
        {
          url: "/static/hotRecomment/shoes/2/4.jpg",
          price: "168",
          name: "Air Jordan 13 黑白熊猫",
          level: 4
        }
      ],
      iphone: [
        {
          url: "/static/hotRecomment/electric/1/11pro.jpg",
          price: "168",
          name: "iPhone11pro",
          level: 1
        },
        {
          url: "/static/hotRecomment/electric/1/iPhone8.jpg",
          price: "168",
          name: "iPhone8",
          level: 2
        },
        {
          url: "/static/hotRecomment/electric/1/xr.jpg",
          price: "168",
          name: "iPhoneXR",
          level: 3
        },
        {
          url: "/static/hotRecomment/electric/1/xs.jpg",
          price: "168",
          name: "iPhoneXS",
          level: 4
        }
      ],
      xm: [
        {
          url: "/static/hotRecomment/electric/2/1.jpg",
          price: "168",
          name: "CC9PRO",
          level: 1
        },
        {
          url: "/static/hotRecomment/electric/2/2.jpg",
          price: "168",
          name: "游戏本2019款",
          level: 3
        },
        {
          url: "/static/hotRecomment/electric/2/3.jpg",
          price: "168",
          name: "小爱音箱",
          level: 3
        },
        {
          url: "/static/hotRecomment/electric/2/4.jpg",
          price: "168",
          name: "mix3",
          level: 4
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
      this.$router.push("/person");
    },
    toShopCar: function(param) {
      this.$router.push("/shopCar");
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
      // 发起请求-》 获取数据
      // 根据返回的结果赋值 -> 赋值给this.rightList
    },
    // 分页
    handleSizeChange: function(pagesize) {
      console.log(pagesize);
    },
    handleCurrentChange: function(currentPage) {
      console.log(currentPage);
    },
    // 跳转详情页
    toDetail: function(param) {
      this.$router.push("/GoodDetail");
      localStorage.removeItem("good");
      localStorage.setItem("good", JSON.stringify(param));
    },
    // 跳转搜索页
    toSearch: function(param) {
      if (this.serachValue) {
        localStorage.removeItem("searchValue");
        localStorage.setItem("searchValue", JSON.stringify(this.serachValue));
        this.$router.push("/search");
      } else {
        this.$message("请输入搜索值");
      }
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
@import "../css/footer.less";
.homecover {
  width: 100%;
  background-color: #fff;
  position: relative;
  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 400px);
    height: 100px;
    padding: 0 200px;
    background-color: #000000;
    background-image: url("../assets/image/logo4.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .topBanner {
    width: calc(100% - 400px);
    padding: 0 200px;
    height: 80px;
    background-color: rgb(0, 0, 0);
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    color: #fff;
    .logo {
      width: 14%;
      height: 80px;
      display: inline-block;
      background-image: url("../assets/image/logo4.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
    }
    .searchArea {
      width: 500px;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
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
    .banner_right {
      width: 10%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      align-items: center;
      .personInfo {
        width: 50%;
        height: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        .userHead {
          display: block;
          width: 100%;
          height: 100%;
          background-image: url("../assets/image/user_white.png");
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
      .to_shopCar {
        width: 50%;
        height: 50%;
        background-image: url("../assets/image/shop_index.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
      }
    }
  }
  .slideBar {
    width: calc(100% - 400px);
    padding: 0 200px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    .leftArea {
      width: 100%;
      height: 50px;
      padding: 0 0 0;
      background-color: rgb(255, 255, 255);
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      .leftItem {
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        text-align: center;
        background-color: #fff;
        color: #000;
        font-weight: 400;
        animation: show 0.5s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #818181;
          color: #fff;
        }
        &.active {
          background-color: #000000;
          color: #fff;
        }
      }
    }
    .rightArea {
      width: calc(100% - 2px);
      border: 1px solid #aaa;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      .itemCover {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 0;
        .itemDetail {
          width: calc(21% - 2px);
          margin: 20px 2%;
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
        height: 50px;
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
    width: calc(100% - 400px);
    background-color: #fff;
    padding: 10px 200px 50px;
    position: relative;
    .recommend_title {
      display: block;
      width: 100%;
      text-align: center;
      height: 30px;
      line-height: 30px;
      font-size: 24px;
      color: rgb(14, 13, 13);
      border-radius: 1px;
      position: relative;
      font-weight: bold;
      margin: 50px 0;
      &::after {
        content: "";
        width: 45%;
        height: 2px;
        background: #000;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
      &::before {
        content: "";
        width: 45%;
        height: 2px;
        background: #000;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
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
          width: 160px;
          height: 180px;
          line-height: 180px;
          text-align: center;
          font-weight: bold;
          font-size: 30px;
          color: #fff;
          background-color: #000;
          text-shadow: 0 3px 3px rgb(250, 183, 0);
        }
        .item_content {
          width: 20%;
          height: 180px;
          border: 1px solid #ccc;
          box-shadow: 0 4px 4px #ccc;
          border-radius: 20px;
          cursor: pointer;
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
