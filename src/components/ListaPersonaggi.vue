<script>
import { store } from '../data/store'
import CardPersonaggio from './CardPersonaggio.vue'

export default {
  name: "ListaPersonaggi",
  components: {
    CardPersonaggio
  },
  data() {
    return {
      store,
      datiFiltrati: []
    }
  },
  methods: {
  },
  computed: {
    prendiDatiFiltrati() {
      return this.store.personaggi.slice(0, 20);
    },
    personnaggiDisponibili() {
      return this.prendiDatiFiltrati.length;
    }
  },
  mounted() { }
}
</script>

<template>
  <!-- <div>Personaggi disponibili: {{ this.prendiDatiFiltrati.length }}</div> -->
  <div>Personaggi disponibili: {{ this.personnaggiDisponibili }}</div>

  <div class="cardsWrapper">
    <!-- Possiamo usare un v-for su un template, che poi stampa direttamente i dati -->
    <!-- <div v-for="personaggio in store.personaggi">
      <p>{{ personaggio.name }}</p>
      <img :src="personaggio.image" />
    </div> -->

    <!-- Oppure dal v-for richiamao un componente ignaro del ciclo e cui passiamo la posizione
    in cui troverà il dato interessato, oppure direttamente il dato  -->
    <!-- <template v-for="(personaggio, i) in store.personaggi">
      <CardPersonaggio :personaggio="personaggio" />
    </template> -->

    <!-- Oppure ancora, eseguiamo direttamente il v-for sul componente interessato, passando il dato -->
    <CardPersonaggio :personaggio="personaggio" v-for="(personaggio, i) in prendiDatiFiltrati" />
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;
@use '../styles/partials/mixins' as *;

.cardsWrapper {
  @include flex(row, center, center, wrap);
}
</style>
