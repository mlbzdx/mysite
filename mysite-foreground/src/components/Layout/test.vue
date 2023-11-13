<template>
    <div class="test-container">
        <Layout :right="150">
            <template #left>
                <div class="left-test"></div>
            </template>
            <template>
                <div class="center-test">1</div>
                <div class="center-test">2</div>
            </template>
            <template #right>
                <div class="right-test">1</div>
                <div class="right-test">2</div>
                <div class="right-test">3</div>
                <div class="right-test">4</div>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from "./"
export default {
    components: {
        Layout
    }
}
</script>

<style lang="less" scoped>
// 在测试时在浏览器将body设置overflow:hidden,使用vue serve指令运行的组件不能运用全局样式。

.test-container {

    .left-test {
        width: 100%;
        height: 100%;
        background: red;
    }

    .center-test {
        width: 100%;
        height: 900px;
        background: lightblue;
    }

    .right-test {
        width: 100%;
        height: 500px;
    }
}
</style>