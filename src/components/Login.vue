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
  let newUser = ref('')
  let newPsw = ref('')

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

  <div class="container-fluid">
    <h4>Inscription</h4>
    <hr/>

    <div>
        <h3></h3>
    </div>
    
    <div class="ml-auto">              

            <form class="form-inline  input-group-sm ml-auto" >
                <input class="form-control mr-2" placeholder="Nom d'utilisateur" v-model="user">
                <input class="form-control mr-2" placeholder="Mot de passe" v-model="psw">
                <button class="btn btn-dark ml-auto" 
                type="button" @click.prevent="connect">
                <i class="fa fa-power-off"></i>
                </button>
            </form>
    </div>
  
  </div>
</template>



<style scoped>
</style>