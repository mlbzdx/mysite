<template>
    <i class="iconfont" :class="icon" :style="{
        'font-size': `${size}rem`
    }"></i>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 1.3
        }
    },
    computed: {
        icon() {
            let icons = {
                chat: "icon-liuyan",
                empty: "icon-xiaoxihezi-kong",
                arrowDown: "icon-xiangxia",
                arrowUp: "icon-xiangshang",
                weixin: "icon-weixin",
                mail: "icon-youxiang",
                github: "icon-github",
                qq: "icon-qq",
                blog: "icon-wodewenzhang",
                code: "icon-daima",
                about: "icon-guanyu",
                info: "icon-info",
                warn: "icon-jinggao",
                home: "icon-shouye",
                success: 'icon-duigouxiao',
                close: "icon-cha",
                error: "icon-cuowu",
                extend: "icon-zhankai"
            }
            return icons[this.type]
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/assets/Icon/iconfont.css";

.iconfont {
    color: inherit;
    font-size: inherit;
}
</style>