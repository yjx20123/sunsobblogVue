<template>
  <div>
    <el-container>
      <el-header id="admin-header-box">顶部</el-header>
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

export default {
  name: "base-view",
  components: {
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
.el-header, .el-footer {
  background-color: #3d7ccb;
  color: #333;
  text-align: center;
  line-height: 46px !important;
  height: 46px !important;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body>#app>div>.el-container {
  margin-bottom: 40px;
  min-height: 100vh;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>