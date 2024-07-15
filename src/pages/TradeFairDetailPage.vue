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
                    <i class="btn border bi bi-arrow-down-up" data-bs-toggle="offcanvas" data-bs-target="#sort"
                        aria-controls="sort" @click="toggleSortOrder"></i>
                    <i class="btn border bi bi-funnel" data-bs-toggle="offcanvas" data-bs-target="#filter"
                        aria-controls="filter"></i>
                </div>
            </div>
            <div class="form-floating my-2 w-100 pt-1">
                <select v-model="selectedService" class="form-control rounded-0">
                    <option v-for="service in services" :key="service" :value="service" class="text-capitalize">
                        {{ service }}</option>
                </select>
                <label for="">Package</label>
            </div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="filter" aria-labelledby="filterLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="filterLabel">Filters</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="mb-3">
                        <label for="country" class="form-label">Country</label>
                        <select v-model="selectedCountry" class="form-select" id="country">
                            <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="startDate" class="form-label">Start Date</label>
                        <input type="date" v-model="startDate" class="form-control" id="startDate">
                    </div>
                    <div class="mb-3">
                        <label for="endDate" class="form-label">End Date</label>
                        <input type="date" v-model="endDate" class="form-control" id="endDate">
                    </div>
                    <div class="mb-3">
                        <label for="minPrice" class="form-label">Min Price</label>
                        <input type="number" v-model="minPrice" class="form-control" id="minPrice">
                    </div>
                    <div class="mb-3">
                        <label for="maxPrice" class="form-label">Max Price</label>
                        <input type="number" v-model="maxPrice" class="form-control" id="maxPrice">
                    </div>
                </div>
            </div>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="sort" aria-labelledby="sortLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="sortLabel">Sort</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <!-- Sorting Options can be added here -->
                </div>
            </div>

            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-1 my-4">
                <div class="col" v-for="(fair, index) in sortedFilteredTrades" :key="index">
                    <router-link :to="'/trade-fair/' + fair.slug"
                        class="text-decoration-none my-2 card shadow-lg position-relative rounded-0 overflow-hidden">
                        <div class="card-img-container">
                            <img :src="fair.image" class="card-img-top rounded-0" alt="..."
                                style="object-fit: fill;height: 150px;">
                        </div>
                        <div class="card-body p-2">
                            <div class="d-flex justify-content-center align-items-center fw-bold text-ellipsis2 text-center small"
                                style="min-height: 50px">{{ fair.title }}</div>
                            <p class="small my-0 text-ellipsis2">{{ fair.date }}</p>
                            <p class="small my-0 text-ellipsis2">{{ fair.country }}</p>
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
            selectedCountry: '',
            startDate: '',
            endDate: '',
            minPrice: 0,
            maxPrice: 100000,
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
            countries: [
                "India",
                "USA",
                "Germany",
                "France",
                "Japan"
            ],
        }
    },
    computed: {
        trades() {
            return this.$store.getters.getPackage;
        },
        filteredTrades() {
            return this.trades.filter(fair => {
                // Always include if no filters are applied
                if (!this.searchTerm && !this.selectedService && !this.selectedCountry &&
                    !this.startDate && !this.endDate && this.minPrice === 0 && this.maxPrice === 100000) {
                    return true;
                }

                const titleMatch = this.searchTerm ?
                    fair.title.toLowerCase().includes(this.searchTerm.toLowerCase()) : false;

                const serviceMatch = this.selectedService ?
                    fair.package === this.selectedService : false;

                const countryMatch = this.selectedCountry ?
                    fair.country === this.selectedCountry : false;

                // Parse the date string
                const fairDate = this.parseDate(fair.date);
                const startDateMatch = this.startDate ?
                    fairDate >= new Date(this.startDate) : false;
                const endDateMatch = this.endDate ?
                    fairDate <= new Date(this.endDate) : false;

                // Parse the price string
                const fairPrice = parseInt(fair.price.replace(/[^\d]/g, ''));
                const priceMatch = (fairPrice >= this.minPrice && fairPrice <= this.maxPrice) &&
                    (this.minPrice !== 0 || this.maxPrice !== 100000);

                // Return true if any of the filters match
                return titleMatch || serviceMatch || countryMatch ||
                    startDateMatch || endDateMatch || priceMatch;
            });
        },
        sortedFilteredTrades() {
            return [...this.filteredTrades].sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return this.sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
            });
        }
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
        parseDate(dateString) {
            const parts = dateString.split(' ');
            const lastPart = parts[parts.length - 1];
            if (parts.length === 3) {
                // Format: "19-21 Sept 2024"
                return new Date(lastPart, this.getMonthNumber(parts[1]), parseInt(parts[0].split('-')[0]));
            } else if (parts.length === 4) {
                // Format: "15-19 23-27 Oct 2024"
                return new Date(lastPart, this.getMonthNumber(parts[2]), parseInt(parts[0].split('-')[0]));
            }
            // Add more cases if there are other date formats
            return new Date(dateString);
        },
        getMonthNumber(monthStr) {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return months.indexOf(monthStr.substring(0, 3));
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
