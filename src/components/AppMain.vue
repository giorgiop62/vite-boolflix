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
    <div class="container d-flex flex-wrap">

     
      <CardComponent  :card="film" v-for="film  in store.movie" :key="film.id"/>

      
      <CardComponent  :card="film" v-for="film  in store.tv" :key="film.id"/>


    </div>
  </main>

  
</template>


<style lang="scss" scoped>

</style>