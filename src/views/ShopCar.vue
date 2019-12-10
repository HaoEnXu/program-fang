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
        <div class="toShopCar">
          <span class="goodNum" v-if="dataList.length != 0">{{dataList.length}}</span>
        </div>
      </div>
    </div>
    <!-- 内容列表 -->
    <div class="goodList">
      <div class="empty" v-if="dataList.length == 0"></div>
      <div class="goodItem" v-else v-for="(item,index) in dataList" v-bind:key="index">
        <div
          class="chooseBtn"
          v-bind:class="{active:item.choose == true}"
          v-on:click="chooseItem(item)"
        ></div>
        <div class="goodInfo">
          <span class="good_img" :style="{backgroundImage:'url('+item.url+')'}"></span>
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
      dataList: [],
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
          message: "购物车是空的哟~",
          type: "warning"
        });
      }
    },
    // 删除
    deleteItem: function(param1, param2) {
      const item = param1;
      const index = param2;
      const newList = JSON.parse(localStorage.getItem("goodList"));
      newList.forEach((val, index) => {
        if (item.name == val.name) {
          this.dataList.splice(index, 1);
          localStorage.setItem("goodList", JSON.stringify(this.dataList));
        }
      });
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
  },
  beforeMount: function() {
    if (localStorage.getItem("goodList")) {
      this.dataList = JSON.parse(localStorage.getItem("goodList"));
      this.dataList.forEach(val => {
        val.choose = false;
      });
    } else {
      this.dataList = [];
    }
  }
};
</script>

<style lang='less' scoped='' type='text/css'>
@import '../css/topBanner.less';
@import '../css/footer.less';
.topCover {
  width: 100%;
  height: 100%;
  background-color: #fff;
  
  .goodList {
    width: calc(100% - 400px);
    min-height: calc(100% - 410px);
    margin: 0 200px;
    background-color: #fff;
    position: relative;
    .empty {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url("../assets/image/data_empty.png");
      background-size: 300px 200px;
      background-position: center;
      background-repeat: no-repeat;
    }
    .goodItem {
      width: calc(100% - 40px);
      padding: 20px 0 20px 40px;
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
          color: #f56c6c;
          margin-left: 30px;
        }
        .good_type {
          font-size: 20px;
          color: #000;
          font-weight: bold;
          margin-left: 30px;
        }
      }
      .handleArea {
        width: 20%;
        height: 150px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
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
          margin-left: 40px;
          border: 1px solid #000;
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
    background-color: #ffffff;
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