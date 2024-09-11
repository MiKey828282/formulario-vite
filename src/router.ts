import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Formulario from './components/Formulario.vue';
import Gracias from './components/Gracias.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: Formulario,
  },
  {
    path: '/gracias',
    name: 'Gracias',
    component: Gracias,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
