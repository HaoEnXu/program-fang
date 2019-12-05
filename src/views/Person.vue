<template>
  <div class="topCover">
    <div class="topBanner">
      <div class="topLeft">
        <span class="logo"></span>
        <span class="toIndex" v-on:click="toHome">首页</span>
      </div>
      <div class="topRight">
        <span class="toUser"></span>
        <span class="toShopCar" v-on:click="toShopCar"></span>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {};
  },
  methods: {
    // 回到首页
    toHome: function(params) {
      this.$router.push("/home");
    },
    // 跳转到购物车页
    toShopCar: function(params) {
      this.$router.push("/shopCar");
    }
  }
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
}
</style>