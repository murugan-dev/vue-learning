<!-- COMPUTED PROPERTIES -->

<script setup>
import {ref, computed} from 'vue'

const val = ref(5);
const squareValue = computed(()=>{
    return val.value * val.value
})

    
</script>

<template>
    <h1>COMPUTED PROPERTIES</h1>

    <P>
     BASICALLY IT USED {{ }} FILED NOT ACCEPT THE COMPLEX LOGIC IN MULTIPLE PLACES BECAUSE template is getting a bit cluttered (ref - documentation);
    </P>

    <p>basically it is a one of the API imported from vue</p>

    <hr>
    <h3>count : {{ val }}</h3>

    <h3>square value : {{ squareValue }}</h3>



</template>
