<script>
// eslint-disable-next-line no-unused-vars
export default {
    data() {
        return {
            menu: [
                { id: 1, menuItem: "Home" },
                // { id: 2, menuItem: "Galary" },
            ],
            mobileMenu : true
        };
    },
    methods: {
        toggleMenu(){
            this.mobileMenu = !this.mobileMenu
        }


    }
};
</script>

<template>
    <nav class="position-sticky top-0 w-full h-20 bg-white shadow-2xl">
        <div class="flex justify-between items-center mx-5">
            <div class="flex gap-2 cursor-pointer">
                <img src="../../assets/galaryLogo.png" class="h-20 w-20 rounded-md" alt="logo"/>
                <h3 class="font-bold text-center text-2xl mt-6">Galary</h3>
            </div>
            <div>
                <div class="flex lg:hidden">
                    <div v-if="mobileMenu">
                        <i class="fa-solid fa-bars" @click="toggleMenu"></i>
                    </div>
                    <div v-else >
                        <div class="flex flex-col h-30 w-40 absolute top-[40px] right-[0px] bg-white gap-5 p-8">
                            <i class="fa-solid fa-xmark  flex-end" @click="toggleMenu"></i>
                            <div v-for="item in menu" :key="item.id" class="font-bold hover:text-indigo-400 hover:cursor-pointer ">
                            {{ item.menuItem }}
                            </div>
                        </div>
                    </div>

                </div>
                <ul class="gap-5 hidden lg:flex">
                        
                    <li v-for="item in menu" :key="item.id" class="font-bold hover:text-indigo-400 hover:cursor-pointer ">
                        {{ item.menuItem }}
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
