<template>
    <button @click="addOne">Add 4</button>
</template>
<script>
export default {
    methods:{
        addOne(){
           this.$store.dispatch('increment');
        }
    }
}
</script>