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
    <!-- 主要内容区 -->
    <div class="mainInfo"></div>
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
      goodList: []
    };
  },
  methods: {
    // 跳转用户详情页
    toPerson: function() {
      this.$router.push("/person");
    },
    // 回到首页
    toHome: function(params) {
      this.$router.push("/home");
    },
    // 跳转到购物车页
    toShopCar: function(params) {
      this.$router.push("/shopCar");
    }
  },
  beforeMount: function(param) {
    if (localStorage.getItem("goodList")) {
      this.goodList = JSON.parse(localStorage.getItem("goodList"));
    } else {
      this.goodList = [];
    }
  }
};
</script>

<style lang='less' scoped='' type='text/css'>
@import "../css/topBanner.less";
@import "../css/footer.less";
.topCover {
  width: 100%;
  height: 100%;
  position: relative;
}
.mainInfo {
  width: 100%;
  min-height: calc(100% - 270px);
  background-image: url("../assets/image/data_empty.png");
  background-size: 300px 200px;
  background-position: center;
  background-repeat: no-repeat;
}
</style>