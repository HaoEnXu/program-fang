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
      <div class="main_content" v-else-if="currentIndex == 1">2</div>
      <!-- 待审核 -->
      <div class="main_content" v-else>3</div>
    </div>
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
      tableData: [],
      total: 0,
      size: 8,
      currentPage: 1
    };
  },
  methods: {
    chooseItem: function(param) {
      this.currentIndex = param;
    },
    toSearch: function(param) {
      console.log(this.searchValue);
    },
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

    // 删除用户
    deleteUser: function(param) {
      const id = param.id;
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
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
    }
  },
  beforeMount: function() {
    const user = { name: "李嘉诚" };
    this.user = user;
    this.getUserList();
  }
};
</script>

<style lang='less' scoped='' type='text/css'>
@import "../css/admin.less";
</style>