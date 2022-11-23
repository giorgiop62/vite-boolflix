<script>
import { store } from '../data/store'
import LangFlag from 'vue-lang-code-flags';

export default {
  name: 'CardComponent',
  props: {
    card: Object
  },
  components: {
    LangFlag,
  },
  data() {
    return {
      store
    }
  },

  methods: {
    ottieniUrlimg() {
      // Source: https://www.themoviedb.org/talk/5f3ef4eec175b200365ee352?language=it-IT#last


      if (this.card.poster_path) {
        let url = 'https://image.tmdb.org/t/p/original';
        url = url + this.card.poster_path;
        return url;
      } else {
        return 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png';
      }

    },
  }
}
</script>

<template>

  <div class="sc-card col-3">
    <img :src="ottieniUrlimg()" alt="">

    <div class="change">
      <div class="text">
        <h4>Titolo:{{ card.title }}</h4>
        <h3>Titolo Originale:{{ card.original_title }}</h3>
        <p class="lang">Lingua:
          <lang-flag :iso='card.original_language' />
        </p>

        <p class="voto">Voto: 
          <div v-for="(star, index) in Math.floor(card.vote_average / 2)" :key="index" class="star"></div>
        </p>
      </div>
    </div>

  </div>

</template>



<style lang="scss" scoped>
.sc-card {

  flex-basis: 25%;
  min-height: 300px;
  padding: 15px;
  text-align: center;
  position: relative;

  img {
    max-width: 300px;
    display: block;
  }

  &:hover .change {
    opacity: 5;
    border: 1px solid white;
  }

  .change {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: black;

  }

  .text {
    font-size: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: left;

    .lang {
      font-size: x-large;
    }

    .star {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: yellow;
      display: inline-flex;
      margin-left: 8px;
    }
  }

}
</style>