<template>
  <div id="app" class="container-fuid">
    <Layout :scroll="false" :left="2">
      <template #left>
        <SiteAside></SiteAside>
      </template>
      <router-view></router-view>
      <template>
      </template>
      <template #right>
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import ToTop from "@/components/ToTop";
export default {
  components: {
    Layout,
    SiteAside,
    ToTop
  }
}
</script>

<style lang="less" scoped></style>
