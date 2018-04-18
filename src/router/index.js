import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import XInput from '@/components/XInput'
import PopHead from '@/components/pop/PopHead'
import Home from '@/components/Home/Home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/xinput',
      name: 'XInput',
      component: XInput
    },
    {
      path: '/pophead',
      name: 'PopHead',
      component: PopHead
    }
  ]
})
