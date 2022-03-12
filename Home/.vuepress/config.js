module.exports = {
    title: "欧美斯科技发展集团有限公司",
    head: [
        ["link",
            { rel: "icon", href: "/fav.png" }
        ]
    ],
    themeConfig: {
        search: false,
        smoothScroll: true,
        nav: [
            { text: "首页", link: "/" },
            {
                text: "关于我们",
                items: [
                    { text: '发展历程', link: '/about_us/growup/' },
                    { text: '集团荣誉', link: '/about_us/grouphonor/' }
                ]
            },
            { text: "电商运营服务", link: "/e_commerce/" },
            { text: "分销与贸易业务", link: "/distrbution" },
            { text: "MCN网红经纪", link: "/mcn_celebrity" },
            { text: "欧美斯云仓", link: "/oms_warehouse" },
            { text: "大数据咨询", link: "/bid_data_consult" },
            { text: "欧美斯动态(新闻中心)", link: "/oms_news" },
            { text: "联系我们", link: "/contact_us" }
        ]
    }
}