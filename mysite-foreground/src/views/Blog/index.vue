<template>
    <Layout :left="0" :right="2">
        <template>
            <BlogList></BlogList>
        </template>
        <template #right>
            <BlogCategory></BlogCategory>
        </template>
    </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from './components/BlogList';
import BlogCategory from './components/BlogCategory';
export default {
    components: {
        Layout,
        BlogList,
        BlogCategory,
    }
}
</script>

<style scoped></style>