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
    <div class="slideBar">侧边展开区</div>
    <!-- 推荐区 -->
    <div class="recommend">推荐区</div>
    <!-- 底栏 -->
    <div class="footer">底栏</div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      serachValue: "",
      hotKeyList: ["电风扇", "电视", "小米手机", "乐视电视", "动漫周边"],
      hotKey: "",
      userName:'李嘉诚'
    };
  },
  methods: {
    // 获取到点击的热键
    getKey: function(param) {
      this.hotKey = param;
    },
    toUserPage:function () {
      // 跳转到用户信息页
      console.log('跳转用户信息页...')
    }
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
        background-image: url('../assets/image/userHead.png');
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
    height: 500px;
    background-color: #a2a2a2;
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
