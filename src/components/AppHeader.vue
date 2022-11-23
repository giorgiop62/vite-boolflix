<script>
import {store} from '../data/store'
import axios from 'axios'

export default {
  name:'AppHeader',

  data(){
    return{
      store,
    }
  },
 
}
 
</script>


<template>
  <header>
    <div class="logo">
      <h1>Boolflix</h1>
    </div>
    <div class="menu">
      <nav>
        <ul>
          <li>Home</li>
          <li v-on:click="$emit('search')">Serie Tv</li>
          <li v-on:click="$emit('search')">Film</li>
          <li>La mia lista</li>
        </ul>
      </nav>
    </div>

    <div class="search">
      <div class="input-group">
      <div class="form-outline">
      <input type="search" v-on:keyup.enter="$emit('search')" v-model.trim="store.apiParams.query" placeholder="Search" id="form1" class="form-control" />
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
  
 ul {
  display: flex;
 }
 li {
  margin: 20px;
  list-style-type: none;
  font-size: 20px;
}


}

</style>