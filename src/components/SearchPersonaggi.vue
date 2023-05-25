<script>
import { store } from '../data/store'
import axios from 'axios';

export default {
  name: "SearchPersonaggi",
  props: {
  },
  data() {
    return {
      store,
      searchFor: ""
    }
  },
  methods: {
    avviaRicerca() {
      this.recuperaNuoviDati();
    },
    recuperaNuoviDati() {
      console.log("Cerca il personaggio: ", this.searchFor);

      let indirizzo = this.store.apiUrl;

      if (this.personaggioScelto != "null") {
        indirizzo += "?name=" + this.searchFor;
      }

      this.getCards(indirizzo);
    },
    getCards(indirizzo) {

      this.store.loading = true;

      axios.get(indirizzo).then(result => {
        const risposta = result.data;
        console.log("Risultato chiamata carte: ", risposta.results);
        this.store.personaggi = risposta.results;
        this.store.loading = false;
      }).catch(err => {
        this.store.personaggi = [];
      });

    },
  }
}
</script>

<template>
  <input type="text" v-model="searchFor" placeholder="Scrivi il nome da cercare" @keyup="avviaRicerca" />
  <button @click="avviaRicerca">Cerca</button>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;
</style>
