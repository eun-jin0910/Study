import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from "./views/index.vue";
Vue.use(VueRouter)

const DEFAULT_TITLE = "정보처리기사";
const routes = [
  {
    path: '/',
    name: '홈',
    component: IndexPage
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

router.afterEach((to) => {
  document.title = (to.meta.title ? to.meta.title + " | " : "") + DEFAULT_TITLE;
});

export default router
