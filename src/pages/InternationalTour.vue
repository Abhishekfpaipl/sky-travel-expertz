<template>
    <div style="padding-top: 68px;">
        <div class="position-relative" style="width: 100%; overflow: hidden;">
            <img src="/img/tradeFair.jpg" alt="" style="width: 100%;">
            <div class="overlay"></div>
            <p class="position-absolute fw-bold text-white fs-1 centered-text text-capitalize">
                {{ pageName }}
            </p>
        </div>
        <div class="container my-3">
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-1 my-4">
                <div class="col" v-for="(fair, index) in trades" :key="index">
                    <router-link :to="'/trade-fair/' + fair.slug"
                        class="text-decoration-none my-2 card shadow-lg position-relative rounded-0 overflow-hidden">
                        <div class="card-img-container">
                            <img :src="fair.image" class="card-img-top rounded-0" alt="..."
                                style="object-fit: fill;height: 120px;">
                        </div>
                        <div class="card-body p-3">
                            <div class="d-flex justify-content-center align-items-center fw-bold text-ellipsis2 text-center small"
                                style="min-height: 50px">{{ fair.title }}</div>
                            <p class="small my-1 text-ellipsis2">{{ fair.date }}</p>
                            <div class="d-flex justify-content-between align-items-center mt-3 overflow-x-scroll gap-2"
                                id="scroll">
                                <div class="d-flex flex-column justify-content-center align-items-center "
                                    v-for="(icon, index) in icons" :key="index">
                                    <img :src="icon.image" :alt="icon.name"
                                        style="width:20px; height: 20px;object-fit: contain;">
                                    <small class="smaller text-capitalize">{{ icon.name }}</small>
                                </div>
                            </div>
                        </div>
                        <div class="btn-group">
                            <button class="btn btn-success border-secondary px-1 rounded-0" @click="enquiry(fair)">

                                Enquire
                            </button>
                            <router-link to=""
                                class="btn text-dark border-secondary btn-outline-warning px-1 rounded-0">Details</router-link>
                        </div>
                        <div class="position-absolute text-center start-0 ms-0" style="top: -2px;">
                            <span class="text-white bg-danger p-1 pt-0 rounded-end-3">₹ {{ fair.price }}</span>
                        </div>
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "TradeFairPage",
    data() {
        return {
            pageName: "",
            searchTerm: '',
            activeTabIndex: 0,
            selectedVisitor: '1-2',
            destination: 'Amazing Dubai',

        }
    },
    computed: {
        trades() {
            return this.$store.getters.getTrades;
        }
    },
    mounted() {
        let pageName = this.$route.path.split('/').pop();
        this.pageName = pageName.replace(/-/g, ' ');
    },
    methods: {

    }
}
</script>

<style scoped>
.nav-link {
    height: 40px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: background-color 0.3s ease, color 0.3s ease;
    color: black !important;
}

.nav-link.active {
    background-color: transparent !important;
    border-bottom: 3px solid black !important;
    color: black !important;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    border-radius: 0px !important;
    transform: scale(1.2);
}

.sticky-nav {
    position: sticky;
    top: 0 !important;
    z-index: 1000;
    background-color: white;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

.centered-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    text-align: center;
    /* Optional: for multi-line text */
}
</style>
