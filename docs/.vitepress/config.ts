import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'NESTJS',
    description: 'nestjs学习笔记',
    base: '/NESTJS',
    // 是否忽略死链
    ignoreDeadLinks: true,
    // 最后更新于 开关
    lastUpdated: true,
    // markdown配置
    markdown: {
        lineNumbers: true,
        container: {
            tipLabel: '提示',
            warningLabel: '警告',
            dangerLabel: '危险',
            infoLabel: '信息',
            detailsLabel: '详细信息',
        },
    },
    themeConfig: {
        lastUpdated: {
            text: '最近更新时间',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium',
            },
        },
        darkModeSwitchLabel: '主题',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        // 显示层级
        outline: { level: 'deep', label: '当前页' },
        siteTitle: 'Home',
        // 上一页下一页文本
        docFooter: { prev: '上一篇', next: '下一篇' },
        // 每个页面页脚的编辑此页  :path  为当前路由
        editLink: {
            text: '在GitHub上编辑此页',
            pattern: 'https://github.com/raopan2021/blog/edit/main/docs/:path',
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright:
                'Copyright © 2018-present raopan 饶盼 base on VitePress ',
        },

        nav: [
            { text: '首页', link: '/' },
            { text: '介绍', link: '/modules/index', activeMatch: '/modules/' },
        ],

        sidebar: {
            '/modules/': {
                base: '/modules/',
                items: [
                    {
                        text: '介绍',
                        link: 'index',
                        base: '/modules/',
                        items: [
                            { text: '介绍', link: 'index' },
                            { text: 'nest脚手架', link: 'cli' },
                            { text: 'restful风格', link: 'restful' },
                            {
                                text: 'restful版本控制',
                                link: 'restful-version',
                            },
                            { text: 'controller控制器', link: 'controller' },
                            { text: 'providers', link: 'providers' },
                            { text: 'module', link: 'module' },
                            { text: 'svg-captcha验证码', link: 'svg-captcha' },
                            { text: 'session', link: 'session' },
                            { text: '图片上传下载', link: 'upload-pic' },
                            { text: 'swagger文档', link: 'swagger' },
                            {
                                text: 'apifox导入swagger',
                                link: 'apifox导入swagger',
                            },
                            { text: '连接mysql', link: 'mysql' },
                            { text: 'Entity实体', link: 'Entity' },
                            { text: 'CRUD', link: 'CRUD' },
                        ],
                    },
                ],
            },
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/raopan2021/RAOPANCLI' },
        ],
    },
});
