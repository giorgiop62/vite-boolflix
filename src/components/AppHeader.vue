<script>
import {store} from '../data/store'
import axsios from 'axios'

export default {
  name:'AppHeader',
  
  data(){
    return{
      store,
      ricerca:''
    }
  },
  methods:{
    search(){
      let apiUrlcercaUtente = store.apiUrlRicerca + this.ricerca
    
      
      axios.get(apiUrlcercaUtente)
      .then(result => {
        store.listaFilmCercati = result.data
        console.log(result.data)

      })
      .catch(error =>{
        console.log(error)
      })
    }

    }
  }

</script>


<template>
  <header>
    <div class="logo">
      <h1>Boolflix</h1>
    </div>
    <div class="search">
      <div class="input-group">
      <div class="form-outline">
      <input type="search" placeholder="search" id="form1" class="form-control" />
    </div>
</div>

    </div>

   

  </header>
  
</template>


<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  margin: 30px;
  h1{
    color: red;
    font-size: 40px;

  }
}

</style>