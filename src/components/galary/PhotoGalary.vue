<script>
import NavBar from "./GalaryNavBar.vue";
import Photos from "./ShowPhotos.vue";

export default {
    components: {
        NavBar,
        Photos,
    },
    data() {
        return {
            photos: [],
        };
    },
    methods: {
        fetchData() {
            fetch('https://dummyjson.com/users')
                .then(response => response.json())
                .then(data => {
                    this.photos = data.users;
                })
                .catch(error => {
                    console.error('Error fetching photos:', error);
                });
        },
    },
    mounted() {
        this.fetchData();
    },
};
</script>

<template>
    <div>
        <NavBar />
        <Photos :data="photos" />
    </div>
</template>
