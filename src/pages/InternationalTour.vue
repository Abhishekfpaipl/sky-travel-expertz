<template>
    <div>
        <div class="container my-3">
            <div class="d-flex justify-content-between align-items-center gap-4">
                <div class="input-group border">
                    <input type="text" v-model="searchTerm" class="form-control bg-light border-0"
                        placeholder="Search...">
                    <button class="btn btn-dark rounded-0" type="button">
                        <i class="bi bi-search"></i>
                    </button>
                </div>

                <div class="d-flex gap-3">
                    <i class="btn border bi bi-arrow-down-up" @click="toggleSortOrder"></i>
                    <i class="btn border bi bi-funnel" data-bs-toggle="offcanvas" data-bs-target="#sort"
                        aria-controls="sort"></i>
                </div>
            </div>
            <div class="form-floating my-2 w-100 pt-1">
                <select v-model="selectedService" class="form-control rounded-0">
                    <option v-for="service in services" :key="service" :value="service" class="text-capitalize">{{
                        service }}</option>
                </select>
                <label for="">Package</label>
            </div>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="sort" aria-labelledby="sortLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="sortLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <!-- Offcanvas content -->
                </div>
            </div>

            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-1 my-4">
                <div class="col" v-for="(fair, index) in filteredTrades" :key="index">
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
                                <div class="d-flex flex-column justify-content-center align-items-center"
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
            selectedService: '',
            sortOrder: 'asc',
            services: [
                "trade fair",
                "honeymoon tour",
                "domestic tour",
                "international tour",
                "educational tour",
                "flight services",
                "visa services",
                "other services"
            ],
        }
    },
    computed: {
        trades() {
            return this.$store.getters.getPackage;
        },
        filteredTrades() {
            return this.trades.filter(fair => {
                const titleMatch = fair.title && fair.title.toLowerCase().includes(this.searchTerm.toLowerCase());
                const serviceMatch = this.selectedService ? fair.package === this.selectedService : true;
                return titleMatch && serviceMatch;
            });
        },
        // sortedFilteredTrades() {
        //     return this.filteredTrades.sort((a, b) => {
        //         const dateA = new Date(a.date);
        //         const dateB = new Date(b.date);
        //         return this.sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        //     });
        // }
    },
    mounted() {
        let pageName = this.$route.path.split('/').pop();
        this.pageName = pageName.replace(/-/g, ' ');
        this.selectedService = this.pageName;
    },
    methods: {
        toggleSortOrder() {
            this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        },
        enquiry() {
            // Handle the enquiry
        }
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
</style>
