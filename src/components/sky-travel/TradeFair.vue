<template>
    <div class="container">
        <h1 class="text-center text-capitalize">upcoming trade fair</h1>
        <small>At Red Carpet Tours (RCTRIPS), we empower businesses at global trade fairs with comprehensive travel
            packages, including flights, accommodation, and meals. Our competitive rates and seamless logistics let you
            focus on achieving your business goals. Our portfolio features top trade fairs like Canton Fair, CPHI
            Worldwide, Chinaplas, China Glass, Medica, and Drupa. Connect with clients, explore new markets, and gain
            industry insights with RCTRIPS.</small>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-1 my-4">
            <div class="col" v-for="(fair, index) in trades" :key="index">
                <router-link :to="'/trade-fair/' + fair.slug"
                    class="text-decoration-none my-2 card shadow-lg position-relative rounded-0 overflow-hidden">
                    <div class="card-img-container">
                        <img :src="fair.image" class="card-img-top rounded-0" alt="..."
                            style="object-fit: fill; height: 13rem;">
                    </div>
                    <div class="card-body">
                        <p class="">{{ fair.title }}</p>
                        <p class="card-text mb-0"><i class="bi bi-calendar"></i> {{ fair.date }}</p>
                        <p class="card-text mb-0"><strong>₹ {{ fair.price }}</strong></p>
                        <div class="d-flex justify-content-center align-items-center gap-3 mt-3 flex-wrap">
                            <div class="d-flex flex-column justify-content-center align-items-center" v-for="(icon, index) in icons" :key="index">
                                <!-- <i class="bi" :class="icon.icon"></i> -->
                                <img :src="icon.image" :alt="icon.name" style="width:15px; height: 15px;object-fit: contain;">
                                <small class="smaller text-capitalize">{{ icon.name }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="btn-group gap-2 p-3 pt-0">
                        <router-link to="" class="btn btn-warning rounded-start-5 px-1"> Read
                            More
                        </router-link>
                        <button class="btn btn-outline-warning rounded-end-5 px-1" @click="enquiry(fair)">Enquire
                            Now</button>
                    </div>
                    <div class="position-absolute text-center start-0 ms-0" style="top: -2px;">
                        <span class="text-white bg-warning p-1 pt-0 rounded-end-3">tag here</span>
                    </div>
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
                { icon: 'bi-globe', image:"img/travel/flight.svg", name: 'flight' },
                { icon: 'bi-globe', image:"img/travel/hotel.svg", name: 'hotel' },
                { icon: 'bi-globe', image:"img/travel/sight.svg", name: 'Sightseeing' },
                { icon: 'bi-globe', image:"img/travel/meal.svg", name: 'meal' },
                { icon: 'bi-globe', image:"img/travel/visa.svg", name: 'visa' },
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
    height: 200px;
    /* Adjust this value to fit your design */
}

.card-img-top {
    transition: transform 0.3s ease;
}

.card-img-container:hover .card-img-top {
    transform: scale(1.1);
}
</style>
