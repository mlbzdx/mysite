<template>
    <div class="blog-list-container" ref="mainContainer" v-loading="isLoading">
        <ul>
            <li class="row" v-for="item in data.rows" :key="item.id">
                <div class="thumb col-4" v-if="item.thumb">
                    <RouterLink :to="{
                        name: 'BlogDetail',
                        params: {
                            id: item.id,
                        },
                    }">
                        <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
                    </RouterLink>
                </div>
                <div class="main col-8">
                    <RouterLink :to="{
                        name: 'BlogDetail',
                        params: {
                            id: item.id,
                        },
                    }">
                        <h2>{{ item.title }}</h2>
                    </RouterLink>
                    <div class="aside">
                        <span>日期：{{ formatDate(item.createDate) }}</span>
                        <span>浏览：{{ item.scanNumber }}</span>
                        <span>评论：{{ item.commentNumber }}</span>
                        <RouterLink :to="{
                            name: 'CategoryBlog',
                            params: {
                                categoryId: item.category ? item.category.id : -1
                            },
                        }">
                            {{ item.category ? item.category.name : '未分类' }}
                        </RouterLink>
                    </div>
                    <div class="desc">
                        {{ item.description }}
                    </div>
                </div>
            </li>
        </ul>
        <Empty v-if="!data.rows.length && !isLoading" />
        <!-- 分页放到这里 -->
        <Pager v-if="pageVisible" :current="routeInfo.page" :total="data.total" :limit="routeInfo.limit" :visibleNumber="10"
            @pageChange="handlePageChange" />
    </div>
</template>

<script>
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData.js";
import { formatDate } from "@/utils";
import Empty from "@/components/Empty";
export default {
    mixins: [fetchData('blogs', {
        page: 1,
        limit: 10,
        categoryId: -1,
    }, { total: 0, rows: [] })],
    components: {
        Empty,
        Pager
    },
    computed: {
        // 获取路由信息
        routeInfo() {
            const categoryId = this.$route.params.categoryId || -1;
            const page = +this.$route.query.page || 1;
            const limit = +this.$route.query.limit || 10;
            return {
                page,
                limit,
                categoryId,
            };
        },
        pageVisible() {
            return this.routeInfo.categoryId === -1 && this.data.total;
        },
    },
    methods: {
        formatDate,
        handlePageChange(newPage) {
            const query = {
                page: newPage,
                limit: this.routeInfo.limit,
            };
            // 跳转到 当前的分类id  当前的页容量  newPage的页码
            if (this.routeInfo.categoryId === -1) {
                // 当前没有分类
                // /article?page=${newPage}&limit=${this.routeInfo.limit}
                this.$router.push({
                    name: "Blog",
                    query,
                });
            } else {
                // /article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
                this.$router.push({
                    name: "CategoryBlog",
                    query,
                    params: {
                        categoryId: this.routeInfo.categoryId,
                    },
                });
            }
        },
    },
    watch: {
        async $route() {
            this.isLoading = true;
            // 滚动高度为0
            // this.$refs.mainContainer.scrollTop = 0;
            // 当分类id为-1时，分页获取全部文章
            // 当分类id不为-1时，发送全部的请求，判断id值，得出符合要求的数组。
            if (this.routeInfo.categoryId === -1) {
                this.data = await this.$store.dispatch('blogs/sendRequest', this.routeInfo);
                this.isLoading = false;
                return;
            }
            this.data = await this.$store.dispatch('blogs/sendDataType', {
                page: 1,
                limit: this.data.total,
                categoryId: this.routeInfo.categoryId
            })
            this.isLoading = false;
        },
    },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.blog-list-container {
    line-height: 1.7;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 20px;

}

li {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid @gray;

    .thumb {
        flex: 0 0 auto;
        margin-right: 15px;

        img {
            display: block;
            max-width: 200px;
            border-radius: 5px;
        }
    }

    .main {
        flex: 1 1 auto;

        h2 {
            margin: 0;
        }
    }

    .aside {
        font-size: 12px;
        color: @gray;

        span {
            margin-right: 15px;
        }
    }

    .desc {
        margin: 15px 0;
        font-size: 14px;
    }
}
</style>
