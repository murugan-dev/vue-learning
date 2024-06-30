<script setup>
import { ref } from 'vue';
import "../../style.css";

let val = ref(0);

function handleSubmit(e) {
    e.preventDefault();
    const inputVal = e.target.querySelector('input').value;
    val.value = parseInt(inputVal);
    console.log(val.value);
}
</script>

<template>
    <div class="flex justify-center items-center flex-col lg:flex-row bg-gray-200 gap-5 h-full w-full px-4">
        <div class="bg-white shadow-2xl rounded-md h-1/2 p-10 w-4/5 flex justify-center items-center flex-col">
            <h1 class="text-2xl text-center font-bold">Inputs</h1>
            <form @submit="handleSubmit" class="shadow-2xl border-[1px] flex flex-col justify-center items-center gap-2 p-5 w-4/5 rounded-lg">
                <input 
                    type="number" 
                    placeholder="Number" 
                    class="w-full border-[2px] border-gray-400 focus:border-violet-500 active:border-violet-600 rounded-sm pl-1"
                />
                <br />
                <button type="submit" class="px-3 py-1 text-white bg-blue-800 hover:bg-blue-500 font-bold rounded-md">Submit</button>
            </form>
        </div>
        <div class="bg-white shadow-2xl rounded-md h-1/2 p-10 w-4/5 flex justify-center items-center flex-col">                                                                                            
            <h1 class="text-center text-2xl font-bold">Output</h1>
            <div class="h-[200px] w-[200px] border-[1px] border-black"></div>
        </div>
    </div>
</template>

<style scoped>
/* Additional styling if needed */
</style>
