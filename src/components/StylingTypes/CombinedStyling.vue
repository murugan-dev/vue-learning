<template>
    <div>
        <h1 class="c-style">Combined Style</h1>
        <p>this type component having Both <span>GLOBAL AND LOCAL STYLING</span></p>
        <hr>
    </div>
</template>

<!--  GLOBAL STYLE-->

<!-- here writing all the styling applied to entire application -->

<style>
.c-style{
    color: blue;
}
</style>

<!-- Local Style -->

<!-- here writing all the style applied only this component -->

<style scoped>
    span{
        background-color: fuchsia;
        color: #fff;
    }

</style>

