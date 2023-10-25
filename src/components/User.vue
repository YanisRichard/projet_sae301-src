<script setup>
  // Import éléments de vue
  import { ref,onMounted } from 'vue'

  // Import pocketbase
  import PocketBase from 'pocketbase'
  // Objet pocketBase
  const pb = new PocketBase("http://127.0.0.1:8090");

  // import pour formatage des dates
  import { format, parseISO } from 'date-fns'

  // Liste des lunettes
  let listeInfo = ref()

  // Création d'une nouvelle lunette
  // Attention même structure que clle de PocketBase
  let newUser = ref({
    username : "",
    email: "",
  })

  // Au montage du composant
  onMounted(async() => {
    refresh()
  }) // Fin de onMounted

  const refresh = async()=>{
    listeInfo.value = await pb.collection('users').getFullList({ sort: 'nom' })
    // Formattage des dates en français
    listeInfo.value.forEach( (users)=>{
      users.created = format(parseISO(user.created), "dd/MM/yyyy HH:mm:ss")
      users.updated = format(parseISO(user.updated), "dd/MM/yyyy HH:mm:ss")
    })
  }

  const create = async()=>{
    let result = await pb.collection('users').create(newUser.value)
    console.log("result create", result)
    refresh()
  }

  const update = async(item)=>{
    let result = await pb.collection('users').update(item.id, {
      username : item.username,
      email : item.email,
      name : item.name,
      avatar : item.avatar

    })
    console.log("result update", result)
    refresh()
  }

  const del = async(item)=>{
    let result = await pb.collection('lunettes').delete(item.id)
    console.log("result delete", result)
    refresh()
  }




</script>

<template>
  <div class="container-fluid">
    <h4>Mon compte</h4>
    <hr/>

    <!-- Table des Lunettes -->
    <table class="table table-light">
      <thead>
        <tr>
          <th>Nom d'utilisateur</th>
          <th>Email</th>
          <th>Nom</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in listeInfo" :key="item.id">
          <td>
            <input type="text" v-model="item.username" />
          </td>
          <td>
            <input type="text" v-model="item.email" />
          </td>
          <td>
            <input type="text" v-model="item.name" />
          </td>
          <td>
            <input type="text" v-model="item.avatar" />
          </td>
          <td>
            <div class="text-center">
              <a href="#">
                <i class="fa fa-edit fa-lg m-1" title="Mettre à jour" @click="update(item)"></i>
              </a>
              <a href="#">
                <i class="fa fa-trash fa-lg m-1" title="Supprimer" @click="del(item)"></i>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    

  </div>
</template>

<style scoped>
</style>