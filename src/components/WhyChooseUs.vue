<template>
    <div >

        <div class="container py-4">
            <div class="row align-items-center">
                <div v-if="imagePosition === 'left'" class="col-md-6 text-center">
                    <h1 class="text-capitalize text-center mb-5">{{ title }}</h1>
                    <img :src="image" class="img-fluid" style="height: 250px;" alt="Image">
                </div>
                <div class="col-md-6 mt-5 ">
                    <div v-for="(link, index) in description" :key="index" class="text-start my-2 ">
                        <i class="bi bi-check-circle-fill me-2 ps-4" style="color: rgba(255, 206, 86, 1) !important;"></i>
                        <span class="mb-0 ps-3">{{ link.title }}</span>
                    </div>
                 </div>
                <div v-if="imagePosition === 'right'" class="col-md-6">
                    <img :src="image" class="img-fluid " style="height: 250px;" alt="Image">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: Array,
            required: true
        },
        imagePosition: {
            type: String,
            default: 'left',
            validator: function (value) {
                return ['left', 'right'].includes(value.toLowerCase());
            }
        }
    }
};
</script>

<style>
/* Add Bootstrap styles here if needed */
</style>