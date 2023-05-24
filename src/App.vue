<script>
import ListaPersonaggi from './components/ListaPersonaggi.vue'

import { store } from './data/store'
import axios from 'axios';

export default {
  name: "App",
  components: {
    ListaPersonaggi
  },
  data() {
    return {
      store,
      opzioniSelezionabili: [
        "Tutti",
        "Rick",
        "Morty"
      ],
      personaggioScelto: "Tutti"
    }
  },
  mounted() {

    this.chiamataDati(this.store.apiUrl);

    // console.log("Store: ", this.store);
  },
  methods: {
    recuperaNuoviDati() {
      console.log(this.personaggioScelto);

      let indirizzo = this.store.apiUrl;

      if (this.personaggioScelto == "Rick") {
        indirizzo += "?name=rick";
      } else if (this.personaggioScelto == "Morty") {
        indirizzo += "?name=morty"
      }

      this.chiamataDati(indirizzo);
    },
    chiamataDati(indirizzo) {

      this.store.loading = true;

      axios.get(indirizzo).then(result => {
        const risposta = result.data;
        console.log("Risultato chiamata: ", risposta.results);
        this.store.personaggi = risposta.results;
        this.store.loading = false;
      }).catch(err => {
        this.store.personaggi = [];
      });

    }
  }
}
</script>

<template>
  <!-- Recupero le options con un v-for su un array schiantato a mano -->
  <!-- Voi invece dovrete popolare quell'array facendo una chiamata all'avvio dell'app ;) -->
  <select @change="recuperaNuoviDati" v-model="personaggioScelto">
    <option v-for="opzione in opzioniSelezionabili">{{ opzione }}</option>
  </select>
  <ListaPersonaggi v-if="store.loading == false" />
  <span v-else>Sono in attesa dei dati</span>
</template>

<style lang="scss" scoped></style>
