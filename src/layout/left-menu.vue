<template>
  <div>
    <el-menu
        default-active="0"
        unique-opened="true"
        class="el-menu-vertical">
      <template v-for="(item,index) in menulist">
        <router-link :to="item.path" v-if="!item.children&&!item.hidden" :key="index">
          <el-menu-item :index="index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </router-link>

        <el-submenu v-if="item.children&&!item.hidden" :key="index" :index="index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </template>
          <router-link :to="item.path+'/'+subItem.path" v-for="(subItem,subIndex) in item.children">
            <el-menu-item :index="index+'-'+subIndex" :key="subIndex" v-if="!subItem.hidden">
              <i :class="subItem.icon"></i>
              <span slot="title" v-text="subItem.name"></span>
            </el-menu-item>
          </router-link>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import routes from "@/router/routes";

const menulist = routes.options.routes
export default {
  name: "left-menu",

  data: () => {
    return {
      menulist: routes.options.routes[1].children
    }
  },
  mounted() {
  }

}
</script>

<style scoped>
.el-menu-vertical a {
  text-decoration: none;
}
</style>