<template>
    <div v-if="product.gallery" class="container mt-5">
        <lightgallery :settings="{ speed: 500, plugins: plugins }" :onInit="onInit" :onBeforeSlide="onBeforeSlide"
            class="d-flex justify-content-center align-items-center flex-wrap g-2" id="scroll">
            <a :href="image" class="col-md-4 " v-for="(image, index) in product.gallery" :key="index">
                <img :alt="'img' + (index + 1)" :src="image" class="card-img-top border" />
            </a>
        </lightgallery>
    </div>
    <div v-else class="container">
        <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark d-flex align-items-center">
                <i class="bi bi-exclamation-triangle-fill me-2"></i>
                <h5 class="card-title mb-0">Gallery</h5>
            </div>
            <div class="card-body">
                <div class="text-center text-muted p-3">
                    No Gallery Iamges found
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Lightgallery from 'lightgallery/vue';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    components: {
        Lightgallery,
    },
    data() {
        return {
            plugins: [lgThumbnail, lgZoom], // LightGallery plugins 
        };
    },
    methods: {
        onInit() {
            console.log('lightGallery has been initialized');
        },
        onBeforeSlide() {
            console.log('calling before slide');
        },
    },
};
</script>

<style scoped>
.card-img-top {
    height: 200px;
    object-fit: cover;
    object-position: top center;
}
</style>