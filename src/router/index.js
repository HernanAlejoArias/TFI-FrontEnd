import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import WaitingRoom from '../views/WaitingRoom.vue';
import NewAppointment from '../views/NewAppointment.vue';
import MyAppointments from '../views/MyAppointments.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/waiting-room',
    name: 'WaitingRoom',
    component: WaitingRoom
  },
  {
    path: '/new-appointment',
    name: 'NewAppointment',
    component: NewAppointment
  },  
  {
    path: '/my-appointments',
    name: 'MyAppointments',
    component: MyAppointments
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
