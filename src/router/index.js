import Vue from 'vue'
import Router from 'vue-router'

// 路由组件
import Register from 'views/Register.vue'
import Login from 'views/Login.vue'
import Profile from 'views/Profile.vue'
import Search from 'views/Search.vue'
import Home from 'views/Home.vue'
import Edit from 'views/Edit.vue'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      isShow: true
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      ispublic: true
    }
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShow: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      ispublic: true
    }
  },
  {
    path: '/edit',
    component: Edit,
    meta: {
      isShow: true
    }
  },

]
const router = new Router({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (!to.meta.ispublic&&!localStorage.token) {
    return next('/login')
  }
  next()
})
export default router