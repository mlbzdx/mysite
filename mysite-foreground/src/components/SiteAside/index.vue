<template>
    <div class="site-aside-container">
        <Avatar :src="data.avatar"></Avatar>
        <h2 class="title">{{ this.data.siteTitle }}</h2>
        <Menu></Menu>
        <Contact></Contact>
        <p class="footer">{{ this.data.icp }}</p>
    </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import { mapState } from "vuex";
export default {
    components: {
        Menu,
        Contact,
        Avatar
    },
    computed: {
        ...mapState('setting', ['data']),
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.site-aside-container {
    width: 100%;
    height: 100%;
    background: @dark;
    padding: 20px 0;
    color: #fff;
    background: @dark;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
    white-space: nowrap;

    .title {
        font-size: 1.5em;
        color: #fff;
        text-align: center;
    }

    .footer {
        text-align: center;
        font-size: 12px;
    }
}
</style>
