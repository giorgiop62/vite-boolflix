<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import { store } from './data/store'
import CardComponent from './components/CardComponent.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    CardComponent

  },

  data() {
    return {
      store,
    }
  },

  methods: {
    // Chiamato all'avvio
    getApi(route) {
      axios.get(store.baseUrl + route, { params: store.apiParams })
        .then(res => {
          // Filtra i film dai risultati, salvali in un array apposito
          store.movie = res.data.results.filter(item => item.media_type == 'movie');
          // Filtra le serie tv dai risultati, salvale in un array apposito
          store.tv = res.data.results.filter(item => item.media_type == 'tv');
        })
        .catch(error => {
          console.log(error)
        })
    },
    getSearchResults(route) {
      axios.get(store.baseUrl + route, { params: store.apiParams })
        .then(res => {
          /*
          if (route == '/movie/popular') {
            store.movie = res.data.results;
            return;
          }
          */
          console.log(store);
          store.movie = res.data.results.filter(item => item.media_type == 'movie');
          store.tv = res.data.results.filter(item => item.media_type == 'tv');

          console.log(store.movie);
          console.log(store.tv);
        })
        .catch(error => {
          console.log(error)
        })
    },
    startSearch() {
      this.getSearchResults('/search/multi');

    },
    showTV() {
      // Mostra solo le serie tv più popolari della settimana
      this.getSearchResults('/trending/tv/week')

    },
    showMovies() {
      // Mostra solo i film più popolari della settimana
      this.getSearchResults('/trending/movie/week')


    },
    reset() {
      this.getApi('/trending/all/week');
    }

  },

  mounted() {
    // All'avvio carica la lista di film e serie tv più popolari della settimana
    this.getApi('/trending/all/week');
  }


}
</script>


<template>
  <AppHeader @search="startSearch" @navToTV="showTV" @navToMovies="showMovies" @navToHome="reset" />
  <AppMain />


</template>


<style lang="scss">
@use './styles/general.scss';
</style>