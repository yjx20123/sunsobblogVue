<template>
 <div>
   <el-container>
     <el-header style="background: aliceblue">Header</el-header>
     <el-container>
       <el-aside width="200px" style="background:cornflowerblue"><menus></menus></el-aside>
       <el-main style="background: antiquewhite">
         <router-view></router-view>
       </el-main>
     </el-container>
   </el-container>
 </div>
</template>

<script>
import menus from '@/layout/meun';
export default {
  name: "layout",
  components:{
    menus
  }
}
</script>

<style  scoped>

</style>