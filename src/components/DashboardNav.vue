<template>
         <div class="d-flex align-items-center gap-3 position-fixed top-0 py-2 bg-light w-100 border-bottom" style="z-index: 99;">
            <router-link to="/" 
                class="text-decoration-none text-dark d-flex align-items-center">
                <img :src="`${publicPath}${img}`" style="width: 50px;object-fit: contain;">
                <div class="d-flex flex-column  ms-2">
                    <span class="text-uppercase text-dark fs-4 fw-bold">sky travel expertz</span>
                    <!-- <small class="text-end text-uppercase fw-bold smaller">The world to see</small> -->
                </div>
            </router-link>
        </div>
 </template>

<script>
export default {
    name: 'ProductTopnav',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo.png",
            backgroundOpacity: 0,
            hideOnScroll: true,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
       
    }
};
</script>

<style scoped> 

.containerr {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px;
    z-index: 10;
}
</style>