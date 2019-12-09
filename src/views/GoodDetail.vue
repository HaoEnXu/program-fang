<template>
  <div class="topCover">
    <!-- 顶部导航栏 -->
    <div class="topBanner">
      <div class="topLeft">
        <span class="logo"></span>
        <span class="toIndex" v-on:click="toHome">首页</span>
      </div>
      <div class="topRight">
        <span class="toUser" v-on:click="toPerson"></span>
        <div class="toShopCar" v-on:click="toShopCar">
          <span class="goodNum" v-if="goodList.length != 0">{{goodList.length}}</span>
        </div>
      </div>
    </div>
    <!-- 主要内容区域 -->
    <div class="mainInfo">
      <div class="good_image" :style="{backgroundImage:'url('+itemDetail.url+')'}"></div>
      <!-- <div class="good_image" ></div> -->
      <div class="good_info">
        <span class="good_name">{{itemDetail.name}}</span>
        <span class="good_price">{{itemDetail.price}}</span>
        <span class="good_intro" v-if="itemDetail.tips">{{itemDetail.tips}}</span>
        <!-- <span class="good_color">{{itemDetail.color}}</span> -->
        <div class="levelCover">
          <span class="levelTitle">新旧程度：</span>
          <div class="good_level">
            <div
              class="levelItem"
              v-bind:class="{active:index == current}"
              v-for="(item,index) in levelList"
              v-bind:key="index"
              v-on:click="chooseType(index)"
            >
              {{item.content}}
              <span class="tips" v-if="index == current">{{item.tips}}</span>
            </div>
          </div>
        </div>
        <div class="shopCar">
          <span class="shopItem buyNow" v-on:click="toShopCar">立即购买</span>
          <div class="shopItem addCar" v-on:click="addShopCar">加入购物车</div>
        </div>
      </div>
    </div>
    <!-- 附加信息区域 -->
    <div class="otherInfo"></div>
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
      goodId: "test",
      itemDetail: {},
      levelList: [
        {
          content: "全新闲置",
          tips: "全新无试穿、配件齐全、原盒方正"
        },
        {
          content: "全新瑕疵",
          tips: "轻微瑕疵"
        },
        {
          content: "九成新",
          tips: "下地试穿或者3次以下正常穿着"
        },
        {
          content: "正常新",
          tips: "3-6次正常穿着"
        }
      ],
      current: 0,
      goodList: []
    };
  },
  methods: {
    chooseType: function(params) {
      this.current = params;
    },
    toHome: function(param) {
      this.$router.push("/home");
    },
    // 跳转用户详情页
    toPerson: function() {
      this.$router.push("/person");
    },
    // 跳转购物车页
    toShopCar: function(param) {
      this.$router.push("/shopCar");
    },
    addShopCar: function(param) {
      if (
        JSON.parse(localStorage.getItem("goodList")) == null ||
        JSON.parse(localStorage.getItem("goodList")) == undefined
      ) {
        const goodList = [];
        goodList.push(this.itemDetail);
        localStorage.setItem("goodList", JSON.stringify(goodList));
      } else {
        const goodList = JSON.parse(localStorage.getItem("goodList"));
        goodList.push(this.itemDetail);
        localStorage.setItem("goodList", JSON.stringify(goodList));
      }
      this.goodList = JSON.parse(localStorage.getItem("goodList"));
      console.log(this.goodList);
    }
  },
  beforeMount: function() {
    this.itemDetail = JSON.parse(localStorage.good);
    this.goodList = JSON.parse(localStorage.getItem("goodList"));
  },
  mounted: function() {}
};
</script>

