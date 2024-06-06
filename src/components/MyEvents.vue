<script setup>

// FOR CLICKING EVENT
    import {ref} from "vue";

    let count = ref(0);
    let firstName = ref("");
    let lastName = ref("");

    const increment = () =>{
        console.log("count incremented " + count.value);
        return count.value++;
    }

    const decrement = () =>{
        console.log("count decremented " + count.value);
        return count.value--;
    }

    // FOR ON-CHANGE EVENT
    const handleInput = (e) =>{
        console.log(e.target.value)
    }

    // FOR ON SUBMIT EVENT

    const handleSubmit = (e)=>{
        e.preventDefault();
        
    }

</script>

<template>
    <div>
        <h1>CLICK EVENT </h1>

        <h3>count: {{ count }}</h3>
        <button @click="increment">increment</button>
        <button @click="decrement">decrement</button>
        <hr>

        <h1>ONCHANGE EVENT</h1>
        <input type="text" @change="handleInput">
        <hr>

        <h1>ONSUBMIT EVENT</h1>
        <form action="" @submit="handleSubmit">
            <input type="text" placeholder="Enter your name" v-modal="firstName"/>
            <input type="text" placeholder="Enter your Last name" v-modal="lastName"/>
            <button type="submit">submit</button>
        </form>

        <h3>your frist name: {{ firstName }}</h3>
        <h3>your last name: {{ lastName }}</h3>



    </div>
</template>