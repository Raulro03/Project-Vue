import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView,
    },*/
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../modules/contador/component/Contador.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'ListaDeTareas',
      component: () => import('../modules/listaDeTareas/component/ListaDeTareas.vue'),
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: () => import('../modules/registro/views/RegistroView.vue'),
    },
    {
      path: '/calcular',
      name: 'calcular',
      component: () => import('../modules/calcular/views/CalcularView.vue'),
    },
  ],
})

export default router
