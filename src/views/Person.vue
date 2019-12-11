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
    <div class="mainInfo">
      <div class="main_banner">
        <span
          class="mb_item"
          v-bind:class="{active:current_banner == index}"
          v-for="(item,index) in bannerList"
          v-bind:key="index"
          v-on:click="chooseItem(index)"
        >{{item}}</span>
      </div>
      <!-- 个人信息 -->
      <div class="main_content" v-if="current_main == 0">
        <div class="mc_item userName">
          <span class="tips">姓名：</span>
          <el-input v-model="baseUser.name" placeholder="请输入用户姓名" @change="changeName"></el-input>
        </div>
        <div class="mc_item userSex">
          <span class="tips">性别：</span>
          <span
            class="sex_img man"
            id="man"
            v-on:click="chooseSex"
            v-bind:class="{active:baseUser.sex == 0}"
          ></span>
          <span
            class="sex_img woman"
            id="woman"
            v-on:click="chooseSex"
            v-bind:class="{active:baseUser.sex == 1}"
          ></span>
        </div>
        <div class="mc_item userAge">
          <span class="tips">年龄：</span>
          <el-input v-model="baseUser.age" placeholder="请输入年龄" @change="changeAge"></el-input>
        </div>
        <div class="mc_item userAddress">
          <span class="tips">收货地址：</span>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="收货人" width="180"></el-table-column>
            <el-table-column prop="phone" label="联系方式" width="180"></el-table-column>
            <el-table-column prop="address" label="收货地址"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="add_address">
          <span class="addBtn" @click="addDialog = true">
            <i class="el-icon-plus"></i> 新增收货地址
          </span>
        </div>
      </div>
      <!-- 我的订单 -->
      <div class="main_content" v-else-if="current_main == 1"></div>
      <!-- 我的零售 -->
      <div class="main_content" v-else></div>
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
    <!-- 添加收货地址 -->
    <el-dialog title="新增收货地址" :visible.sync="addDialog" width="30%" :before-close="addClose">
      <div class="addressInfo">
        <div class="newInfo">
          <span class="newTips newName">收货人：</span>
          <el-input v-model="newAddress.name" clearable></el-input>
        </div>
        <div class="newInfo">
          <span class="newTips newPhone">联系方式：</span>
          <el-input v-model="newAddress.phone" clearable></el-input>
        </div>
        <div class="newInfo">
          <span class="newTips newAddress">收货地址：</span>
          <el-input v-model="newAddress.address" clearable></el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelAdd">取 消</el-button>
        <el-button type="primary" @click="suerAdd">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑收货地址 -->
    <el-dialog title="修改收货地址" :visible.sync="AlterDialog" width="30%" :before-close="alterClose">
      <div class="addressInfo">
        <div class="newInfo">
          <span class="newTips newName">收货人：</span>
          <el-input v-model="alterItem.name" clearable></el-input>
        </div>
        <div class="newInfo">
          <span class="newTips newPhone">联系方式：</span>
          <el-input v-model="alterItem.phone" clearable></el-input>
        </div>
        <div class="newInfo">
          <span class="newTips newAddress">收货地址：</span>
          <el-input v-model="alterItem.address" clearable></el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelAlter">取 消</el-button>
        <el-button type="primary" @click="sureAlter">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      // 用户基本信息
      baseUser: {
        name: "",
        sex: 0,
        age: ""
      },
      // 收货地址信息
      tableData: [
        {
          id: 1,
          name: "张乐",
          phone: "13224516574",
          address: "上海市红桥区帝景小区2号楼103"
        },
        {
          id: 2,
          name: "李萌",
          phone: "15847251436",
          address: "北京市房山区锦绣花苑3单元501"
        },
        {
          id: 3,
          name: "贺兰",
          phone: "15647412548",
          address: "海南省三亚市李七庄"
        }
      ],
      // 购物车
      goodList: [],
      // 导航基本信息
      bannerList: ["个人信息", "我的订单", "我的零售"],
      // 导航index
      current_main: 0,
      // 内容区域index
      current_banner: 0,

      // 遮罩层
      addDialog: false,
      AlterDialog: false,
      // 新的收货信息
      newAddress: {
        name: "",
        phone: "",
        address: ""
      },
      // 要修改的地址
      alterItem: {
        name: "",
        phone: "",
        address: ""
      }
    };
  },
  methods: {
    // 获取当前用户信息
    getUserInfo: function() {
      // 在进入到页面的时候就调用
      // 发起请求--获取基本信息赋值给baseUser
    },
    getAddressInfo: function(param) {
      // 在进入到页面的时候就调用
      // 发起请求--获取收货地址信息--赋值给tableData
    },
    // 跳转
    toPerson: function() {
      this.$router.push("/person");
    },
    toHome: function(params) {
      this.$router.push("/home");
    },
    toShopCar: function(params) {
      this.$router.push("/shopCar");
    },

    // 选择item
    chooseItem: function(param) {
      this.current_banner = param;
      this.current_main = param;
    },

    // 请求-修改性别
    chooseSex: function(e) {
      e.target.id == "man" ? (this.baseUser.sex = 0) : (this.baseUser.sex = 1);
    },
    // 请求-修改用户姓名
    changeName: function(param) {
      console.log(param);
    },
    // 请求-修改年龄
    changeAge: function(param) {
      console.log(param);
    },
    // 编辑收货地址
    handleClick: function(param) {
      this.AlterDialog = true;
      this.alterItem = JSON.parse(JSON.stringify(param));
    },
    // 请求-删除收货地址
    handleDelete: function(param) {
      console.log(param);
      // 可以获取到当前id，然后发起请求到后台将这条数据删除，然后重新赋值给tableData
    },

    // 关闭新建遮罩
    addClose(done) {
      (this.newAddress.name = ""),
        (this.newAddress.phone = ""),
        (this.newAddress.address = "");
    },
    // 取消新建
    cancelAdd: function(param) {
      (this.newAddress.name = ""),
        (this.newAddress.phone = ""),
        (this.newAddress.address = "");
      this.addDialog = false;
    },
    // 请求-确定新建
    suerAdd: function(param) {
      this.addDialog = false;
      const newInfo = this.newAddress;
      // newInfo就是新建的对象，包含收货人/联系方式/收货地址三条信息，发送到后台添加到收货地址列表里，将新数据返回，赋值给tableData
    },

    // 关闭修改遮罩
    alterClose(done) {},
    // 取消修改
    cancelAlter: function(param) {
      for (let key in this.alterItem) {
        this.alterItem[key] = "";
      }
      this.AlterDialog = false;
    },
    // 请求-确定修改
    sureAlter: function(param) {
      this.AlterDialog = false;
      const keyword = this.alterItem;
      // 发起请求--将这个对象发到后台进行修改--然后返回新的收货地址数组--重新赋值给tableData
    }
  },
  beforeMount: function(param) {
    if (localStorage.getItem("goodList")) {
      this.goodList = JSON.parse(localStorage.getItem("goodList"));
    } else {
      this.goodList = [];
    }
    // 获取用户信息
    this.getUserInfo();
    // 获取收货地址信息
    this.getAddressInfo();
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
  width: calc(100% - 400px);
  min-height: calc(100% - 270px);
  padding: 0 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .main_banner {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    .mb_item {
      display: block;
      width: 120px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      font-weight: 800;
      position: relative;
      cursor: pointer;
      color: rgb(155, 155, 155);
      transition: all 0.3s;
      &::before {
        content: "";
        width: 0;
        height: 0;
        border-right: 1px;
        background-color: #000;
        position: absolute;
        left: 50%;
        bottom: 5px;
        transition: all 0.3s;
      }
      &:hover {
        color: #000;
      }
      &.active {
        color: #000;
        &::before {
          width: 50%;
          height: 2px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &::after {
        content: "";
        width: 2px;
        height: 20px;
        background-color: rgb(110, 110, 110);
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      &:last-child {
        &::after {
          content: "";
          width: 0;
          height: 0;
        }
      }
    }
  }
  .main_content {
    width: calc(100% - 40px);
    padding: 30px 20px 0;
    background-color: #fff;
    .mc_item {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      .tips {
        width: 100px;
        height: 50px;
        line-height: 50px;
        text-align: left;
        font-size: 16px;
      }
      .el-input {
        width: 400px;
      }
      .sex_img {
        display: block;
        width: 30px;
        height: 30px;
        margin-right: 20px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        &.man {
          background-image: url("../assets/image/man_base.png");
        }
        &.woman {
          background-image: url("../assets/image/woman_base.png");
        }
        &.active {
          &.man {
            background-image: url("../assets/image/man_active.png");
          }
          &.woman {
            background-image: url("../assets/image/woman_active.png");
          }
        }
      }
    }
    .add_address {
      width: 100%;
      height: 60px;
      line-height: 60px;
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      align-items: center;
      .addBtn {
        display: block;
        width: 120px;
        height: 20px;
        line-height: 20px;
        background-color: #f89f2b;
        padding: 10px 20px;
        color: #fff;
        font-size: 16px;
        border-radius: 20px;
        box-shadow: 0px 5px 5px #f5c88e;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
          box-shadow: 0px 5px 5px #f0b262;
        }
      }
    }
  }
}
.addressInfo {
  width: 100%;
  height: 100%;
  .newInfo {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
    .newTips {
      display: inline-block;
      width: 100px;
      text-align: left;
    }
  }
}
</style>