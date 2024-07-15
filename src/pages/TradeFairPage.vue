<template>
    <div>
        <div class="position-relative" style="width: 100%; overflow: hidden;">
            <img src="/img/tradeFair.jpg" alt="" style="width: 100%;">
        </div>
        <div class="container my-3">
            <h1 class="text-center text-capitalize">{{ pageName }}</h1>
            <p class="text-center fs-4">₹ 9999/- <span class="text-decoration-line-through text-muted">₹
                    12000</span></p>
            <div class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ea laboriosam corporis
                aspernatur velit voluptas minus obcaecati fugit ipsum. Iusto ducimus rem iste quibusdam modi atque! Sunt
                sint reprehenderit dignissimos illum cumque possimus sit quia odio, officia eum? Exercitationem
                blanditiis hic quasi, tenetur aliquam aliquid illo non reiciendis perspiciatis soluta!
            </div>
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

        <div class="container bg-dark sticky-nav my-4">
            <ul class="nav nav-pills d-flex justify-content-center align-items-center">
                <div class="d-flex overflow-x-scroll gap-3 p-2 px-3 rounded" id="scroll">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#Details">Details</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#Itinerary">Itinerary</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#Hotel">Hotel</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#Flight">Flight</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#Visa">Visa</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#Inclusion">Inclusion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#Exclusion">Exclusion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#TermCondition">Term</a>
                    </li>
                </div>
            </ul>
        </div>
        <div data-bs-spy="scroll" data-bs-target="#scroll" data-bs-offset="0" class="scrollspy-example p-3 rounded-2"
            tabindex="0">
            <div class="container" style="padding-top:45px" id="Details">
                <h3 class="p-2 text-center mb-4 cutout">
                    <span>Details</span>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est culpa natus sed excepturi magni
                    eos
                    deleniti error voluptatem maiores voluptatum sunt iste incidunt quasi quia, quam impedit? Ut, modi
                    rerum
                    itaque reprehenderit obcaecati sequi, praesentium iure odio iusto accusantium reiciendis odit, nemo
                    unde
                    provident veniam? Animi, sed. Repudiandae voluptatibus quibusdam maxime minus ex esse ea consectetur
                    cupiditate, doloremque perferendis laudantium animi possimus rerum omnis dolore, illum provident
                    harum
                    aliquid debitis! Laborum maiores, distinctio quae consequatur et eum accusantium eaque eveniet
                    laudantium a fugiat blanditiis delectus adipisci impedit dignissimos atque officiis, esse dolores
                    dolor
                    iusto, fuga reprehenderit ratione porro? Nisi.</p>
            </div>

            <div class="container" style="padding-top:45px" id="Itinerary">
                <h3 class="p-2 text-center my-4 cutout">
                    <span>Itinerary</span>
                </h3>
                <div class="row" v-for="(day, index) in test" :key="index">
                    <div class="col-12 mb-4">
                        <div class="card">
                            <div class="card-header text-bg-light">
                                Day {{ index + 1 }}
                            </div>
                            <div class="card-body">
                                <div class="row d-flex align-items-center"
                                    :class="{ 'flex-row-reverse': index % 2 !== 0 }">
                                    <div class="col-md-4 mb-3 mb-md-0">
                                        <img :src="day.image" class="img-fluid rounded"
                                            style="width:250px; height:160px;object-fit: fill;"
                                            :alt="'Day ' + (index + 1)">
                                    </div>
                                    <div class="col-md-8">
                                        <h5 class="card-title text-start">{{ day.date }}</h5>
                                        <p class="card-text text-start">{{ day.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container" style="padding-top:45px" id="Hotel">
                <h3 class="p-2 text-center my-4 cutout">
                    <span>Hotel</span>
                </h3>
                <TradeFairFGallerySection />
            </div>

            <div class="container" style="padding-top:45px" id="Flight">
                <h3 class="p-2 text-center my-4 cutout">
                    <span>Flight</span>
                </h3>
                <TradeFairTableSection />
            </div>

            <div class="container" style="padding-top:45px" id="Visa">
                <h3 class="p-2 text-center my-4 cutout">
                    <span>Visa</span>
                </h3>
                <TradeFairVisaSection />
            </div>

            <div class="container" style="padding-top:45px" id="Inclusion">
                <h3 class="p-2 text-center my-4 cutout">
                    <span>Inclusion</span>
                </h3>
                <TradeFairInclusionSection />
            </div>

            <div class="container" style="padding-top:45px" id="Exclusion">
                <h3 class="p-2 text-center my-4 cutout">
                    <span>Exclusion</span>
                </h3>
                <TradeFairExclusionSection />
            </div>

            <div class="container" style="padding-top:45px" id="TermCondition">
                <h3 class="p-2 text-center my-4 cutout">
                    <span>Term & Condition</span>
                </h3>
                <TradeFairTermsSection />
            </div>
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
                    <!-- <button type="button" class="btn-close position-absolute end-0 border rounded-circle p-2 bg-danger"
                        style="top: -2%"  aria-label="Close"></button> -->
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
import TradeFairFGallerySection from "@/components/TradeFairFGallerySection.vue"
import TradeFairTableSection from "@/components/TradeFairFlightSection.vue"
import TradeFairTermsSection from "@/components/TradeFairTermsSection.vue"
import TradeFairVisaSection from "@/components/TradeFairVisaSection.vue"
import TradeFairExclusionSection from "@/components/TradeFairExclusionSection.vue"
import TradeFairInclusionSection from "@/components/TradeFairInclusionSection.vue"
export default {
    name: "TradeFairPage",
    components: {
        TradeFairFGallerySection,
        TradeFairTableSection,
        TradeFairTermsSection,
        TradeFairVisaSection,
        TradeFairExclusionSection,
        TradeFairInclusionSection,
    },
    data() {
        return {
            pageName: "",
            searchTerm: '',
            activeTabIndex: 0,
            selectedVisitor: '1-2',
            destination: 'Amazing Dubai',
            date: '',
            test: [
                {
                    date: '(18 Sep 2024): Arrival in Shanghai',
                    description: 'Board your flights from Delhi or Mumbai to Shanghai. Upon arrival in Shanghai clear immigration and assemble together for the transfer from airport to hotel in a comfortable coach. Check in at the hotel, settle in and relax after your journey. In the evening, a delicious Indian dinner will be served at an Indian Restaurant. Rest of the evening is at leisure to explore the nearby destination. Enjoy a comfortable overnight stay at your hotel.',
                    image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                },
                {
                    date: '(19 Sep 2024): Productive Start!',
                    description: 'Post having delicious breakfast at your hotel, Gear up for Exhibition! Immerse yourself in the future of signage and visual communication. Explore cutting-edge machinery, innovative materials, and groundbreaking technologies. Network with professionals and gain valuable insights that will propel you forward. After a day filled with discovery, unwind and relax at your hotel. In the evening, savor a delightful dinner at an Indian Restaurant, allowing you to reflect and connect with colleagues over delicious food. Rest comfortably, ready to conquer another day at the exhibition.',
                    image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                },
                {
                    date: '(20 Sep 2024): Exploring More of Sign & Led China!',
                    description: 'Another day of exploration with breakfast at your hotel. Today is yours to conquer the exhibition! Here\'s how to make the most of it: Revisit exhibitors: Follow up on promising leads or revisit booths that sparked your interest yesterday. Expand your knowledge: Attend seminars led by industry experts and gain valuable insights into the latest trends and technologies. Network: Connect with peers who share your interests. Unwind and Recharge: After a day of learning and networking, head back to your hotel for some well-deserved relaxation. Enjoy a comforting dinner at an Indian Restaurant. Get a good night\'s sleep, preparing yourself for the final day of the exhibition.',
                    image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                },
                {
                    date: '(21 Sep 2024): Balancing Business',
                    description: 'Pleasure Start your day with a breakfast at the hotel. Morning at Exhibition: Deepen your knowledge: Head back to the exhibition and attend targeted seminars, reconnect with key exhibitors, or delve deeper into specific areas that pique your interest. Unwind on the Huangpu River: Embark on a scenic cruise along the Huangpu River. Glide along the majestic Huangpu River, offering breathtaking panoramic views of the city skyline, including iconic landmarks like The Bund and Oriental Pearl Tower. Evening: After your enriching city exploration, return to your hotel and unwind. Enjoy a delicious dinner at an Indian Restaurant. Rest comfortably for your final night in Shanghai.',
                    image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                },
                {
                    date: ' (22 Sep 2024): Departure from Shanghai! ',
                    description: 'Savor a final delicious breakfast at your hotel. Check out of the hotel and ensure you have collected all your belongings. Mid-Morning: AP Market Adventure: Immerse yourself in the vibrant atmosphere of the AP Market. Hunt for unique souvenirs and local handicrafts to commemorate your trip. Tantalize your taste buds with a delicious array of Shanghai Street food. Afternoon: Relaxing Transfer: A comfortable coach will take you directly to Shanghai Airport, ensuring a stress-free journey. Enjoy your flight back home, reflecting on the insightful experiences and connections you made at Sign & Led China 2024 and your exploration of Shanghai.',
                    image: 'https://rctrips.com/assets/itinerary/airport32.jpg'
                }
            ]
        }
    },
    computed: {
        itinerary() {
            return this.$store.getters.getItinerary
        }
    },
    mounted() {
        let pageName = this.$route.path.split('/trade-detail/').pop();
        this.pageName = pageName.replace(/-/g, ' ');
    },
    methods: {
        onTabClick(index) {
            this.activeTabIndex = index;
            this.scrollTabIntoView(index);
        },
        scrollTabIntoView(index) {
            const tabElement = document.getElementById(`tab-${index}`);
            if (tabElement) {
                tabElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
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
.nav-pills .nav-link.active {
    background-color: transparent !important;
    border-bottom: 2px solid white !important;
    border-radius: 0px !important;
}

.sticky-nav {
    position: sticky;
    top: 0px !important;
    z-index: 2;
    background-color: white;
}
</style>
