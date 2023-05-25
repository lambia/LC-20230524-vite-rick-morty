<script>
import ListaPersonaggi from './components/ListaPersonaggi.vue'
import SearchPersonaggi from './components/SearchPersonaggi.vue'

import { store } from './data/store'
import axios from 'axios';

export default {
  name: "App",
  components: {
    ListaPersonaggi,
    SearchPersonaggi
  },
  data() {
    return {
      store,
      personaggioScelto: null
    }
  },
  created() {

    this.getNames(this.store.apiUrl);
    this.getCards(this.store.apiUrl);

    // console.log("Store: ", this.store);
  },
  methods: {
    recuperaNuoviDati() {
      console.log("Selezionato il personaggio: ", this.personaggioScelto);

      let indirizzo = this.store.apiUrl;

      if (this.personaggioScelto != "null") {
        indirizzo += "?name=" + this.personaggioScelto;
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
    getNames(indirizzo) {

      this.store.loading = true;

      axios.get(indirizzo).then(result => {
        const risposta = result.data;

        let nomi = [];
        for (const personaggio of risposta.results) {
          nomi.push(personaggio.name);
        }

        console.log("Risultato chiamata nomi: ", nomi);
        this.store.nomiPersonaggi = nomi;
        this.store.loading = false;
      }).catch(err => {
        // this.store.nomiPersonaggi = ["Tutti", "Rick", "Morty"];
      });
    },
    mostraTutti() {
      console.log("mostra tutti");
      this.getCards(this.store.apiUrl);
      this.personaggioScelto = null;
    }
  },
}
</script>

<template>
  <!-- Recupero le options con un v-for su un array schiantato a mano -->
  <!-- Voi invece dovrete popolare quell'array facendo una chiamata all'avvio dell'app ;) -->
  <div>
    <select @change="recuperaNuoviDati" v-model="personaggioScelto">
      <option value="null">Visualizza Tutti</option>
      <option v-for="opzione in this.store.nomiPersonaggi">{{ opzione }}</option>
    </select>
    <button @click="mostraTutti" v-if="personaggioScelto">Mostra tutti</button>
    <SearchPersonaggi />
  </div>

  <ListaPersonaggi v-if="store.loading == false" />
  <span v-else>Sono in attesa dei dati</span>
</template>

<style lang="scss" scoped></style>
