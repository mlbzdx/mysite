<template>
    <div class="test-container">
        <Menu></Menu>
    </div>
</template>

<script>
import Menu from "./"
export default {
    components: {
        Menu
    }
}
</script>

<style lang="less" scoped>
.test-container {
    width: 200px;
    margin: 0 auto;
    background: #000;
    color: #fff;
}
</style>