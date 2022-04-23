import Vue from 'vue'
import Router from 'vue-router'
import SkillsPage from './components/SkillsPage.vue'
import AboutPage from './components/AboutPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skillsPage',
      component: SkillsPage
    },
    {
      path: '/AboutPage/:name',
      name: 'AboutPage',
      component: AboutPage
    }
  ]
})