<script setup>
  // Import éléments de vue
  import { ref,onMounted } from 'vue'

  // Au montage du composant
  onMounted(async() => {
  }) // Fin de onMounted

</script>

<template>

  <div class="container-fluid">
    <h4>Page de Connexion</h4>
    <hr/>

    <div>
        
    </div>
    
    <div class="ml-auto">              
              <span v-if="isConnected"> 
                <img :src="avatar" class="img-fluid" style="max-width:60px;" />
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
</template>



<style scoped>
</style>