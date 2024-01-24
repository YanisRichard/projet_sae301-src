<script setup>
  // Import éléments de vue
  import { ref,onMounted } from 'vue'

  // Import pocketbase
  import PocketBase from 'pocketbase'
  // Objet pocketBase
  const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE);

  // import pour formatage des dates
  import { format, parseISO } from 'date-fns'

  // Liste des lunettes
  let listeLunettes = ref()

  // Création d'une nouvelle lunette
  // Attention même structure que clle de PocketBase
  let newLunettes = ref({
    nom : "",
    couleur_cadre: "",
  })

  // Au montage du composant
  onMounted(async() => {
    refresh()
  }) // Fin de onMounted

  const refresh = async()=>{
    listeLunettes.value = await pb.collection('lunettes').getFullList({ sort: 'nom' })
    // Formattage des dates en français
    listeLunettes.value.forEach( (lunettes)=>{
      lunettes.created = format(parseISO(lunettes.created), "dd/MM/yyyy HH:mm:ss")
      lunettes.updated = format(parseISO(lunettes.updated), "dd/MM/yyyy HH:mm:ss")
    })
  }

  const create = async()=>{
    let result = await pb.collection('lunettes').create(newLunettes.value)
    console.log("result create", result)
    refresh()
  }

  const update = async(item)=>{
    let result = await pb.collection('lunettes').update(item.id, {
      nom : item.nom,
      couleur_cadre : item.couleur_cadre,
      type_cadre : item.type_cadre,
      materiel_cadre : item.materiel_cadre,
      couleur_verre : item.couleur_verre,
      type_verre : item.type_verre,
      materiel_verre : item.materiel_verre

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
    <h4>Liste des Lunettes</h4>
    <hr/>

    <!-- Table des Lunettes -->
    <table class="table table-light">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Couleur Cadre</th>
          <th>Cadre</th>
          <th>Verre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in listeLunettes" :key="item.id">
          <td>
            <input type="text" v-model="item.nom" />
          </td>
          <td>
            <input type="text" v-model="item.couleur_cadre" />
          </td>
          <td>
            <input type="text" v-model="item.type_cadre" />
          </td>
          <td>
            <input type="text" v-model="item.type_verre" />
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
a{
  color:black;
}
</style>