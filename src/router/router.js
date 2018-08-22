import Vue from 'vue'
import Router from 'vue-router'
import home from '../component/home/home.vue'
import hot from '../component/hot/hot.vue'
import book from '../component/book/book.vue'
import mine from '../component/mine/mine.vue'

import home_top from '../component/home/home_top.vue'
import hot_trip from '../component/hot/hot_trip.vue'
import hot_eat from '../component/hot/hot_eat.vue'
import hot_buy from '../component/hot/hot_buy.vue'
import book_detail from '../component/book/book_detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/hot',
      name: 'hot',
      component: hot
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/home_top',
      name: 'home_top',
      component: home_top
    },
    {
      path: '/hot_trip',
      name: 'hot_trip',
      component: hot_trip
    },
    {
      path: '/hot_eat',
      name: 'hot_eat',
      component: hot_eat
    },
    {
      path: '/hot_buy',
      name: 'hot_buy',
      component: hot_buy
    },
    {
      path: '/book_detail',
      name: 'book_detail',
      component: book_detail
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
