<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="addOne">Add 10</button>
    <changeCounter></changeCounter>
    <favouriteValue></favouriteValue>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import changeCounter from './components/changeCounter.vue';
import favouriteValue from './components/favouritEValue.vue'
export default {
  components: {
    BaseContainer,
    TheCounter,
    changeCounter,
    favouriteValue,
  },
  methods: {
    addOne() {
      this.$store.commit('increase',{value:10});
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>