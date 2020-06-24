import Vue from 'vue';
import VueRouter from 'vue-router';
import Window from '@/services/window';

Vue.use(VueRouter);

const MarkdownPageView = () => import(/* webpackChunkName: "markdown-page-view" */ '../views/MarkdownPage');

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/storybook',
    meta: {
      title: '',
    },
  },
  {
    path: '/guide*',
    name: 'GuidePage',
    component: MarkdownPageView,
  },
  {
    path: '/storybook*',
    name: 'StoryBookPage',
    component: MarkdownPageView,
  },
  {
    path: '/framework*',
    name: 'FrameworkPage',
    component: MarkdownPageView,
  },
  {
    path: '/repl',
    name: 'ReplPage',
    component: () => import(/* webpackChunkName: "repl-view" */ '../views/Repl'),
    meta: {
      title: 'REPL',
    },
  },
  {
    path: '/reference/elements/:tag',
    name: 'ElementPage',
    component: () => import(/* webpackChunkName: "element-view" */ '../views/Element'),
  },
  {
    path: '/reference/attributes/:attr',
    name: 'AttributePage',
    component: () => import(/* webpackChunkName: "attribute-view" */ '../views/Attribute'),
  },
  {
    path: '/reference/*',
    name: 'MarkdownPage',
    component: MarkdownPageView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  /* eslint-disable-next-line */
  if (to.meta.title != null) {
    Window.setTitle(to.meta.title);
  }

  document.documentElement.scrollTop = 0;

  setTimeout(() => {
    const navItem = document.querySelector('#subnav nu-link[theme="special"]');

    if (navItem) {
      Window.setTitle(navItem.innerText);
      navItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 100);
});

export default router;
