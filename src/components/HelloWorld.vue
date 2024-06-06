<script setup>
    import NestedComponent from './NestedComponent.vue';
    console.log("Hello world");
    
</script>

<template>
    <div>
        <h1>HELLO WORLD</h1>
        <NestedComponent />
    </div>
    
</template>

<style scoped>
    h1{
        color: red;
    }
</style>
