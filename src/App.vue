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
    getApi(route = '/search/multi'){
      axios.get(store.baseUrl + route, {params: store.apiParams})
      .then(res => {
        if (route == '/movie/popular') {
          store.movie = res.data.results;
          return;
        }

        store.movie = res.data.results.filter(item => item.media_type == 'movie');
        store.tv    = res.data.results.filter(item => item.media_type == 'tv');

        console.log( store.movie);
        console.log( store.tv);
      })
      .catch(error =>{
        console.log(error)
      })
    },
    startSearch(){
      this.getApi();


    }
  },

  mounted(){
    this.getApi('/movie/popular');
  }


}
</script>


<template>
  <AppHeader @search="startSearch" />
  <AppMain/>

  
</template>


<style lang="scss">

@use './styles/general.scss';

</style>