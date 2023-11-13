<template>
    <div class="test-container">
        <ImgLoading midImg="https://mlbzdx.oss-cn-chengdu.aliyuncs.com/z%E9%9B%B6%E8%A1%A3.jpg"
            bigImg="https://mlbzdx.oss-cn-chengdu.aliyuncs.com/%E9%9B%B6%E8%A1%A3.jpg"></ImgLoading>
    </div>
</template>

<script>
import ImgLoading from "./"
export default {
    components: {
        ImgLoading,
    }
}
</script>

<style lang="less" scoped>
.test-container {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>