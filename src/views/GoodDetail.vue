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
      <div class="good_info">
        <span class="good_name">{{itemDetail.name}}</span>
        <span class="good_price">￥{{itemDetail.price}}</span>
        <span class="good_intro" v-if="itemDetail.tips">{{itemDetail.tips}}</span>
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
    }
  },
  beforeMount: function() {
    this.itemDetail = JSON.parse(localStorage.good);
    if (localStorage.getItem("goodList")) {
      this.goodList = JSON.parse(localStorage.getItem("goodList"));
    } else {
      this.goodList = [];
    }
  },
  mounted: function() {}
};
</script>

<style lang='less' scoped='' type='text/css'>
@import '../css/topBanner.less';
@import "../css/footer.less";
.topCover {
  width: 100%;
  height: 100%;
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
}
</style>