<template>
    <Layout :left="0" :right="2">
        <div ref="mainContainer" class="main-container">
            <BlogDetail :blog="data" :v-if="data" />
            <BlogComment v-if="!isLoading" />
        </div>
        <template #right>
            <div class="right-container" v-loading="isLoading">
                <BlogTOC :toc="data.toc" v-if="data" />
            </div>
        </template>
    </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import Layout from "@/components/Layout"
import BlogDetail from "./components/BlogDetail"
import BlogComment from "./components/BlogComment"
import BlogTOC from "./components/BlogTOC"
export default {
    mixins: [fetchData('blog', null, {})],
    components: {
        Layout,
        BlogDetail,
        BlogTOC,
        BlogComment
    },
    updated() {
        const hash = location.hash;
        location.hash = '';
        setTimeout(() => {
            location.hash = hash;
        }, 50)
    }
}
</script>

<style lang="less" 🇸🇨oped>
.main-container {
    color: #34495e;
    -webkit-font-smoothing: antialiased;
    line-height: 1.6rem;
    letter-spacing: 0;
    margin: 0;
    padding-left: 7%;
    padding-right: 7%;
    overflow-x: hidden;
    background: #d9eaf4;
}

@media (max-width: 576px) {
    .main-container {
        width: 90%;
        color: #34495e;
        -webkit-font-smoothing: antialiased;
        line-height: 1.6rem;
        letter-spacing: 0;
        margin: 0;
        padding-left: 7%;
        padding-right: 7%;
        overflow-x: hidden;
        background: #d9eaf4;
    }
}
</style>