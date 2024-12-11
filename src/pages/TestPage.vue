<template>
    <div>
        <div class="container my-4" v-for="(image, index) in images" :key="index">
            <img :src="image" :alt="'Image ' + (index + 1)" class="w-100 img-fluid rounded shadow-sm"
                @error="handleImageError(index)">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            images: [
                "img/test/1.jpg",
                "img/test/2.jpg",
                "img/test/3.jpg",
                "img/test/4.jpg",
                "img/test/5.jpg",
                "img/test/6.jpg",
                "img/test/7.jpg",
                "img/test/8.jpg",
                "img/test/9.jpg",
            ],
            fallbackImage: "img/default.jpg", // Fallback image path
        };
    },
    methods: {
        handleImageError(index) {
            this.images[index] = this.fallbackImage; // Replace broken image with fallback
        },
    },
};
</script>
<style scoped> 

.container {
    padding: 10px;
}
</style>
