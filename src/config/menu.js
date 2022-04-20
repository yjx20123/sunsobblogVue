export const routesLeftMenu = [{
    path: '', name: "首页", icon: "el-icon-s-home", redirect: '/index',

    children: [{
        path: "/index", name: "首页", icon: "el-icon-s-home"
    }, {
        path: "/login", name: "首页", icon: "el-icon-s-home"
    }, {
        path: "/content", children: [{
            path: "post-article",
        }, {
            path: "manage-comment",
        }, {
            path: "manage-image",
        }, {
            path: "manage-artilce",
        }]

    }, {
        path: "/user", children: [{
            path: "email",
        }, {
            path: "info",
        }, {
            path: "list",
        }, {
            path: "restpassword",
        }]
    }, {
        path: "/opertaion", children: [{
            path: "loop",
        }, {
            path: "category",
        }]
    }, {
        path: "/setting", children: [{
            path: "friendlink",
        }, {
            path: "websizeinfo",
        }]
    }]
}

]