import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Signup from '../views/SignupForm.vue'
import WeaponStore from '../views/WeaponStore.vue'
import GearStore from '../views/GearStore.vue'
import AttachmentStore from '../views/AttachmentStore.vue'
import Weapon from '../views/Weapon.vue'
import AddArticle from '../views/AddArticle.vue'
import EditArticle from '../views/EditArticle.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import { AuthenticationGuard } from "vue-auth0-plugin";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/secure',
    component: () => import(/* webpackChunkName: "secure" */ '@/views/Secure.vue'),
    beforeEnter: [AuthenticationGuard],
  }, 

  {
    path: '/weapon/detail/:id',
    name: 'ArticleDetail',
    component: ArticleDetail
  },
  {
    path: '/editarticle',
    name: 'EditArticle',
    component: EditArticle
  },
  {
    path: '/weapon',
    name: 'Weapon',
    component: Weapon
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/sign-up',
    name: 'SignupForm',
    component: Signup
  },
  {
    path: '/weaponstore',
    name: 'Weaponstore',
    component: WeaponStore
  },
  {
    path: '/gearstore',
    name: 'Gear',
    component: GearStore
  },
  {
    path: '/attachmentstore',
    name: 'Attachment',
    component: AttachmentStore
  },
  {
    path: '/addarticle',
    name: 'Article',
    component: AddArticle
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

