<template>
    <div>
        <h1>Binding Types</h1>
        <!-- STATIC BINDING -->
        <img :src="src" :alt="alt" :width="width" :height="height"/>
        <!-- DYNAMIC BINDING -->
        <img v-bind="obj1"/>

    </div>
</template>

<script setup>
    //STATIC BINDING
   const src ='https://images.unsplash.com/photo-1716908952387-0b1128538b68?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
   const alt = "image";
   const  width = 400;
   const height =400;
   //DYNAMIC BINDING

   const obj1 = {
    src :'https://images.unsplash.com/photo-1716724854567-9ec995836d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D',
    alt : "image",
    width : 400,
    height :400,
   }


</script>

