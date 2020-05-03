<template lang="html">
  <div class="film-wrapper">
    <film-grid-item v-for="(film, index) in films" :key="index" :film="film" />
  </div>
</template>

<script>
import FilmGridItem from './FilmGridItem';
import FilmsService from '../services/FilmsService.js';
import {eventBus} from '../main.js';


export default {
  data(){
    return {
      films: []
    };
  },
  mounted(){
    FilmsService.getFilms()
   .then(films => this.films = films)

    eventBus.$on('film-deleted', (id) => {
      const index = this.films.findIndex(film => film._id === id);
      this.films.splice(index, 1);
    }),

    eventBus.$on('film-selected', (id) => {
      this.selectFilm = film;
    })
  },
  components: {
    'film-grid-item': FilmGridItem
  }
}
</script>

<style lang="css" scoped>

.film-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
