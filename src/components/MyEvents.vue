<script setup>

// FOR CLICKING EVENT
    import {ref, watch} from "vue";
    import { debounce } from 'lodash-es';

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
const debouncedFirstName = ref('');
const debouncedLastName = ref('');

const updateFirstName = debounce((value) => {
  firstName.value = value;
}, 300);

const updateLastName = debounce((value) => {
  lastName.value = value;
}, 300);

watch(debouncedFirstName, (newValue) => {
  updateFirstName(newValue);
});

watch(debouncedLastName, (newValue) => {
  updateLastName(newValue);
});

const handleSubmit = (e) => {
  e.preventDefault();
  // Now firstName and lastName contain the debounced values from the input fields
  console.log('First Name:', firstName.value);
  console.log('Last Name:', lastName.value);
  // You can now use the firstName and lastName values as needed
};


//FUNCTION CALLING

function showMessage(msg){
    alert(msg);
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
            <input type="text" placeholder="Enter your name" v-model="firstName"/>
            <input type="text" placeholder="Enter your Last name" v-model="lastName"/>
            <button type="submit">submit</button>
        </form>

        <h3>your frist name: {{ firstName }}</h3>
        <h3>your last name: {{ lastName }}</h3>

        <hr>
        
        <h1>function Calling</h1>

        <button @click="showMessage('This is my message')">show Message</button>

    </div>
</template>