<template>
    <div>
        <h1>MODULE STYLING</h1>
        <P>This component has <span :class="myClass['kabab-type']">module style</span></P>
        <p>while using module attribute in style tag <span :class=myClass.camalCase>IT ACT LIKE A LOCAL STYLE</span></p>
        <h3>BASICALLY IT IS USED IN THE KABAB AND CAMAL-CASE TEXT FORMATE</h3>
        <hr>
    </div>
</template>

<!-- module style -->

<style module = "myClass">  /* here myClass is module name  if module name is not used mean default module name is ******** $style ******* */

    /* IT EXAMPLE FOR ********LOCAL STYLING********** */
    h1{
        color: violet;
    }

    /* KABAB STYLE -   :class="$style['kabab-type']  used must in this type*/

  .kabab-type{
    color: brown;
  }

  /* camal case ----  :class=$style.camalCase*/
  .camalCase{
    color:chocolate;

  }



</style>