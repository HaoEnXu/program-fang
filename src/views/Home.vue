<template>
  <div class="homecover">
    <!-- 广告区域 -->
    <div class="header"></div>
    <!-- 顶部信息栏 -->
    <div class="topBanner">
        <!-- logo -->
        <span></span>
        <!-- search -->
        <div class="searchArea">

        </div>
        <!-- person -->
        <div class="person">
          <!-- 用户头像 -->
        </div>
    </div>
    <!-- 侧边展开区域 -->
    <div class="slideBar">
        侧边展开区
    </div>
    <!-- 推荐区 -->
    <div class="recommend">
        推荐区
    </div>
    <!-- 底栏 -->
    <div class="footer">
        底栏
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped='' type='text/css'>
.homecover {
  width: calc(100% - 200px);
  padding: 100px 100px 0;
  background-image: linear-gradient(to bottom, rgb(1, 13, 49), rgb(22, 3, 133));
  position: relative;
  .header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background-color: #f2f2f2;
      background-image: url('../assets/image/home_bg.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
  }
  .topBanner {
      width: 100%;
      height: 50px;
      background-color: #cbcbcb;
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
