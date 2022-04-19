import VueRouter from "vue-router";
import Vue from "vue";
import Info from "@/page/user/info";

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
const routes = [{
    path: '', component: baseView, redirect: '/index', children: [{
        path: "/index", component: index
    }, {
        path: "/content", component: rightView, children: [{
            path: "post-article", component: postArticle
        }, {
            path: "manage-comment", component: commentMange
        }, {
            path: "manage-image", component: imageManage
        }, {
            path: "manage-artilce", component: articleManage
        }]
    }, {
        path: "/user",
        component: rightView,
        children: [{
            path: "email",
            component: email
        }, {
            path: "info",
            component: info
        }, {
            path: "list",
            component: list
        },
            {
                path: "restpassword",
                component: restpassword
            }
        ]
    }, {
        path: "/opertaion",
        component: rightView,
        children: [{
            path: "loop",
            component: loop
        }, {
            path: "category",
            component: categoryManage
        }
        ]
    }, {
        path: "/setting",
        component: rightView,
        children: [{
            path: "friendlink",
            component: friendLink
        }, {
            path: "websizeinfo",
            component: websizeinfo
        }
        ]
    }]
}

]
const router = new VueRouter({
    routes: [...routes]
});

export default router