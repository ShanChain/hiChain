import Vue from 'vue'
import Router from 'vue-router'
import HiChain from '@/views/HiChain'
import Write from '@/views/Write'
import Picture from '@/views/Picture'
import Listen from '@/views/Listen'
import Video from '@/views/Video'
import AboutUs from '@/views/AboutUs'
import ContactUs from '@/views/ContactUs'
import JoinUs from '@/views/JoinUs'
import LoginReg from '@/components/LoginReg'
import Tab from '@/components/Tab'
import IndexContent from '@/components/IndexContent'
Vue.use(Router)


export default new Router({
  base: '/hot/',
  routes: [
    {
      path: '/',
      name: 'HiChain',
      component: HiChain
    },
    {
      path: '/write',
      name: 'Write',
      component: Write
    },
    {
      path: '/picture',
      name: 'Picture',
      component: Picture
    },
    {
      path: '/listen',
      name: 'Listen',
      component: Listen
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contactus',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/joinus',
      name: 'JoinUs',
      component: JoinUs
    },
    {
      path: '/loginreg',
      name: 'LoginReg',
      component: LoginReg
    },
    {
      path: '/tab',
      name: 'Tab',
      component: Tab
    },
    {
      path: '/indexContent',
      name: 'IndexContent',
      component: IndexContent
    },
  ]
})
