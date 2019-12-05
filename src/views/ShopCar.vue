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
        <span class="toShopCar"></span>
      </div>
    </div>
    <!-- 内容列表 -->
    <div class="goodList">
      <div class="goodItem" v-for="(item,index) in dataList" v-bind:key="index">
        <div
          class="chooseBtn"
          v-bind:class="{active:item.choose == true}"
          v-on:click="chooseItem(item)"
        ></div>
        <div class="goodInfo">
          <span class="good_img" :style="{backgroundImage:'url('+item.imgUrl+')'}"></span>
          <span class="good_name">{{item.name}}</span>
          <span class="good_price">￥{{item.price}}</span>
          <span class="good_type" v-if="item.type == 1">全新闲置</span>
          <span class="good_type" v-else-if="item.type == 2">全新瑕疵</span>
          <span class="good_type" v-else-if="item.type == 3">九成新</span>
          <span class="good_type" v-else>正常新</span>
        </div>
        <div class="handleArea">
          <span class="change" v-on:click="changeItem(item,index)">修改</span>
          <span class="delete" v-on:click="deleteItem(item,index)">删除</span>
        </div>
      </div>
    </div>
    <!-- 结算区域 -->
    <div class="settlement">
      <div class="settleLeft">
        <div class="chooseBtn" v-bind:class="{active:hasAll}" v-on:click="allChoose()"></div>
        <span class="tips_all">全选</span>
        <span class="place"></span>
        <span class="chooseNum">已选{{chooseList.length}}件</span>
      </div>
      <div class="settleRight">
        <span class="totalPrice">商品总额：￥{{totalPrice}}</span>
        <span class="payBtn" v-bind:class="{active:canBuy}">立即下单</span>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      dataList: [
        {
          id: 1,
          imgUrl: "/static/hotRecomment/shoes/1/2.jpg",
          name: "AirJordan1 伦纳德",
          price: "120",
          type: 2,
          choose: false
        },
        {
          id: 2,
          imgUrl: "/static/hotRecomment/shoes/1/3.jpg",
          name: "AirJordan1 黑粉脚趾",
          price: "160",
          type: 1,
          choose: false
        },
        {
          id: 3,
          imgUrl: "/static/hotRecomment/shoes/1/4.jpg",
          name: "AirJordan1 骚粉",
          price: "184",
          type: 4,
          choose: false
        },
        {
          id: 4,
          imgUrl: "/static/hotRecomment/shoes/1/5.jpg",
          name: "AirJordan1 黑红拼接",
          price: "150",
          type: 3,
          choose: false
        }
      ],
      chooseList: [],
      totalPrice: 0,
      totalNum: "",
      hasAll: false,
      canBuy: false
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
    },
    // 单选
    chooseItem: function(params) {
      const item = params;
      if (item.choose == true) {
        item.choose = !item.choose;
        this.totalPrice -= parseInt(item.price);
        this.chooseList.forEach((val, index) => {
          if (val.id == item.id) {
            this.chooseList.splice(index, 1);
          }
        });
      } else {
        this.totalPrice += parseInt(item.price);
        item.choose = !item.choose;
        this.chooseList.push(item);
      }
      this.chooseList.length == this.dataList.length
        ? (this.hasAll = true)
        : (this.hasAll = false);
      this.chooseList.length > 0 ? (this.canBuy = true) : (this.canBuy = false);
    },
    // 全选
    allChoose: function(params) {
      if (this.dataList.length > 0) {
        this.totalPrice = 0;
        if (this.hasAll) {
          this.dataList.forEach(val => {
            val.choose = false;
          });
          this.chooseList = [];
          this.hasAll = false;
          this.canBuy = false;
        } else {
          this.chooseList = [];
          this.dataList.forEach(val => {
            val.choose = true;
            this.chooseList.push(val);
            this.totalPrice += parseInt(val.price);
          });
          this.hasAll = true;
          this.canBuy = true;
        }
      } else {
        this.$message({
          message: '购物车是空的哟~',
          type: 'warning'
        });
      }
    },
    // 删除
    deleteItem: function(param1, param2) {
      const item = param1;
      const index = param2;
      this.dataList.splice(index, 1);
      item.choose ? (this.totalPrice -= item.price) : "";
      this.chooseList.forEach((val, index) => {
        if (val.id == item.id) {
          this.chooseList.splice(index, 1);
        }
      });
      if (this.chooseList.length == this.dataList.length) {
        this.hasAll = true;
      }
      if (this.chooseList == 0) {
        this.hasAll = false;
        this.canBuy = false;
      }
    }
  }
};
</script>

<style lang='less' scoped='' type='text/css'>
.topCover {
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
  .goodList {
    width: calc(100% - 400px);
    margin: 20px 200px;
    background-color: #f5f5f5;
    .goodItem {
      width: calc(100% - 80px);
      padding: 20px 40px;
      background-color: #ffff;
      border-bottom: 4px solid #e9e9e9;
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      .chooseBtn {
        width: 30px;
        height: 30px;
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translate(-50%, -50%);
        background-image: url("../assets/image/choose.png");
        background-size: contain;
        background-repeat: no-repeat;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        &.active {
          background-image: url("../assets/image/choose_active.png");
        }
      }
      .goodInfo {
        width: 60%;
        height: 150px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        .good_img {
          width: 180px;
          height: 100px;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }
        .good_name {
          font-size: 20px;
          font-weight: bold;
          color: #000;
        }
        .good_price {
          font-size: 20px;
          font-weight: bold;
          color: #000;
        }
      }
      .handleArea {
        width: 20%;
        height: 150px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        .change {
          display: block;
          padding: 10px 20px;
          border: 1px solid #000;
          transition: all 0.3s;
          cursor: pointer;
          &:hover {
            background-color: #000;
            color: #fff;
          }
        }
        .delete {
          display: block;
          padding: 10px 20px;
          background-color: #000;
          color: #fff;
          transition: all 0.3s;
          cursor: pointer;
          &:hover {
            background-color: rgb(44, 44, 44);
          }
        }
      }
    }
  }
  .settlement {
    width: calc(100% - 440px);
    margin: 20px 200px;
    padding-left: 40px;
    height: 100px;
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    position: relative;
    .settleLeft {
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      align-items: center;
      .chooseBtn {
        position: absolute;
        width: 30px;
        height: 30px;
        background-image: url("../assets/image/choose.png");
        background-size: contain;
        background-repeat: no-repeat;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        cursor: pointer;
        &.active {
          background-image: url("../assets/image/choose_active.png");
        }
      }
      .tips_all {
        font-size: 16px;
        font-weight: bold;
        margin-right: 20px;
      }
      .place {
        display: block;
        width: 2px;
        height: 20px;
        background-color: #525050;
        margin-right: 20px;
      }
      .chooseNum {
        font-size: 16px;
        font-weight: bold;
      }
    }
    .settleRight {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      .totalPrice {
        display: block;
        padding: 0 20px;
        font-size: 16px;
        font-weight: bold;
      }
      .payBtn {
        width: 100px;
        padding: 10px;
        font-weight: bold;
        background-color: rgb(116, 116, 116);
        color: rgb(226, 226, 226);
        cursor: pointer;
        &.active {
          background-color: #000;
          color: #fff;
        }
      }
    }
  }
}
</style>