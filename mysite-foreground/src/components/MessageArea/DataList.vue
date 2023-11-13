<template>
  <ul class="data-list-container">
    <li v-for="item in list" :key="item.id">
      <Avatar :url="item.avatar" :size="44" />
      <div class="data">
        <div class="nickname">{{ item.nickname }}</div>
        <div class="content">{{ item.content }}</div>
        <div class="time">{{ formatDate(item.createDate, true) }}</div>
      </div>
      <!-- <button>删除评论</button> -->
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar";
import { formatDate } from "@/utils";
export default {
  components: {
    Avatar,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.data-list-container {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  display: flex;
  border-bottom: 1px solid lighten(@gray, 20%);
  padding: 15px 0;
  position: relative;
}

.avatar-container {
  margin-right: 15px;
}

.nickname {
  color: darken(@success, 10%);
  margin-bottom: 10px;
}

.content {
  font-size: 14px;
}

.data {
  flex: 1 1 auto;
  position: relative;
}

// button {
//   margin-left: 15px;
//   flex: 0 0 80px;
//   right: 0;
//   border-radius: 5%;
//   border: none;
//   background: transparent;
//   border-left: 1px solid lighten(@gray, 20%);
// }

.time {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 12px;
  color: @gray;
}
</style>
