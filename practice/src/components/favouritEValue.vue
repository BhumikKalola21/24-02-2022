<template>
    <h3>do more</h3>
    <h3>{{ counter }}</h3>
</template>
<script>
export default {
     computed: {
    counter() {
      return this.$store.getters.stuckVlaue;
    },
  },
}
</script>