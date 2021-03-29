import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'

import Docs from './components/Docs.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory() // 引入路由方式
const router = createRouter({
    history: routerHistory, // 表示接入哪种类型的路由
    routes: [ 
      {
        path:"/",
        component: Home
      }, 
      
        {
          path:"/contact",
          component: Contact
        }, {
          path:"/docs",
          component: Docs
        }
        
        // 定义路由信息
    
    ]
})

const app = createApp(App);
app.use(router);
app.mount('#app')
