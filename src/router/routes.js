import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
//导入的内容
const home = () => import("@/components/home");
const article = () => import("@/components/article")
const layout = () => import("@/layout/layout.vue")
//登录页面
const login = () => import("@/page/login/login")
//内容部分
const postArticle = () => import("@/page/content/post-article.vue")
const articleManage = () => import("@/page/content/manage-article.vue")
const imageManage = () => import("@/page/content/manage-image.vue")
const commentMange = () => import("@/page/content/manage-comment.vue")
//首页
const index = () => import("@/page/dashboard/index.vue")
//运营
const loop = () => import("@/page/opertaion/loop.vue")
const categoryManage = () => import("@/page/opertaion/manage- category.vue")
//设置
const friendLink = () => import("@/page/setting/friend-link")
const websizeinfo = () => import("@/page/setting/websize-info")
//用户
const email = () => import("@/page/user/email")
const info = () => import("@/page/user/info")
const list = () => import("@/page/user/list")
const restpassword = () => import("@/page/user/rest-password")
//布局
const baseView = () => import("@/layout/base-view")
const rightView = () => import("@/layout/right-content")
const topHeader = () => import("@/layout/top-header")
const routes = [
    {
        path: "/login", component: login
    },
    {
    path: '', component: baseView, redirect: '/index',

    children: [{
        path: "/index",hidden:false, name: "首页", icon: "el-icon-s-home", component: index
    }, {
        path: "/content",hidden:false,name: "运营", icon: "el-icon-goods", component: rightView, children: [{
            path: "post-article",hidden:false,name: "添加文章", icon: "el-icon-notebook-2",  component: postArticle
        }, {
            path: "manage-comment",hidden:false,name: "评论管理", icon: "el-icon-s-comment",  component: commentMange
        }, {
            path: "manage-image",hidden:false,name: "图片管理", icon: "el-icon-picture-outline",  component: imageManage
        }, {
            path: "manage-artilce",hidden:false,name: "文章管理", icon: "el-icon-pie-chart",  component: articleManage
        }]

    }, {
        path: "/user",hidden:false,name: "用户", icon: "el-icon-user-solid", component: rightView, children: [{
            path: "email",hidden:false,name: "邮箱", icon: "el-icon-folder-remove", component: email
        }, {
            path: "info",hidden:false,name: "用户信息", icon: "el-icon-user", component: info
        }, {
            path: "list",hidden:false,name: "用户列表", icon: "el-icon-user", component: list
        }, {
            path: "restpassword",hidden:false,name: "重置密码", icon: "el-icon-bell", component: restpassword
        }]
    }, {
        path: "/opertaion",hidden:false,name: "管理", icon: "el-icon-s-platform", component: rightView, children: [{
            path: "loop",hidden:false,name: "轮播图", icon: "el-icon-picture-outline-round", component: loop
        }, {
            path: "category",hidden:false,name: "分类", icon: "el-icon-s-management", component: categoryManage
        }]
    }, {
        path: "/setting",hidden:false,name: "设置", icon: "el-icon-s-tools", component: rightView, children: [{
            path: "friendlink",hidden:false,name: "友情链接", icon: "el-icon-service", component: friendLink
        }, {
            path: "websizeinfo",hidden:false,name: "站点信息", icon: "el-icon-map-location", component: websizeinfo
        }]
    }]
}

]


const router = new VueRouter({
    routes: [...routes]
});

export default router