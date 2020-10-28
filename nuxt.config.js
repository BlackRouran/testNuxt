module.exports ={
    router: {
        extendRouters(routes, resolve){ // 自定义路由
            routes.push({
                name: 'user/def',
                path: 'user/def',
                component: resolve(__dirname, 'pages/user/abc.vue')
            })
        }
    }
}