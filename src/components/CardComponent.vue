<script>
import {store} from '../data/store'
export default {
  name:'CardComponent',
  props:{
    card:Object
  },
  data(){
    return{
      store
    }
  },

  methods:{
    ottieniUrlimg(){
      // Source: https://www.themoviedb.org/talk/5f3ef4eec175b200365ee352?language=it-IT#last
      let url = 'https://image.tmdb.org/t/p/original';
      url = url + this.card.poster_path;
      return url;
    }
  }

  
}
</script>

<template>
  <div class="sc-card col-3">
    <img :src="ottieniUrlimg()" alt="">
    <h4>{{card.title}}</h4>



  </div>

  
</template>



<style lang="scss" scoped>
.sc-card {

  flex-basis: 25%;
  min-height: 300px;
  padding: 15px;
  text-align: center;
  img {
    max-width: 200px;
  }

}


</style>