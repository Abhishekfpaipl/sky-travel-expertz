<template>
    <div>
        <div class="position-relative" style="width: 100%; overflow: hidden;">
            <img :src="showPackage.image" class="" alt="" style="width: 100%;">
            <!-- <img :src="showPackage.image" class="d-md-none" alt="" style="width: 100%;object-fit:contain;object-position: center;"> -->
        </div>
        <!-- {{showPackage.sid}} -->
        <div class="container my-3">
            <h1 class="text-center text-capitalize">{{ pageName }}</h1>
            <p class="text-center fs-1">₹ 9999/- <span class="text-decoration-line-through text-muted">₹
                    12000</span></p>
            <div class="my-4">{{ showPackage.description }}</div>
            <div class="d-none d-md-flex justify-content-center align-items-center gap-3">
                <a href="/img/demo.pdf" download="file.pdf" class="btn w-25"
                    style="border:1px solid rgba(255, 162, 0, 1) !important;">
                    <i class="bi bi-download me-2"></i>
                    <span>Download</span>
                </a>
                <button class="btn d-flex justify-content-center align-items-center w-25"
                    style="background-color:rgba(255, 206, 86, 1); border:1px solid rgba(255, 162, 0, 1) !important;"
                    data-bs-toggle="modal" data-bs-target="#enquirymodal"><span> Enquiry </span><i
                        class="bi bi-arrow-right ms-2"></i>
                </button>
            </div>
        </div>

        <!-- <nav id="navbar" :class="{ 'navbar-dark': navbarDark }"> -->
        <div class="sticky-nav my-4">
            <div class="d-flex gap-3 p-3 py-2 overflow-x-scroll" id="scroll"
                style="background-color:rgba(255, 206, 86, 0.2); border:1px solid rgba(255, 206, 86, 1) !important;">
                <div v-for="(section, index) in sections" :key="index">
                    <a :href="'#' + section.id" class="nav-link text-dark" @click.prevent="scrollToSection(section.id)"
                        :class="{ active: activeSection === section.id }">
                        {{ section.name }}
                    </a>
                </div>
            </div>
        </div>
        <!-- </nav> -->

        <div class="container">
            <section v-for="(section, index) in sections" :key="index" :id="section.id" class="section"
                style="padding-top:30px">
                <h3 class="p-2 text-center my-4 cutout">
                    <span>{{ section.name }}</span>
                </h3>
                <component :is="section.component" :product="showPackage"></component>
            </section>
        </div>

        <div class="position-fixed bottom-0 w-100 btn-group d-flex d-md-none" style="z-index:10">
            <a href="/img/demo.pdf" download="file.pdf" class="btn btn-dark w-25 rounded-0"><i
                    class="bi bi-download fs-2"></i></a>
            <button class="btn btn-warning w-75 rounded-0 d-flex align-items-center justify-content-center"
                data-bs-toggle="modal" data-bs-target="#enquirymodal">
                <span class="text-dark fs-5">₹ 9999</span>
                <span class="ms-2 fs-5">Enquiry</span>
                <i class="bi bi-arrow-right ms-2 fs-1"></i>
            </button>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="enquirymodal" tabindex="-1" aria-labelledby="enquirymodalLabel" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered">
                <div class="modal-content position-relative">
                    <div class="modal-header border-0 pt-4">
                        <h1 class="modal-title fs-5" id="enquirymodalLabel">{{ pageName }}</h1>
                    </div>
                    <div class="position-absolute rounded-circle wh-40 bg-danger text-white px-2 p-1 end-0"
                        data-bs-dismiss="modal" style="top: -3%;">
                        <i class="bi bi-x fs-5"></i>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="sendToWhatsApp()" class="row g-3 needs-validation" novalidate>
                            <div class="w-100 form-floating my-2">
                                <input type="text" class="form-control" placeholder="" v-model="name" required>
                                <label for="floatingInput" class="text-muted ms-2">Name</label>
                            </div>
                            <div class="form-floating my-2 ">
                                <select v-model="destination" class="form-select">
                                    <option value="Amazing Dubai">
                                        Amazing Dubai </option>
                                    <option value="Automechanika Shanghai 2024">
                                        Automechanika Shanghai 2024 </option>
                                    <option value="Ayodhya Ram Mandir">
                                        Ayodhya Ram Mandir </option>
                                    <option value="Bali With Nusa Lembongan">
                                        Bali With Nusa Lembongan </option>
                                    <option value="Bangkok Phuket Special">
                                        Bangkok Phuket Special </option>
                                    <option value="Bauma China 2024">
                                        Bauma China 2024 </option>
                                    <option value="Bearing Expo 2024">
                                        Bearing Expo 2024 </option>
                                    <option value="Best Of Bali">
                                        Best Of Bali </option>
                                    <option value="Canton Fair Phase 1">
                                        Canton Fair Phase 1 </option>
                                    <option value="Canton Fair Phase 2">
                                        Canton Fair Phase 2 </option>
                                    <option value="CHINACOAT 2024">
                                        CHINACOAT 2024 </option>
                                    <option value="CMEF China 2024">
                                        CMEF China 2024 </option>
                                    <option value="CPHI Milan Exhibitor Package">
                                        CPHI Milan Exhibitor Package </option>
                                    <option value="CPHI Milan Visitor Package">
                                        CPHI Milan Visitor Package </option>
                                    <option value="Dreamland Singapore">
                                        Dreamland Singapore </option>
                                    <option value="Exotic Andaman">
                                        Exotic Andaman </option>
                                    <option value="Fenestration Bau 2024">
                                        Fenestration Bau 2024 </option>
                                    <option value="Glasstec Dusseldorf Package 1">
                                        Glasstec Dusseldorf Package 1 </option>
                                    <option value="Glasstec Dusseldorf Package 2">
                                        Glasstec Dusseldorf Package 2 </option>
                                    <option value="Goa">
                                        Goa </option>
                                    <option value="Golden Temple">
                                        Golden Temple </option>
                                    <option value="Greece">
                                        Greece </option>
                                    <option value="Hong Kong">
                                        Hong Kong </option>
                                    <option value="ITMA ASIA &amp; CITME 2024">
                                        ITMA ASIA &amp; CITME 2024 </option>
                                    <option value="Kashmir And Vaishno Devi">
                                        Kashmir And Vaishno Devi </option>
                                    <option value="Kedarnath &amp; Badrinath">
                                        Kedarnath &amp; Badrinath </option>
                                    <option value="Leh Ladakh">
                                        Leh Ladakh </option>
                                    <option value="Mauritius">
                                        Mauritius </option>
                                    <option value="Medica Düsseldorf 2024 Package 2">
                                        Medica Düsseldorf 2024 Package 2 </option>
                                    <option value="Medica Extension Package with Paris">
                                        Medica Extension Package with Paris </option>
                                    <option value="Paradise Kashmir">
                                        Paradise Kashmir </option>
                                    <option value="RubberTech China 2024">
                                        RubberTech China 2024 </option>
                                    <option value="SIGN &amp; LED China 2024" selected="">
                                        SIGN &amp; LED China 2024 </option>
                                    <option value="Special South Africa">
                                        Special South Africa </option>
                                    <option value="Spectacular Kerala">
                                        Spectacular Kerala </option>
                                    <option value="Spectacular South Africa">
                                        Spectacular South Africa </option>
                                    <option value="Swiss And Paris">
                                        Swiss And Paris </option>
                                    <option value="Turkey">
                                        Turkey </option>
                                    <option value="Vibrant Vietnam">
                                        Vibrant Vietnam </option>
                                    <option value="Wire &amp; Tube China-2024">
                                        Wire &amp; Tube China-2024 </option>
                                </select>
                                <label class="form-label ms-2">
                                    Select your destination
                                </label>
                            </div>
                            <div class="w-100 form-floating my-2">
                                <input type="date" class="form-control" placeholder="Mobile" v-model="date" required>
                                <label class="ms-2 text-muted">Date</label>
                            </div>
                            <div class="form-floating my-2 ">
                                <select v-model="selectedVisitor" class="form-select">
                                    <option value="1-2">1-2</option>
                                    <option value="3-4">3-4</option>
                                    <option value="5-6">5-6</option>
                                    <option value="7-8">7-8</option>
                                    <option value="9-10">9-10</option>
                                    <option value=">-10">>-10</option>
                                </select>
                                <label class="form-label ms-2">
                                    Select Visiter/Exhibiter
                                </label>
                            </div>
                            <div class="w-100 form-floating my-2">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                    v-model="note"></textarea>
                                <label for="floatingTextarea" class="ms-2 text-muted">Notes...</label>
                            </div>
                            <button
                                class="d-flex justify-content-center align-items-center btn btn-success text-uppercase p-0 py-1"
                                data-bs-dismiss="modal"><i class="bi bi-whatsapp fs-5 me-4"></i> <span class="fs-5">
                                    Enquiry Now</span></button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import TradeDetailsSection from "@/components/TradeDetailsSection.vue"
