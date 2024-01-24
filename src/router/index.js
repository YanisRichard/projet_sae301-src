import { createRouter, createWebHistory } from 'vue-router'
import HomeView from            '../views/HomeView.vue'
import SetupView from           '../views/SetupView.vue'
import GeolocView from          '../views/GeolocView.vue'
import ServiceView from         '../views/ServiceView.vue'
import ComponentView from       '../views/ComponentView.vue'
import PocketBase01View from       '../views/PocketBase01View.vue'
import PocketBase02View from       '../views/PocketBase02View.vue'
import AccueilView from             '../views/AccueilView.vue'
import LoginView from             '../views/LoginView.vue'
import UserView from             '../views/UserView.vue'
import PanierView from             '../views/PanierView.vue'
import FooterView from            '../views/FooterView.vue'

// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketBase
const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',              name: 'HomeView',           component: HomeView },
    { path: '/setup',         name: 'SetupView',          component: SetupView },
    { path: '/geoloc',        name: 'GeolocView',         component: GeolocView },
    { path: '/service',       name: 'ServiceView',        component: ServiceView },
    { path: '/composant',     name: 'ComponentView',      component: ComponentView },
    { path: '/pocketbase01',  name: 'PocketBase01View',   component: PocketBase01View },
    { path: '/pocketbase02',  name: 'PocketBase02View',   component: PocketBase02View },
    { path: '/accueil',  name: 'AccueilView',   component: AccueilView }, 
    { path: '/login',  name: 'LoginView',   component: LoginView },
    { path: '/user',  name: 'UserView',   component: UserView },
    { path: '/panier',  name: 'PanierView',   component: PanierView },
    
  ]
})

// Vérification de route demandée
// to : où il veut aller
// from : d'où il vient 
// next : s'il peut y aller
router.beforeEach( (to, from, next) =>{
  if(to.name == "HomeView"){ // Si page d'accueil demandée, on autorise
    next()
  }else{  // Si une autre route est demandée, on vérifie si l'utilisateur est connecté        
    if(pb.authStore.model != null){ // Utilisateur connecté => OK
      next()
    }else{ // Utilisateur non connecté, redirection sur la page d'acceuil
      router.push({name:"HomeView"})
    }
  }
})

export default router
