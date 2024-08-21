<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  computed: {
    photosArr() {
      return this.data;
    },
  },
};
</script>

<template>
  <div class="mt-10">
    <!-- <h2 class="text-center mb-5 font-bold text-xl">Photo Gallery</h2> -->
    <div class="grid grid-cols-1 lg:grid-cols-4 mx-6 place-items-center">
      <div v-for="photo in photosArr" :key="photo.id">
        <div
          class="flex flex-col gap-10 h-72 w-72 items-center justify-center rounded-lg shadow-2xl mt-6 parent"
        >
          <img :src="photo.image" :alt="photo.firstName" />
          <!-- <p>{{ photo.firstName }} {{ photo.lastName }}</p> -->
          <router-link :to="{ name: `PhotoDetail`, params: { id: photo.id } }">
            <button
              class="h-10 w-28 text-white bg-blue-600 font-bold rounded-xl btn"
            >
              View
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn:hover > .parent {
  /* hover:scale-105 hover:cursor-pointer */

  transform: scale(1.3);
}
</style>
