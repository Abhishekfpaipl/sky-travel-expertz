<template>
    <div class="container my-5" v-for="(service, index) in services" :key="index">
        <div class="d-flex justify-content-between justify-content-md-center align-items-center">
            <h1 class="text-start text-capitalize">{{ service.name }} </h1>
            <router-link :to="service.route"
                class="text-decoration-none text-dark d-flex d-md-none flex-column align-items-center">
                <span>See More</span>
                <img src="/img/travel/right-arrow.svg" style="width:20px;">
            </router-link>
        </div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-1 my-4 d-flex align-items-center">
            <div class="col my-0" v-for="(fair, index) in trades.slice(0,4)" :key="index">
                <router-link :to="'/trade-detail/' + fair.sid"
                    class="text-decoration-none my-1 card border position-relative rounded-0 overflow-hidden">
                    <div class="card-img-container">
                        <img :src="fair.image" class="card-img-top rounded-0" alt="..."
                            style="object-fit: fill;height: 150px;">

                    </div>
                    <div class="card-body p-2">
                        <div class="d-flex justify-content-center align-items-center fw-bold text-ellipsis2 text-center small"
                            style="min-height: 50px">{{ fair.title }}</div>
                        <p class="small my-0 text-ellipsis2">{{ fair.date }}</p>

                        <div class="d-flex justify-content-around align-items-center mt-2 overflow-x-scroll"
                            id="scroll">
                            <div class="d-flex flex-column justify-content-center align-items-center "
                                v-for="(icon, index) in fair.icons" :key="index">
                                <img :src="icon.image" :alt="icon.name"
                                    style="width:16px; height: 16px;object-fit: contain;">
                                <small class="text-capitalize" style="font-size: 9px">{{ icon.name }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="position-absolute text-center start-0 ms-0" style="top: 0px;">
                        <span class="text-dark  p-1 pt-0 rounded-end-3"
                            style="background-color:rgba(255, 206, 86, 1); border:1px solid rgba(255, 162, 0, 1) !important;">₹
                            {{ fair.price }}</span>
                    </div>
                </router-link>
            </div>
            <div class="col-md-2 d-none d-md-block my-0">
                <router-link :to="service.route"
                    class="dummy-card text-decoration-none d-flex flex-column justify-content-center align-items-center text-dark"
                    style="background-color:rgba(255, 206, 86, 0.2); border:1px solid rgba(255, 206, 86, 1) !important;">
                    <span class="me-2 text-uppercase fs-4"> see more</span> <img src="/img/travel/right-arrow.svg"
                        style="width:40px;">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TradeFair",
    data() {
        return {
           
            services: [
                { route: "/trade-fair", name: "trade fair", },
                { route: "/honeymoon-tour", name: "honeymoon tour", },
                { route: "/domestic-tour", name: "domestic tour", },
                { route: "/international-tour", name: "international tour", },
                { route: "/educational-tour", name: "educational tour", },
                { route: "/flight-services", name: "flight services", },
                { route: "/visa-services", name: "visa services", },
                { route: "/other-services", name: "other services", },
            ]
        }
    },
    computed: {
        trades() {
            return this.$store.getters.getPackage;
        }
    },
    methods: {
        enquiry(fair) {
            console.log(fair.title)
            const phoneNumber = '918318599577';
            const message = `Hello, I'm interested in ${fair.title}. Please confirm`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        },
    }
}
</script>

<style scoped>
.card-img-container {
    overflow: hidden;
    /* height: 200px; */
}

.card-img-top {
    transition: transform 0.3s ease;
}

.card:hover .card-img-top {
    transform: scale(1.1);
}

.dummy-card {
    height: 276px
}

@media(max-width:768px) {
    .dummy-card {
        height: 150px !important
    }
}
</style>