import ItinerarySection from "@/components/ItinerarySection.vue"
import NewGallerySection from "@/components/NewGallerySection.vue"
import TradeHotelSection from "@/components/TradeHotelSection.vue"
import TradeOverviewSection from "@/components/TradeOverviewSection.vue"
import TradeFairVisaSection from "@/components/TradeFairVisaSection.vue"
import TradeFairInclusionSection from "@/components/TradeFairInclusionSection.vue"
import TradeFairExclusionSection from "@/components/TradeFairExclusionSection.vue"
import TradeFairTermsSection from "@/components/TradeFairTermsSection.vue"
// import TestComp from "@/components/TestComp.vue"
export default {
    name: "TradeFairPage",
    components: {
        TradeHotelSection,
        TradeOverviewSection,
        TradeFairTermsSection,
        TradeFairVisaSection,
        TradeFairExclusionSection,
        TradeFairInclusionSection,
        ItinerarySection,
        TradeDetailsSection,
        NewGallerySection,
        // TestComp,
    },
    data() {
        return {
            pageName: "",
            searchTerm: '',
            activeTabIndex: 0,
            selectedVisitor: '1-2',
            destination: 'Amazing Dubai',
            date: '',
            sections: [
                { id: 'Details', name: 'Details', component: 'TradeDetailsSection' },
                { id: 'Itinerary', name: 'Itinerary', component: 'ItinerarySection' },
                { id: 'Gallery', name: 'Gallery', component: 'NewGallerySection' },
                { id: 'Hotel', name: 'Hotel', component: 'TradeHotelSection' },
                { id: 'Overview', name: 'Overview', component: 'TradeOverviewSection' },
                { id: 'Visa', name: 'Visa', component: 'TradeFairVisaSection' },
                { id: 'Inclusion', name: 'Inclusion', component: 'TradeFairInclusionSection' },
                { id: 'Exclusion', name: 'Exclusion', component: 'TradeFairExclusionSection' },
                { id: 'TermCondition', name: 'Term', component: 'TradeFairTermsSection' }
            ],
            awards: [
                "/img/services/1.jpg",
                "/img/services/2.png",
                "/img/services/3.jpg",
                "/img/services/4.jpg",
            ],
            activeSection: '',
            navbarDark: false,
        }
    },
    computed: {
        showPackage() {
            let packageId = this.$route.params.sid;
            return this.$store.getters.getSinglePackage(packageId);
        },
        // itinerary() {
        //     return this.$store.getters.getItinerary
        // }
    },
    mounted() {
        let pageName = this.$route.path.split('/trade-detail/').pop();
        this.pageName = pageName.replace(/-/g, ' ');
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        isActive(id) {
            return this.$route.hash === "#" + id;
        },
        scrollToSection(id) {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        },
        handleScroll() {
            const scrollPosition = window.scrollY;
            this.sections.forEach(section => {
                const el = document.getElementById(section.id);
                if (el && scrollPosition >= el.offsetTop - 200) {
                    this.activeSection = section.id;
                }
            });
            // Change navbar background color conditionally
            this.navbarDark = scrollPosition > 50; // Example threshold for changing navbar background
        },
        sendToWhatsApp() {
            const phoneNumber = '918860012001';
            const message = `Name: ${this.name}%0A
            Destination: ${this.destination}%0A
            Date: ${this.date}%0A
            Visitors: ${this.selectedVisitor}%0A
            Package: ${this.pageName}%0A
            Note: ${this.note}`;

            const url = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(url, '_blank');
        }
    }
}
</script>
<style scoped>
.nav-link {
    color: black;
    text-decoration: none;
    padding: 5px 10px;
}

.nav-link.active {
    border-bottom: 2px solid black;
}

.sticky-nav {
    position: sticky;
    top: 0px !important;
    z-index: 2;
    background-color: white;
}
</style>