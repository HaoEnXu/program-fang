<template>
  <div class="topCover">
    <!-- 顶部导航栏 -->
    <div class="topBanner">
      <div class="topLeft">
        <span class="logo"></span>
        <span class="toIndex" v-on:click="toHome">首页</span>
      </div>
      <div class="topRight">
        <span class="toUser"></span>
        <span class="toShopCar"></span>
      </div>
    </div>
    <!-- 主要内容区域 -->
    <div class="mainInfo">
      <!-- <div class="good_image" :style="{backgroundImage:'url('+item.url+')'}"></div> -->
      <div class="good_image"></div>
      <div class="good_info">
        <span class="good_name">{{itemDetail.name}}</span>
        <span class="good_price">{{itemDetail.price}}</span>
        <span class="good_intro">{{itemDetail.content}}</span>
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
          <span class="shopItem buyNow">立即购买</span>
          <span class="shopItem addCar">加入购物车</span>
        </div>
      </div>
    </div>
    <!-- 附加信息区域 -->
    <div class="otherInfo"></div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      goodId: "test",
      itemDetail: {
        name: "AIR JORDAN 1 伦纳德",
        content: "倍儿帅的一双鞋",
        color: "gray",
        price: "￥360",
        level: 1
      },
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
      current: 0
    };
  },
  methods: {
    chooseType: function(params) {
      console.log(params);
      this.current = params
    },
    toHome:function (param) { 
      this.$router.push('/home')
     }
  },
  beforeMount: function() {
    const goodId = JSON.parse(localStorage.goodId);
    // 发请求，查数据
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
      }
    }
  }
  .mainInfo {
    width: calc(100% - 400px);
    height: 500px;
    padding: 20px 200px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    .good_image {
      width: 600px;
      height: 400px;
      // border: 1px solid #ccc;
      background-image: url("../../static/hotRecomment/shoes/1/2.jpg");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    .good_info {
      width: 500px;
      height: 400px;
      // border: 1px solid #ccc;
      position: relative;
      .good_name {
        display: block;
        width: 100%;
        height: 40px;
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
}
</style>