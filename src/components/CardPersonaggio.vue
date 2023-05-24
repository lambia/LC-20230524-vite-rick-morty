<script>
import { store } from '../data/store'

export default {
  name: "CardPersonaggio",
  props: {
    personaggio: Object,
    posizione: Number
  },
  data() {
    return {
      store
    }
  },
  methods: {}
}
</script>

<template>
  <div class="card">

    <!-- Versione in cui cerchiamo nell'array dello store, ad uno specifico indice -->
    <!-- <p>{{ store.personaggi[posizione].name }}</p>
    <img :src="store.personaggi[posizione].image" /> -->

    <!-- Versione in cui riceviamo direttamente l'oggetto  -->
    <p>{{ personaggio.name }}</p>
    <img :src="personaggio.image" />
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;

.card {
  width: 20%;
  padding: 1rem;
}

p {
  color: $colore;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
}

img {
  width: 100%;
}
</style>
