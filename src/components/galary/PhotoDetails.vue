<template>
  <div class="flex justify-center items-center flex-col">
    <div class="">
        <h1>Photo Number : {{this.photoId}}</h1>
    </div>
    <div v-if="photo" class='flex flex-col gap-10 h-72 w-72 items-center justify-center rounded-lg shadow-2xl mt-6'>
        <img :src="photo.image" :alt="photo.firstName" />
        <p>{{ photo.firstName }} {{ photo.lastName }}</p>
        <p>Role :: {{ photo.role }}</p>

    </div>
    <div v-else-if="notFound">
        <h1>{{ notFound }}</h1>
    </div>
    <div v-else>Loading..................</div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      photoId: this.$route.params.id,
      photo: null,
      notFound : null
    };
  },
  watch: {
    "$route.params.id": function (newId) {
      this.productId = newId;
      this.fetchPhoto(newId);
    },
  },
  created() {
    if(this.photoId) {
      this.fetchPhoto(this.photoId);
    }
  },
  methods: {
    fetchPhoto(id) {
      fetch(`https://dummyjson.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
          this.photo = data;
          console.log(this.photo);
          console.log(this.$route.params.id);
        })
        .catch(() => {
          this.notFound = "No Media Found"
          console.log(this.notFound)
        });
    },
  },
};
</script>
