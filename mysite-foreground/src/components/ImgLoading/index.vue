<template>
    <div class="img-loading-container">
        <img class="midImg" v-if="!setTimeEnd" :src="midImg" alt="">
        <img class="bigImg" :src="bigImg" @load="ImgLoadingHandle"
            :style="{ opacity: isOpacity, transition: `${duration}ms` }">
    </div>
</template>

<script>
export default {
    props: {
        midImg: {
            type: String,
            default: 'https://mlbzdx.oss-cn-chengdu.aliyuncs.com/zv.jpg'
        },
        bigImg: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            default: 500
        }
    },
    data() {
        return {
            isLoading: true,
            setTimeEnd: false,
        }
    },
    computed: {
        isOpacity() {
            return this.isLoading ? 0 : 1
        }
    },
    methods: {
        ImgLoadingHandle() {
            this.isLoading = false;
            setTimeout(() => {
                this.setTimeEnd = true;
                this.$emit('load');
            }, this.duration)
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";

.img-loading-container {
    width: 100%;
    height: 100%;
    position: relative;

    .midImg,
    .bigImg {
        .self-fill();
        object-fit: cover;
    }

    .midImg {
        filter: blur(2vw);
    }
}
</style>