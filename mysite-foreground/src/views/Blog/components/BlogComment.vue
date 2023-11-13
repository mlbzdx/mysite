<template>
  <div class="blog-comment-container">
    评论
    <MessageArea title="评论列表" :subTitle="`(${data.total})`" :list="data.rows" :isListLoading="isLoading"
      @submit="handleSubmit" />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
export default {
  mixins: [fetchData('comment', { page: 1, limit: 10 }, { total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
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
      this.data = await this.$store.dispatch('comment/sendRequest', {
        id: this.$route.params.id,
        page: 1,
        limit: this.limit
      })
      this.isLoading = false;
    },
    async handleSubmit(formData, callback) {
      this.$store.dispatch('comment/modRequest', {
        blogId: this.$route.params.id,
        ...formData
      })
      this.limit = this.page * this.limit;
      this.data = await this.$store.dispatch('comment/sendRequest', {
        id: this.$route.params.id,
        page: 1,
        limit: this.limit
      })
      callback("评论成功"); // 告诉子组件，我这边处理完了，你继续
    },
  },
};
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}

/* 媒体查询 */
@media (max-width: 576px) {
  .blog-comment-container {
    font-size: 0.45rem;
    line-height: 0.8rem;
  }

  /*标题*/
  h1 {
    margin: 1.2rem 0 1rem;
    padding: 0px;
    font-weight: bold;
    color: black;
    font-size: 1rem;
  }

  h2 {
    margin: 1rem 0 1rem;
    font-weight: bold;
    color: black;
    font-size: 0.9rem;
    padding-left: 0.3rem;
    border-left: 0.2rem solid var(--title-color);
    border-bottom: 0.1rem solid var(--title-color);
    position: relative;
  }

  h2::after {
    display: inline-block;
    content: "";
    vertical-align: bottom;
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom: 0.5rem solid var(--title-color);
    border-right: 0.5rem solid transparent;
  }

  h3,
  h4,
  h5,
  h6 {
    margin: 0.5rem 0 1rem;
    padding: 0px;
    font-weight: bold;
    color: black;
  }

  .aside span,
  a {
    font-size: 0.35rem;
  }
}</style>
