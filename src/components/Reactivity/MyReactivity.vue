<script setup>
import { reactive } from 'vue';
const obj = reactive({count: 0});

const name = reactive({toggle: true, value: "Empty name"})

const usersArr = reactive(["murugan", "murali", "sedhu", "bala"]);

const office = {
    admin: "user1",
    manager: "user2"
}

function changeName(){
    if(name.toggle){
        name.toggle = false;
        return name.value = "murugan";
    }else{
        name.toggle = true;
        return name.value = "nishanth";
    }
}
</script>


<template>
    <h2>{{ obj.count }}</h2>
    <button @click="obj.count++">+</button>
    <hr>


    <h3>{{ name.value }}</h3>
    <button @click="changeName">change name</button>

    <hr>

    <div v-for="item of usersArr" :key="item">
        <h3>{{ item }}</h3>
    </div>

    <hr>

    <div v-for="(key, val) in office" :key="key">
        <h3>{{ key }} : {{ val }}</h3>
    </div>
    <hr>

</template>