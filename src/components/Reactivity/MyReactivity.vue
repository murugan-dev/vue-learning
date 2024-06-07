<script setup>
import { reactive, ref } from 'vue';
const obj = reactive({count: 0});

const name = ref("");

const usersArr = reactive(["murugan", "murali", "sedhu", "bala"]);

const office = {
    admin: "user1",
    manager: "user2"
}


</script>


<template>
    <h2>{{ obj.count }}</h2>
    <button @click="obj.count++">+</button>
    <h3>{{ name }}</h3>
    <button @click="name = 'murugan'">change name</button>

    <div v-for="item of usersArr" :key="item">
        <h3>{{ item }}</h3>
    </div>

    <div v-for="(key, val) in office" :key="key">
        <h3>{{ key }} : {{ val }}</h3>
    </div>
</template>