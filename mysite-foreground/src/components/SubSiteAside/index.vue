<template>
    <ul v-if="this.isOpen"
        class="sub-site-aside d-flex flex-column align-items-center justify-content-around bg-dark text-light">
        <li @click="handleToggleSide">
            <Icon type="extend"></Icon>
        </li>
        <li v-for="(item, i) in data" :key="i">
            <router-link :to="{
                name: item.name
            }" :exact="item.exact" active-class="selected">
                <Icon :type="item.type"></Icon>
            </router-link>
        </li>
    </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    components: {
        Icon,
    },
    data() {
        return {
            data: [
                { type: "home", name: "Home", txt: "首页", exact: true },
                { type: "blog", name: "Blog", txt: "文章", exact: false },
                { type: "about", name: "About", txt: "关于我", exact: true },
                { type: "code", name: "Project", txt: "项目&效果", exact: true },
                { type: "chat", name: "Chat", txt: "留言", exact: true },
            ],
            isOpen: true
        }
    },
    methods: {
        handleToggleSide() {
            this.isOpen = false;
            this.$bus.$emit("toggleSide", this.isOpen);
        },
        toggleSubSide() {
            this.isOpen = true;
        }
    },
    created() {
        this.$bus.$on("toggleSubSide", this.toggleSubSide);
    },
    destroyed() {
        this.$bus.$off("toggleSubSide", this.toggleSubSide);
    },
}
</script>

<style lang="less" scoped>
.sub-site-aside {
    padding: 20px 0;
    height: 100%;
}
</style>