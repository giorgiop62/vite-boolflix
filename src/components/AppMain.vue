<script>
import {store} from '../data/store'
import CardComponent from '../components/CardComponent.vue'
export default {
  name:'AppMain',
  components:{
    CardComponent
  },

  data(){
    return {
      store
    }
  }
}
</script>



<template>
  <main>
    <div class="row">

      <CardComponent v-for="film in store.listaFilm.results" :card="film"/>

    </div>
  </main>

  
</template>


<style lang="scss" scoped>

</style>