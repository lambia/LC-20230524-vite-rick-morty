<script>
export default {
  name: "HelloWorld",
  data() {
    return {
    }
  }
}
</script>

<template>
  <span>Componente HelloWorld OK</span>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;

span {
  color: $colore;
}
</style>
