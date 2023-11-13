import NotFound from "@/views/NotFound.vue";
export default [
  {
    name: "Home",
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home"),
    meta: {
      title: "首页",
    },
  },
  {
    name: "Blog",
    path: "/article",
    component: () => import(/* webpackChunkName: "blog" */ "@/views/Blog"),
    meta: {
      title: "文章",
    },
  },
  {
    name: "About",
    path: "/about",
    component: () => import(/* webpackChunkName: "about" */ "@/views/About"),
    meta: {
      title: "关于我",
    },
  },
  {
    name: "Project",
    path: "/project",
    component: () =>
      import(/* webpackChunkName: "project" */ "@/views/Project"),
    meta: {
      title: "项目&效果",
    },
  },
  {
    name: "Chat",
    path: "/chat",
    component: () => import(/* webpackChunkName: "message" */ "@/views/Chat"),
    meta: {
      title: "留言板",
    },
  },
  {
    name: "CategoryBlog",
    path: "/article/cate/:categoryId",
    component: () => import(/* webpackChunkName: "blog" */ "@/views/Blog"),
    meta: {
      title: "文章",
    },
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: () =>
      import(/* webpackChunkName: "blogdetail" */ "@/views/Blog/Detail"),
    meta: {
      title: "文章详情",
    },
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound,
  },
];