<style lang='less' scoped='' type='text/css'>
.topCover {
  width: 100%;
  height: 100%;
  .topBanner {
    width: calc(100% - 400px);
    height: 50px;
    background-color: rgb(37, 37, 37);
    padding: 0 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    font-size: 16px;
    color: rgb(255, 253, 253);
    font-weight: 400;
    cursor: pointer;
    .topLeft {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      .logo {
        width: 100px;
        height: 100%;
        background-image: url("../assets/image/logo4.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
      .toIndex {
        margin-left: 40px;
        position: relative;
        &::after {
          content: "";
          width: 0%;
          height: 0px;
          background-color: rgb(255, 255, 255);
          position: absolute;
          left: 50%;
          bottom: -10px;
          transition: all 0.2s;
        }
        &:hover {
          color: rgb(255, 255, 255);
          font-weight: 400;
          &::after {
            left: 0%;
            width: 100%;
            height: 2px;
          }
        }
      }
    }
    .topRight {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      .toUser {
        width: 24px;
        height: 24px;
        background-image: url("../assets/image/user.png");
        background-size: contain;
        background-repeat: no-repeat;
        margin: 0 40px;
        position: relative;
        &::after {
          content: "";
          width: 0%;
          height: 0px;
          background-color: rgb(255, 255, 255);
          position: absolute;
          left: 50%;
          bottom: -10px;
          transition: all 0.2s;
        }
        &:hover {
          &::after {
            left: 0%;
            width: 100%;
            height: 2px;
          }
        }
      }
      .toShopCar {
        width: 24px;
        height: 24px;
        background-image: url("../assets/image/shopCar.png");
        background-size: contain;
        background-repeat: no-repeat;
        position: relative;
        &::after {
          content: "";
          width: 0%;
          height: 0px;
          background-color: rgb(255, 255, 255);
          position: absolute;
          left: 50%;
          bottom: -10px;
          transition: all 0.2s;
        }
        &:hover {
          &::after {
            left: 0%;
            width: 100%;
            height: 2px;
          }
        }
        .goodNum {
          background-color: #f56c6c;
          min-width: 20px;
          height: 20px;
          border-radius: 10px;
          color: #fff;
          font-size: 14px;
          position: absolute;
          right: -10px;
          top: -10px;
        }
      }
    }
  }
  .mainInfo {
    width: calc(100% - 400px);
    min-height: calc(100% - 370px);
    padding: 50px 200px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    .good_image {
      width: 600px;
      height: 400px;
      background-image: url("../../static/hotRecomment/shoes/1/2.jpg");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    .good_info {
      width: 500px;
      height: 400px;
      position: relative;
      .good_name {
        display: block;
        width: 100%;
        line-height: 40px;
        font-size: 28px;
        color: rgb(34, 33, 33);
        text-align: left;
      }
      .good_price {
        display: block;
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 30px;
        font-weight: 400;
        color: #e56a69;
        text-align: left;
      }
      .good_intro {
        display: block;
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: rgb(39, 39, 39);
        text-align: left;
        background-color: rgb(247, 247, 247);
        border-radius: 2px;
      }
      .levelCover {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        margin-top: 30px;
        .levelTitle {
          display: block;
          width: 100px;
          height: 50px;
          line-height: 50px;
          text-align: left;
        }
        .good_level {
          width: calc(100% - 50px);
          height: 50px;
          display: flex;
          justify-content: space-around;
          flex-direction: row;
          align-items: center;
          position: relative;
          .levelItem {
            padding: 10px 10px;
            border: 2px solid #000;
            transition: all 0.3s;
            cursor: pointer;
            &.active {
              background-color: #000;
              color: #fff;
            }
            &:hover {
              background-color: #000;
              color: #fff;
            }
            .tips {
              position: absolute;
              bottom: -40px;
              font-size: 16px;
              color: #a3a3a3;
              width: 300px;
              left: 50%;
              transform: translateX(-50%);
              height: 20px;
              line-height: 20px;
              text-align: center;
            }
          }
        }
      }
      .shopCar {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        position: absolute;
        bottom: 0;
        left: 0;
        .shopItem {
          width: 150px;
          height: 50px;
          line-height: 50px;
          padding: 0 20px;
          border: 2px solid #000;
          color: #000;
          font-size: 18px;
          cursor: pointer;
          &:hover {
            background: #000;
            color: #fff;
          }
          &.addCar {
            background: #000;
            color: #fff;
          }
        }
      }
    }
  }
  .footer {
    width: calc(100% - 400px);
    padding: 10px 200px;
    height: 200px;
    background-color: #000;
    color: #fff;
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
          color: #fff;
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
        margin: 10px 0 0 0;
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
            border-right: 1px solid #ccc;
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
</style>