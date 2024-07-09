<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <h1 class="text-start text-capitalize">~ trade fair ~</h1>
            <router-link to="/trade-detail" class="text-decoration-none text-dark d-flex d-md-none flex-column align-items-center">
                <span>See More</span>
                <img src="/img/travel/right-arrow.svg" style="width:20px;">
            </router-link>
        </div>
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
                                <!-- <i class="bi" :class="icon.icon"></i> -->
                                <img :src="icon.image" :alt="icon.name"
                                    style="width:20px; height: 20px;object-fit: contain;">
                                <small class="smaller text-capitalize">{{ icon.name }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-success border-secondary px-1 rounded-0" @click="enquiry(fair)">
                            <!-- <i class="bi bi-whatsapp"></i> -->
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
            <div class="col-md-2 mt-2 d-none d-md-block">
                <router-link to="/trade-detail" class="dummy-card border d-flex flex-column justify-content-center align-items-center">
                    <span class="me-2 text-uppercase fs-4"> see more</span> <img src="/img/travel/right-arrow.svg"
                        style="width:40px;">
                </router-link>
            </div>
        </div>
    </div>
    <div class="container my-5">
        <div class="d-flex justify-content-between align-items-center">
            <h1 class="text-center text-capitalize">~ Honeymoon tour ~</h1>
            <router-link to="/honeymoon-tour" class="text-decoration-none text-dark d-flex d-md-none flex-column align-items-center">
                <span>See More</span>
                <img src="/img/travel/right-arrow.svg" style="width:20px;">
            </router-link>
        </div> 
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
                                <!-- <i class="bi" :class="icon.icon"></i> -->
                                <img :src="icon.image" :alt="icon.name"
                                    style="width:20px; height: 20px;object-fit: contain;">
                                <small class="smaller text-capitalize">{{ icon.name }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-success border-secondary px-1 rounded-0" @click="enquiry(fair)">
                            <!-- <i class="bi bi-whatsapp"></i> -->
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
            <div class="col-md-2 mt-2 d-none d-md-block">
                <router-link to="/honeymoon-tour" class="dummy-card border d-flex flex-column justify-content-center align-items-center">
                    <span class="me-2 text-uppercase fs-4"> see more</span> <img src="/img/travel/right-arrow.svg"
                        style="width:40px;">
                </router-link>
            </div>
        </div>
    </div>
    <div class="container my-5">
        <div class="d-flex justify-content-between align-items-center"> 
            <h1 class="text-center text-capitalize">~ domestic tour ~</h1>
            <router-link to="/domestic-tour" class="text-decoration-none text-dark d-flex d-md-none flex-column align-items-center">
                <span>See More</span>
                <img src="/img/travel/right-arrow.svg" style="width:20px;">
            </router-link>
        </div>
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
                                <!-- <i class="bi" :class="icon.icon"></i> -->
                                <img :src="icon.image" :alt="icon.name"
                                    style="width:20px; height: 20px;object-fit: contain;">
                                <small class="smaller text-capitalize">{{ icon.name }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-success border-secondary px-1 rounded-0" @click="enquiry(fair)">
                            <!-- <i class="bi bi-whatsapp"></i> -->
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
            <div class="col-md-2 mt-2 d-none d-md-block">
                <router-link to="/domestic-tour" class="dummy-card border d-flex flex-column justify-content-center align-items-center">
                    <span class="me-2 text-uppercase fs-4"> see more</span> <img src="/img/travel/right-arrow.svg"
                        style="width:40px;">
                </router-link>
            </div>
        </div>
    </div>
    <div class="container my-5">
        <div class="d-flex justify-content-between align-items-center"> 
            <h1 class="text-center text-capitalize">~ international tour ~</h1>
            <router-link to="/international-tour" class="text-decoration-none text-dark d-flex d-md-none flex-column align-items-center">
                <span>See More</span>
                <img src="/img/travel/right-arrow.svg" style="width:20px;">
            </router-link>
        </div>
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
                                <!-- <i class="bi" :class="icon.icon"></i> -->
                                <img :src="icon.image" :alt="icon.name"
                                    style="width:20px; height: 20px;object-fit: contain;">
                                <small class="smaller text-capitalize">{{ icon.name }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-success border-secondary px-1 rounded-0" @click="enquiry(fair)">
                            <!-- <i class="bi bi-whatsapp"></i> -->
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
            <div class="col-md-2 mt-2 d-none d-md-block">
                <router-link to="/international-tour" class="dummy-card border d-flex flex-column justify-content-center align-items-center">
                    <span class="me-2 text-uppercase fs-4"> see more</span> <img src="/img/travel/right-arrow.svg"
                        style="width:40px;">
                </router-link>
            </div>
        </div>
    </div>
    <div class="container my-5">
        <div class="d-flex justify-content-between align-items-center"> 
            <h1 class="text-center text-capitalize">~ eductional tour ~</h1>
            <router-link to="/educational-tour" class="text-decoration-none text-dark d-flex d-md-none flex-column align-items-center">
                <span>See More</span>
                <img src="/img/travel/right-arrow.svg" style="width:20px;">
            </router-link>
        </div>
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
                                <!-- <i class="bi" :class="icon.icon"></i> -->
                                <img :src="icon.image" :alt="icon.name"
                                    style="width:20px; height: 20px;object-fit: contain;">
                                <small class="smaller text-capitalize">{{ icon.name }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-success border-secondary px-1 rounded-0" @click="enquiry(fair)">
                            <!-- <i class="bi bi-whatsapp"></i> -->
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
            <div class="col-md-2 mt-2 d-none d-md-block">
                <router-link to="/educational-tour" class="dummy-card border d-flex flex-column justify-content-center align-items-center">
                    <span class="me-2 text-uppercase fs-4"> see more</span> <img src="/img/travel/right-arrow.svg"
                        style="width:40px;">
                </router-link>
            </div>
        </div>
    </div>
    <div class="container my-5">
        <div class="d-flex justify-content-between align-items-center"> 
            <h1 class="text-center text-capitalize">~ flight services ~</h1>
            <router-link to="/flight-services" class="text-decoration-none text-dark d-flex d-md-none flex-column align-items-center">
                <span>See More</span>
                <img src="/img/travel/right-arrow.svg" style="width:20px;">
            </router-link>
        </div>
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
                                <!-- <i class="bi" :class="icon.icon"></i> -->
                                <img :src="icon.image" :alt="icon.name"
                                    style="width:20px; height: 20px;object-fit: contain;">
                                <small class="smaller text-capitalize">{{ icon.name }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-success border-secondary px-1 rounded-0" @click="enquiry(fair)">
                            <!-- <i class="bi bi-whatsapp"></i> -->
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
            <div class="col-md-2 mt-2 d-none d-md-block">
                <router-link to="/flight-services" class="dummy-card border d-flex flex-column justify-content-center align-items-center">
                    <span class="me-2 text-uppercase fs-4"> see more</span> <img src="/img/travel/right-arrow.svg"
                        style="width:40px;">
                </router-link>
            </div>
        </div>
    </div>
    <div class="container my-5">
        <div class="d-flex justify-content-between align-items-center"> 
            <h1 class="text-center text-capitalize">~ visa services ~</h1>
            <router-link to="/visa-services" class="text-decoration-none text-dark d-flex d-md-none flex-column align-items-center">
                <span>See More</span>
                <img src="/img/travel/right-arrow.svg" style="width:20px;">
            </router-link>
        </div>
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
                                <!-- <i class="bi" :class="icon.icon"></i> -->
                                <img :src="icon.image" :alt="icon.name"
                                    style="width:20px; height: 20px;object-fit: contain;">
                                <small class="smaller text-capitalize">{{ icon.name }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-success border-secondary px-1 rounded-0" @click="enquiry(fair)">
                            <!-- <i class="bi bi-whatsapp"></i> -->
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
            <div class="col-md-2 mt-2 d-none d-md-block">
                <router-link to="/visa-services" class="dummy-card border d-flex flex-column justify-content-center align-items-center">
                    <span class="me-2 text-uppercase fs-4"> see more</span> <img src="/img/travel/right-arrow.svg"
                        style="width:40px;">
                </router-link>
            </div>
        </div>
    </div>
    <div class="container my-5">
        <div class="d-flex justify-content-between align-items-center"> 
            <h1 class="text-center text-capitalize">~ other services ~</h1>
            <router-link to="/other-services" class="text-decoration-none text-dark d-flex d-md-none flex-column align-items-center">
                <span>See More</span>
                <img src="/img/travel/right-arrow.svg" style="width:20px;">
            </router-link>
        </div>
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
                                <!-- <i class="bi" :class="icon.icon"></i> -->
                                <img :src="icon.image" :alt="icon.name"
                                    style="width:20px; height: 20px;object-fit: contain;">
                                <small class="smaller text-capitalize">{{ icon.name }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-success border-secondary px-1 rounded-0" @click="enquiry(fair)">
                            <!-- <i class="bi bi-whatsapp"></i> -->
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
            <div class="col-md-2 mt-2 d-none d-md-block">
                <router-link to="/other-services" class="dummy-card border d-flex flex-column justify-content-center align-items-center">
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
            icons: [
                { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
                { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
                { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
                { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
                { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
            ]
        }
    },
    computed: {
        trades() {
            return this.$store.getters.getTrades;
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
    height: 321px
}

@media(max-width:768px) {
    .dummy-card {
        height: 150px !important
    }
}
</style>
