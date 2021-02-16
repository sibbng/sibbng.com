import { createApp } from 'vue'
import 'windi.css'
import './assets/main.css'
import './theme.js'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { themewindVue } from './theme.js'

let app = createApp(App)
let router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes,
})

if (import.meta.hot) {
  let removeRoutes = []

  for (let route of routes) {
    removeRoutes.push(router.addRoute(route))
  }

  import.meta.hot.accept('./routes.js', ({ routes }) => {
    for (let removeRoute of removeRoutes) removeRoute()
    removeRoutes = []
    for (let route of routes) {
      removeRoutes.push(router.addRoute(route))
    }
    router.replace('')
  })
}

app.use(router)
app.use(themewindVue)

router.beforeEach(to => {
  document.documentElement.getElementsByTagName("title")[0].innerText = `${to.path !== "/" ? "sibbng" : ""} ${to.meta.title}`
})

app.mount('#app')