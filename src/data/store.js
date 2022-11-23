import { reactive } from "vue";


export const store = reactive({

  baseUrl: 'https://api.themoviedb.org/3',
  tv:[],
  movie:[],
  apiParams:{
    api_key: '6d84d7352f8b6a3a28b7a098f5be2195',
    query:'',
    language:''


  }

})