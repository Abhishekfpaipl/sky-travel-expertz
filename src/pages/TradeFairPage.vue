<template>
    <div style="padding-top: 68px;">
        <div class="position-relative" style="width: 100%; overflow: hidden;">
            <img src="/img/tradeFair.jpg" alt="" style="width: 100%;">
            <div class="overlay"></div>
            <p class="position-absolute fw-bold text-white fs-1 centered-text">
                {{ pageName }}
            </p>
        </div>
        <div class="container my-3">
            <p class="p-2 text-center mt-3 mb-0 bill text-style">
                <span class="fs-5">WHAT ARE YOU LOOKING FOR?</span>
            </p>
            <div class="row">
                <div class="col-12 col-md-8">
                    <ul class="nav nav-pills justify-content-start align-items-center sticky-nav" id="pills-tab"
                        role="tablist">
                        <div class="d-flex overflow-x-scroll gap-3 my-3 p-2 px-3 rounded" id="scroll">
                            <li class="nav-item" role="presentation" v-for="(price, index) in itinerary" :key="index"
                                style="">
                                <button class="nav-link d-inline-flex align-items-center justify-content-center px-2"
                                    :class="{ 'active': index === activeTabIndex }" :id="'tab-' + index"
                                    data-bs-toggle="pill" :data-bs-target="'#content-' + index" type="button" role="tab"
                                    :aria-controls="'content-' + index" :aria-selected="index === activeTabIndex"
                                    @click="onTabClick(index)">{{ price.name
                                    }}</button>
                            </li>
                        </div>
                    </ul>
                    <div class="tab-content pb-5" id="pills-tabContent">
                        <div class="tab-pane fade" :class="{ 'show active': index === activeTabIndex }"
                            v-for="(price, index) in itinerary" :key="index" :id="'content-' + index" role="tabpanel"
                            :aria-labelledby="'tab-' + index" tabindex="0">
                            <div class="container">
                                <div class="row" v-for="(day, index) in test" :key="index">
                                    <div class="col-12 mb-4">
                                        <div class="card">
                                            <div class="card-header text-bg-warning">
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
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 mt-5">
                    <div class="col-12 my-2">
                        <button class="btn btn-outline-dark py-2 fs-5 w-100 rounded-0" type="submit">Enquire
                            Now</button>
                        <div class="fs-1 my-3">----or----</div>
                        <button class="btn btn-outline-dark py-2 fs-5 w-100 rounded-0" type="submit">Book
                            package</button>
                    </div>
                    <form @submit.prevent="submitEnquiry()" class="mt-4 row g-3 needs-validation" novalidate>
                        <div class="w-100 form-floating my-2">
                            <input type="text" class="form-control" placeholder="" v-model="name" required>
                            <label for="floatingInput" class="text-muted ms-2">Name</label>
                        </div>
                        <div class="w-100 form-floating my-2">
                            <input type="email" class="form-control" placeholder="" v-model="email" required>
                            <label for="floatingInput" class="text-muted ms-2">Email</label>
                        </div>
                        <div class="w-100 form-floating my-2">
                            <input type="tel" class="form-control" placeholder="Mobile" v-model="number" required>
                            <label class="ms-2 text-muted">Mobile No</label>
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
                            <input type="date" class="form-control" placeholder="Mobile" v-model="number" required>
                            <label class="ms-2 text-muted"></label>
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
                            <label for="floatingTextarea" class="ms-2 text-muted">Customise Package...</label>
                        </div>

                    </form>
                </div>
            </div>
        </div>

        <div class="position-fixed bottom-0 w-100 d-flex d-md-none" style="z-index:10">
            <button class="btn btn-warning w-100 rounded-0">Enquiry</button>
        </div>
        <!-- 
        <div class="container">

        </div>
        <div class="container my-3">
            <p class="fw-bold mb-0 text-center text-danger text-capitalize fs-4">contact details</p>
            <div class="my-3">
                <i class="bi bi-person bg-warning wh-40 rounded-circle px-2 py-1"></i>
                <span> +918318599577</span>
            </div>
            <div class="my-3">
                <i class="bi bi-telephone bg-warning wh-40  rounded-circle px-2 py-1"></i>
                <span> +918318599577</span>
            </div>
            <div class="my-3">
                <i class="bi bi-envelope bg-warning wh-40 rounded-circle px-2 py-1"></i>
                <span> support@skytravelexpertz.com</span>
            </div>
        </div> -->

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
        let pageName = this.$route.path.split('/trade-fair/').pop();
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

.sticky-nav {
    position: sticky;
    top: 65px !important;
    z-index: 2;
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
