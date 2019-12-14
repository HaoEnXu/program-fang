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
        <div class="userManage">
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
            :page-count="11"
            :current-page="currentPage"
            layout="prev, pager, next"
            :total="total"
            :size="size"
          ></el-pagination>
        </div>
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
              </div>
            </div>
          </div>
          <el-pagination
            @size-change="SGSizeChange"
            @current-change="SGCurrentChange"
            :page-count="12"
            :current-page="SGcurrentPage"
            layout="prev, pager, next"
            :total="SGtotal"
            :size="SGsize"
          ></el-pagination>
        </div>
      </div>
      <!-- 待审核 -->
      <div class="main_content" v-else>
        <div class="auditGood">
          <div class="search">
            <el-input placeholder="搜索数据" v-model="searchAudit">
              <el-button slot="append" icon="el-icon-search" v-on:click="toSearchAudit"></el-button>
            </el-input>
          </div>
          <el-table :data="AGlist" style="width: 100%">
            <el-table-column prop="name" label="商品名字"></el-table-column>
            <el-table-column prop="price" label="商品价格"></el-table-column>
            <el-table-column prop="des" label="商品描述" width="300"></el-table-column>
            <el-table-column prop="level" label="新旧程度"></el-table-column>
            <el-table-column prop="shape" label="商品款型"></el-table-column>
            <el-table-column prop="color" label="商品颜色"></el-table-column>
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button @click="lookAGDetail(scope.row)" type="text" size="small">查看详情</el-button>
                <el-button @click="auditPass(scope.row)" type="text" size="small">通过审核</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="AGSizeChange"
            @current-change="AGCurrentChange"
            :page-count="11"
            :current-page="AGcurrentPage"
            layout="prev, pager, next"
            :total="AGtotal"
            :size="AGsize"
          ></el-pagination>
        </div>
      </div>
    </div>
    <!-- 遮罩--查看货物详情 -->
    <el-dialog title="商品详情" :visible.sync="SGdialog" width="700px" :before-close="SGClose">
      <div class="SG_dialog">
        <div class="dialog_item">
          <span class="DI_tips">商品名字：</span>
          <span class="DI_info">{{currentSG.name}}</span>
        </div>
        <div class="dialog_item">
          <span class="DI_tips">商品价格：</span>
          <span class="DI_info">￥{{currentSG.price}}</span>
        </div>
        <div class="dialog_item">
          <span class="DI_tips">商品描述：</span>
          <span class="DI_info">{{currentSG.des}}</span>
        </div>
        <div class="dialog_item">
          <span class="DI_tips">颜色：</span>
          <span class="DI_info">{{currentSG.color}}</span>
        </div>
        <div class="dialog_item">
          <span class="DI_tips">新旧程度：</span>
          <span
            class="DI_info"
          >{{currentSG.level==0?'全新闲置':currentSG.level==1?'略有瑕疵':currentSG.level==2?'九成新':'正常新'}}</span>
        </div>
        <div class="dialog_item">
          <span class="DI_tips">款式：</span>
          <span class="DI_info">{{currentSG.shape==1?'新款':''}}</span>
        </div>
        <div class="dialog_item">
          <span class="DI_tips">所属类别：</span>
          <span class="DI_info">{{currentSG.type}}</span>
        </div>
        <div class="dialog_item">
          <span class="DI_tips">售卖情况：</span>
          <span class="DI_info">{{currentSG.status==1?'在售':currentSG.status==2?'已售':'不合格'}}</span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="SGdialog = false">关 闭</el-button>
        <el-button type="primary" @click="deleteSGitem">删 除</el-button>
      </span>
    </el-dialog>
    <!-- 遮罩--待审核商品详情 -->
    <el-dialog title="待审核数据详情" :visible.sync="AGdialog" width="600px" :before-close="AGclose">
      <div class="AGcover">
        <div class="AG_topInfo">
          <div class="AG_base">
            <span class="AG_img"></span>
            <ul>
              <li>
                <span class="AGB_tips">商品名字：</span>
                <span class="AGB_content">{{AGitem.name}}</span>
              </li>
              <li>
                <span class="AGB_tips">商品价格：</span>
                <span class="AGB_content">{{AGitem.price}}</span>
              </li>
              <li>
                <span class="AGB_tips">商品描述：</span>
                <span class="AGB_content">{{AGitem.des}}</span>
              </li>
              <li>
                <span class="AGB_tips">新旧程度：</span>
                <span class="AGB_content">{{AGitem.level}}</span>
              </li>
              <li>
                <span class="AGB_tips">商品款型：</span>
                <span class="AGB_content">{{AGitem.shape}}</span>
              </li>
              <li>
                <span class="AGB_tips">商品颜色：</span>
                <span class="AGB_content">{{AGitem.color}}</span>
              </li>
              <li>
                <span class="AGB_tips">商家姓名：</span>
                <span class="AGB_content">{{AGitem.userName}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="AG_bottomArea">
          <span v-on:click="auditAgree">审核通过</span>
          <span v-on:click="auditPass">审核驳回</span>
        </div>
      </div>
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
      searchAudit: "",
      tableData: [],
      // 分页--用户
      total: 0,
      size: 8,
      currentPage: 1,
      // 分页--在售
      SGtotal: 0,
      SGsize: 12,
      SGcurrentPage: 1,
      // 分页--待审核
      AGtotal: 0,
      AGsize: 12,
      AGcurrentPage: 1,
      // 在售商品
      SGlist: [],
      SGdialog: false,
      currentSG: {},
      // 待审核数据
      AGdialog: false,
      AGlist: [],
      AGitem: {}
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
    toSearchGood: function(param) {
      // 发起请求，重新赋值
    },
    toSearchAudit: function(param) {
      // 待审核数据检索--重新赋值
    },
    // 请求用户数据
    getUserList: function(param) {
      this.$axios.get("/userList").then(res => {
        this.tableData = res.data.data;
        this.total = res.data.data.length;
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
    // 分页--用户
    handleSizeChange: function(pagesize) {
      console.log(pagesize);
    },
    handleCurrentChange: function(currentPage) {
      console.log(currentPage);
    },
    // 分页--在售
    SGSizeChange: function(pagesize) {},
    SGCurrentChange: function(currentPage) {},
    // 分页--待审核
    AGSizeChange: function(pagesize) {},
    AGCurrentChange: function(currentPage) {},

    // 请求在售数据
    getSaleGood: function() {
      this.$axios.get("/saleGood", {}).then(res => {
        this.SGlist = res.data.data;
        console.log(this.SGlist);
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
    },

    // 获取待审核数据
    getAuditGood: function() {
      this.$axios.get("/auditList", {}).then(res => {
        console.log(res);
        res.data.data.forEach(val => {
          if (val.level == 1) {
            val.level = "全新闲置";
          } else if (val.level == 2) {
            val.level = "略有瑕疵";
          } else if (val.level == 3) {
            val.level = "九成新";
          } else {
            val.level = "正常新";
          }
        });
        this.AGlist = res.data.data;
      });
    },
    // 查看详情
    lookAGDetail: function(param) {
      this.AGitem = param;
      console.log(this.AGitem);
      this.AGdialog = true;
    },
    AGclose: function(param) {
      this.AGdialog = false;
    },
    // 审核通过
    auditAgree: function(param) {
      this.AGdialog = false;
    },
    // 审核驳回
    auditPass: function(param) {
      this.AGdialog = false;
    }
  },
  beforeMount: function() {
    const user = { name: "李嘉诚" };
    this.user = user;
    this.getUserList();
    this.getSaleGood();
    this.getAuditGood();
  }
};
</script>

<style lang='less' scoped='' type='text/css'>
@import "../css/admin.less";
</style>