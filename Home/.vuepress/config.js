const axios = require("axios")
const baseUrl = 'http://localhost:8088'
const queryString = require("querystring")
module.exports = {
    title: "欧美斯科技发展集团有限公司",
    head: [
        ["link",
            { rel: "icon", href: "/fav.png" }
        ],
        // ["script",
        //     { charset: "utf-8", src: "https://unpkg.com/vue-amap@0.5.10/dist/index.js" }
        // ]
    ],
    themeConfig: {
        search: false,
        smoothScroll: true,
        nav: [
            { text: "首页", link: "/" },
            {
                text: "关于我们",
                items: [
                    { text: '集团简介', link: '/group/instruction' },
                    { text: '分支机构', link: '/group/branch' },
                    { text: '发展历程', link: '/group/devolp' },
                    { text: '集团产业分布', link: '/group/distrubution' },
                    { text: '集团荣耀', link: '/group/honor' },
                    { text: '企业文化', link: '/group/company_feature' },
                ]
            },
            {
                text: "电商运营服务",
                items: [
                    { text: '电商运营服务介绍', link: '/e_commerce/instruction' },
                    { text: '专业运营团队', link: '/e_commerce/office' },
                    { text: '客服顾问团队', link: '/e_commerce/custome' },
                    { text: '品牌合作', link: '/e_commerce/brand' },
                    { text: '店铺矩阵', link: '/e_commerce/store' },
                ]
            },
            {
                text: "分销与贸易业务",
                items: [
                    { text: '分销体系', link: "/distrbution/contructor" },
                    { text: '分销生态', link: "/distrbution/env" }
                ]
            },
            { text: "MCN网红经纪", link: "/mcn_celebrity" },
            { text: "欧美斯云仓", link: "/oms_warehouse" },
            { text: "大数据咨询", link: "/bid_data_consult" },
            { text: "欧美斯动态（新闻中心）", link: "/oms_news" },
            {
                text: "联系我们",
                link: "/contact_us/index"
            }
        ]
    }
}