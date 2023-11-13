<template>
    <ul class="menu-container">
        <li v-for="(item, i) in data" :key="i">
            <router-link :to="{
                name: item.name
            }" :exact="item.exact" active-class="selected">
                <Icon :type="item.type"></Icon>
                <span>{{ item.txt }}</span>
            </router-link>
        </li>
    </ul>
</template>

<script>
import Icon from "@/components/Icon"
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
            ]
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.menu-container {
    width: 100%;
    margin: 0;
    padding: 0;
    margin-top: 15px;

    li {
        width: 100%;
        height: 40px;
        font-size: 1rem;
        list-style: none;
        line-height: 40px;

        a {
            width: 100%;
            display: block;
            padding-left: 30%;

            &.selected {
                background: darken(@words, 3%);
            }

            span {
                margin-left: 20px;
            }
        }

    }
}
</style>