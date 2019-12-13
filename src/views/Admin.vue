<template>
  <div class="cover">
    <!-- 顶部导航 -->
    <div class="topBanner">
      <div class="leftArea">
        <span class="logo"></span>
        <span>管理后台</span>
      </div>
      <span>您好，{{user.name}}</span>
    </div>
    <!-- 主要信息 -->
    <div class="mainInfo">
      <div class="main_banner">
        <span
          :class="{active:currentIndex == index}"
          class="bannerItem"
          v-for="(item,index) in bannerList"
          :key="index"
          v-on:click="chooseItem(index)"
        >{{item}}</span>
      </div>
      <!-- 用户管理 -->
      <div class="main_content" v-if="currentIndex == 0">
        <div class="search">
          <el-input placeholder="搜索用户" v-model="searchValue">
            <el-button slot="append" icon="el-icon-search" v-on:click="toSearch"></el-button>
          </el-input>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="userName" label="用户名"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="age" label="年龄"></el-table-column>
          <el-table-column prop="sex" label="性别"></el-table-column>
          <el-table-column prop="phone" label="联系方式"></el-table-column>
          <el-table-column prop="email" label="邮箱"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="deleteUser(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :pager-count="11"
          :current-page="currentPage"
          layout="prev, pager, next"
          :total="total"
          :size="size"
        ></el-pagination>
      </div>
      <!-- 在售商品 -->
      <div class="main_content" v-else-if="currentIndex == 1">
        <div class="saleGood">
          <el-input placeholder="搜索商品" v-model="searchGood">
            <el-button slot="append" icon="el-icon-search" v-on:click="toSearchGood"></el-button>
          </el-input>
          <div class="SG_List">
            <div class="SG_Item" v-for="(item,index) in SGlist" :key="index">
              <div class="SG_img" :style="{backgroundImage:'url('+item.url+')'}"></div>
              <div class="SG_info">
                <!-- 遮罩层 -->
                <div class="SG_cover">
                  <span class="SG_detail" v-on:click="SGdetail(item)">查看详情</span>
                  <span class="SG_delete" v-on:click="SGdelete(item)">删除数据</span>
                </div>
                <span class="SG_price">￥{{item.price}}</span>
                <span class="SG_name">{{item.name}}</span>
                <!-- <span class="SG_color">{{item.color}}</span>
                <span class="SG_level">{{item.level==0?'全新闲置':item.level==1?'略有瑕疵':item.level==2?'九成新':'正常新'}}</span>
                <span class="SG_shape">{{item.shape==1?'新款':''}}</span>
                <span class="SG_type">所属类别：{{item.type}}</span>
                <span class="SG_status">{{item.status==1?'在售':item.status==2?'已售':'不合格'}}</span>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 待审核 -->
      <div class="main_content" v-else>
        <div class="auditGood"></div>
      </div>
    </div>
    <!-- 遮罩--查看货物详情 -->
    <el-dialog title="商品详情" :visible.sync="SGdialog" width="30%" :before-close="SGClose">
      <div class="SG_dialog"></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="SGdialog = false">关 闭</el-button>
        <el-button type="primary" @click="deleteSGitem">删 除</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      user: {},
      bannerList: ["用户管理", "在售商品", "待审核商品"],
      currentIndex: 0,
      searchValue: "",
      searchGood: "",
      tableData: [],
      total: 0,
      size: 8,
      currentPage: 1,

      // 在售商品
      SGlist: [],
      SGdialog: false,
      currentSG: {}
    };
  },
  methods: {
    chooseItem: function(param) {
      this.currentIndex = param;
      if (this.currentIndex == 1) {
        this.getSaleGood();
      }
    },
    toSearch: function(param) {
      console.log(this.searchValue);
    },
    toSearchGood: function(param) {},
    // 请求用户数据
    getUserList: function(param) {
      this.$axios.get("/userList").then(res => {
        this.tableData = res.data.data;
        this.total = res.data.data.length;
      });
    },
    // 分页
    handleSizeChange: function(pagesize) {
      console.log(pagesize);
    },
    handleCurrentChange: function(currentPage) {
      console.log(currentPage);
    },

    // 请求在售数据
    getSaleGood: function() {
      this.$axios.get("/saleGood", {}).then(res => {
        this.SGlist = res.data.data;
        console.log(this.SGlist);
      });
    },
    // 删除用户
    deleteUser: function(param) {
      const id = param.id;
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 发起请求--修改数据
          //   this.$axios.post("/xxxx", id).then(res => {
          //     if (res.statusCode == 200) {
          //       this.$message({
          //         type: "success",
          //         message: "删除成功!"
          //       });
          //       this.tableData = res.data
          //     }
          //   });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    //查看在售详情
    SGClose: function(param) {
      this.SGdialog = false;
    },
    SGdetail: function(param) {
      console.log(param);
      (this.currentSG = param), (this.SGdialog = true);
    },
    //确定删除
    deleteSGitem: function() {
      this.SGdialog = false;
      // 发起请求--删除数据--重新赋值列表数据
    }
  },
  beforeMount: function() {
    const user = { name: "李嘉诚" };
    this.user = user;
    this.getUserList();
    this.getSaleGood();
  }
};
</script>

<style lang='less' scoped='' type='text/css'>
@import "../css/admin.less";
</style>