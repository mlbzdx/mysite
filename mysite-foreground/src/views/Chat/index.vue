<template>
    <Layout :left="0">
        <div class="message-container" ref="messageContainer">
            <MessageArea title="留言板" :subTitle="`(${data.total})`" :isListLoading="isLoading" :list="data.rows"
                @submit="handleSubmit" />

        </div>
    </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
export default {
    components: {
        Layout,
        MessageArea,
    },
    data() {
        return {
            page: 1,
            limit: 10,
        };
    },
    mixins: [fetchData('message', { page: 1, limit: 10 }, { total: 0, rows: [] })],
    created() {
        this.$bus.$on("mainScroll", this.handleScroll);
    },
    destroyed() {
        this.$bus.$off("mainScroll", this.handleScroll);
    },
    computed: {
        hasMore() {
            return this.data.rows.length < this.data.total;
        },
    },
    methods: {
        handleScroll(dom) {
            if (this.isLoading || !dom) {
                // 目前正在加载更多
                return;
            }
            const range = 100; // 顶一个可接受的范围，在这个范围内都算达到了底部
            const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
            if (dec <= range) {
                this.fetchMore();
            }
        },
        // 加载下一页
        async fetchMore() {
            if (!this.hasMore) {
                // 没有更多啦
                return;
            }
            this.isLoading = true;
            this.page++;
            let totalPage = Math.ceil(this.data.total / this.limit);
            if (this.page > totalPage) {
                this.page = totalPage;
                this.isLoading = false;
                return;
            }
            this.limit = this.page * this.limit;
            this.data = await this.$store.dispatch('message/sendRequest', {
                page: 1,
                limit: this.limit
            })
            this.isLoading = false;
        },
        async handleSubmit(data, callback) {
            this.$store.dispatch('message/modRequest', data)
            this.limit = this.page * this.limit;
            this.data = await this.$store.dispatch('message/sendRequest', {
                page: 1,
                limit: this.limit
            })
            callback("感谢您的留言");
        },
    },
};
</script>

<style scoped>
.message-container {
    width: 100%;
    height: 100%;
    padding: 25px 0;
    box-sizing: border-box;
}

.message-area-container {
    width: 700px;
    margin: 0 auto;
}
</style>