<script setup>
  // Import éléments de vue
  import { ref, onMounted } from 'vue';
  // Import éléments de routage
  import { useRouter } from 'vue-router';
  const router = useRouter()

  // Import pocketbase
  import PocketBase from 'pocketbase'
  // Objet pocketBase
  const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE);

  
  // user connecté ? au départ faux
  let isConnected = ref(false)

  // Element de connexion
  let user = ref('')
  let psw = ref('')

  // User connecté
  let currentUser = ref(null)
  let avatar = ref(null)

// Au montage du composant
onMounted(async() => {
  // Vérifier que le user est déjà connecté
  refresh()

})

const refresh = ()=>{
  if(pb.authStore.isValid){
    currentUser.value = pb.authStore.model
    isConnected.value = true
    
    avatar.value =
      "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
      +currentUser.value.collectionId     // Id ou name de la collection concernée
      +"/"
      +currentUser.value.id               // Id de l'utilisateur connecté
      +"/"
      +currentUser.value.avatar           // Nom fichier image pocketbase
      +"?thumb=100x100"                   // Taille par défaut     

//      console.log("image avatar utilisateur", avatar)
  }
}

const connect = async()=>{
  try{
    const authData = await pb.collection('users')
    .authWithPassword(user.value, psw.value)
//    console.log("connecté : ",authData)
    refresh()    
  }catch(error){
//    console.log("erreur de connexion : ",error.message)
    alert("Erreur d'identification : mauvais login et/ou mot de passe")
    user.value = ""
    psw.value = ""
  }
}

const deconnect = ()=>{
  // Suppression utilisateur connecté
  pb.authStore.clear()
  isConnected.value=false
  avatar.value = null
  // Retour à la page d'accueil -> Redirection
  router.push({name:"HomeView"})
}
</script>

<template>
  <div class="container-fluid bg-white">
 
    <nav class="navbar navbar-expand-lg bg-secondary navbar-dark justify-content-between">
      <svg width="60" height="50" viewBox="0 0 123 103" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.00341797 102.002L17.104 99.0104L5.93534 85.7718L0.00341797 102.002ZM11.3353 94.4987L31.3019 77.8349L29.3674 75.5419L9.40081 92.2057L11.3353 94.4987Z" fill="white"/>
<path d="M123 103L117.068 86.769L105.9 100.008L123 103ZM113.603 93.2031L93.6367 76.5388L91.7023 78.8318L111.668 95.4961L113.603 93.2031Z" fill="white"/>
<path d="M123 0.58813L105.9 3.58023L117.068 16.8192L123 0.58813ZM93.6366 27.0494L113.603 10.3851L111.668 8.09201L91.7022 24.7563L93.6366 27.0494Z" fill="white"/>
<path d="M5.31058e-05 -5.05751e-06L5.93189 16.231L17.1002 2.99209L5.31058e-05 -5.05751e-06ZM31.2978 24.1682L11.3316 7.50388L9.39723 9.79693L29.3634 26.4612L31.2978 24.1682Z" fill="white"/>
<path d="M9.66113 52.0036L61.3652 10.945L112.857 52.0036L61.3652 92.6431L9.66113 52.0036Z" stroke="white" stroke-width="3"/>
<rect x="2.12698" width="29.1583" height="29.1583" transform="matrix(0.708993 -0.705215 0.708993 0.705215 38.9222 52.9757)" stroke="white" stroke-width="3"/>
<line x1="60.8123" y1="71.2759" x2="60.8123" y2="31.8932" stroke="white" stroke-width="3"/>
</svg>
        <RouterLink class="navbar-brand " to="/">TaVue</RouterLink> 
        <button class="navbar-toggler first-letter:" 
          type="button" data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarNav">
    
            <ul class="navbar-nav">              
              

                <li class="nav-item">
                  <RouterLink class="nav-link text-white" to="/geoloc">Geoloc</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link text-white" to="/accueil">Accueil</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link text-white" to="/panier">Panier</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link text-white" to="/user">Compte</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link text-white" to="/login">S'Inscrire</RouterLink>
                </li>

                
            </ul >

            <div class="ml-auto">              
              <span v-if="isConnected"> 
                <img :src="avatar" class="img-fluid mr-2" style="max-width:60px;" />
                <button class="btn btn-light mr-2">
                  {{ currentUser.name }}
                </button>
                <button class="btn btn-dark ml-auto" type="button" @click="deconnect">
                    <i class="fa fa-sign-out"></i>
                  </button>
              </span>

              <form v-else class="form-inline  input-group-sm ml-auto" >
                  <input class="form-control mr-2" placeholder="Login" v-model="user">
                  <input class="form-control mr-2" placeholder="Password" v-model="psw">
                  <button class="btn btn-dark ml-auto" 
                      type="button" @click.prevent="connect">
                      <i class="fa fa-power-off"></i>
                  </button>
              </form>
            </div>

        </div>

    </nav>
    
    <RouterView />

  </div>
</template>

<style scoped>
</style>
