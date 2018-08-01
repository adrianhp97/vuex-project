import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'disabled active',
  routes: [
    {
      path: '',
      redirect: '/user',
      name: 'home'
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/components/Users/Index')
    },
    {
      path: '/user/:uid',
      name: 'user.detail',
      component: () => import('@/components/Users/Detail')
    },
    {
      path: '/user/:uid/album',
      name: 'album',
      component: () => import('@/components/Albums/Index')
    },
    {
      path: '/user/:uid/album/:id',
      name: 'album.detail',
      component: () => import('@/components/Albums/Detail')
    },
    {
      path: '/user/:uid/album/:id/photo/:pid',
      name: 'photos.detail',
      component: () => import('@/components/Photos/Detail')
    },
    {
      path: '/user/:uid/post',
      name: 'post',
      component: () => import('@/components/Posts/Index')
    },
    {
      path: '/user/:uid/post/:id',
      name: 'post.detail',
      component: () => import('@/components/Posts/Detail')
    },
    {
      path: '/user/:uid/post/create',
      name: 'post.create',
      component: () => import('@/components/Posts/Form')
    },
    {
      path: '/user/:uid/post/:id/edit',
      name: 'post.edit',
      component: () => import('@/components/Posts/Form')
    },
    {
      path: '*',
      component: () => import('@/components/Users/Index')
    }
  ]
})
