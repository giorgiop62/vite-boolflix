<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import {store} from './data/store'
import CardComponent from './components/CardComponent.vue'

export default {
  name: 'App',
  components:{
    AppHeader,
    AppMain,
    CardComponent

  },
  
  data(){
    return{
      store,
    }
  },

  methods:{
    getMovies(){
      console.log(store.apiUrl);
      axios.get(store.apiUrl)
      .then(result => {
        store.listaFilm = result.data
        console.log(result.data)

      })
      .catch(error =>{
        console.log(error)
      })
    }
  },

  mounted(){
    this.getMovies();
  }


}
</script>


<template>
  <AppHeader />
  <AppMain />

  
</template>


<style lang="scss">

@use './styles/general.scss';

</style>