// 公共的远程获取数据的代码
// 具体的组件中，需要提供远程仓库名（必传）,以及要发生的请求数据（可传）
export default function (store, payload, dataType = []) {
  return {
    data() {
      return {
        data: dataType,
        isLoading: true,
      };
    },
    async created() {
      this.data = await this.$store.dispatch(`${store}/sendRequest`, payload);
      this.isLoading = false;
    },
  };
}
