<template>
    <div class="avatar-container">
        <img :src="src" :style="{
            width: `${size}px`,
            height: `${size}px`
        }">
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            default: 'https://mlbzdx.oss-cn-chengdu.aliyuncs.com/Avatar.jpg'
        },
        size: {
            type: Number,
            default: 200
        },
    }
}
</script>

<style lang="less" scoped>
.avatar-container {
    text-align: center;
    margin-bottom: 2rem;

    img {
        border-radius: 50%;
        object-fit: cover;
    }
}
</style>