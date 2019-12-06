<template>
  <div class="cover">
    <!-- 顶部导航栏 -->
    <div class="topBanner">
      <div class="topLeft">
        <span class="logo"></span>
        <span class="toIndex" v-on:click="toHome">首页</span>
      </div>
      <div class="topRight">
        <span class="toUser" v-on:click="toPerson"></span>
        <span class="toShopCar"></span>
      </div>
    </div>
    <!-- 内容展示区 -->
    <div class="contentArea">
      <!-- 有数据 -->
      <div class="data_has" v-if="hasData">
        <div class="data_item" v-for="(item,index) in dataList" v-bind:key="index">
          <div class="item_img" :style="{backgroundImage:'url('+item.photo+')'}"></div>
          <div class="item_msg">
            <span class="item_name">{{item.goodName}}</span>
            <span class="item_price">{{item.price}}</span>
            <span class="item_status" v-if="item.status == 1">全新闲置</span>
            <span class="item_status" v-else-if="item.status == 2">全新瑕疵</span>
            <span class="item_status" v-else-if="item.status == 3">九成新</span>
            <span class="item_status" v-else>正常新</span>
            <div class="handleArea">
              <span class="btn_detail">查看详情</span>
              <span class="btn_shop">加入购物车</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 数据为空 -->
      <div class="data_empty" v-else>
        <span class="empty_img"></span>
        <span class="empty_tips">很抱歉，暂未数据...</span>
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
      searchValue: "",
      hasData: false,
      dataList: []
    };
  },
  methods: {
    // 回到首页
    toHome: function(params) {
      this.$router.push("/home");
    },
    // 跳转到用户信息页
    toPerson: function(params) {
      this.$router.push("/person");
    }
  },
  beforeCreate: function() {},
  beforeMount: function() {
    this.searchValue = JSON.parse(localStorage.getItem("searchValue"));
    this.$axios
      .post("http://localhost:8086/goods/findBySelectGoods", {
        keyWord: this.searchValue,
        pageSize: 12,
        currentPage: 1
      })
      .then(res => {
        if (res.data) {
          this.dataList = res.data.data.list;
          this.hasData = true;
        }
        console.log(this.dataList);
      });
  }
};
</script>

<style lang='less' scoped='' type='text/css'>
.cover {
  width: 100%;
  height: 100%;
  background-color: #fff;
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
      }
    }
  }
  .contentArea {
    width: calc(100% - 400px);
    margin: 0 200px;
    .data_has {
      width: calc(100% - 40px);
      padding: 20px;
      padding-top: 50px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      .data_item {
        width: 450px;
        height: 300px;
        background-color: #fff;
        margin-bottom: 50px;
        border: 2px solid #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        .item_img {
          width: 50%;
          height: 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
        .item_msg {
          width: 45%;
          height: 300px;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          align-items: flex-start;
          .item_name {
            font-size: 22px;
            font-weight: bold;
            margin-top: 30px;
          }
          .item_price {
            font-size: 20px;
            font-weight: bold;
            margin: 20px 0;
            color: rgb(255, 60, 0);
          }
          .handleArea {
            width: 100%;
            margin: 20px 0;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            .btn_detail {
              width: 150px;
              padding: 10px;
              border: 2px solid #000;
              color: #000;
              font-size: 16px;
              margin-bottom: 20px;
              cursor: pointer;
              transition: all 0.3s;
              &:hover {
                color: #fff;
                background-color: #000;
              }
            }
            .btn_shop {
              width: 150px;
              padding: 10px;
              border: 2px solid #000;
              color: #fff;
              font-size: 16px;
              background-color: #000;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .footer {
    width: calc(100% - 400px);
    padding: 10px 200px;
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