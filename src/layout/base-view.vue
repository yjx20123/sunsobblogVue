<template>
  <div>
    <el-container>
      <el-header id="admin-header-box"><top-header></top-header></el-header>
      <el-container>
        <el-aside id="left-meun-list-box" width="200px">
          <left-menu></left-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import menu from "@/layout/meun"
import TopHeader from "@/layout/top-header";

export default {
  name: "base-view",
  components: {
    TopHeader,
    menu
  },
  mounted() {
    //动态设置侧边菜单的高度
    let leftMenuBox = document.getElementById('left-meun-list-box');
    let topBox = document.getElementById(`admin-header-box`);
    if (leftMenuBox&&topBox) {
      leftMenuBox.style.height = (window.innerHeight-topBox.offsetHeight) + "px";
    }
  }
}
</script>

<style scoped>
.el-header{
  background-color: #3d7ccb;
  line-height: 46px !important;
  height: 46px !important;
}
#left-meun-list-box .el-menu{
  border-right: none;
}
.el-aside {
  line-height: 200px;
  border-right: solid 1px #c0b8b8;
}
body>#app>div>.el-container {
  margin-bottom: 40px;
  min-height: 100vh;
}


</style>