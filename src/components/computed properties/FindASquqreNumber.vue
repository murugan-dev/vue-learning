<script setup>
    import { ref, computed } from "vue";

    const val = ref(0); 

    function handlerSubmit(e){
        e.preventDefault();
        const inputValue = e.target.querySelector('input').value;
        val.value = parseInt(inputValue); 
    }

    const squareValue = computed(() => {
        return val.value * val.value;
    });
</script>

<template>
    <div>
        <h1>Find a Square Number</h1>
        <form @submit="handlerSubmit">
            <input type="number">
            <button type="submit">Submit</button>
        </form>
        <div v-if="!isNaN(squareValue)">Square Value: {{ squareValue }}</div>
    </div>
</template>
