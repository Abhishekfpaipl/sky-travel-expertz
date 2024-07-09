<template>
    <div style="padding-top: 68px;">
        <div class="position-relative" style="width: 100%; overflow: hidden;">
            <img src="/img/tradeFair.jpg" alt="" style="width: 100%;">
            <div class="overlay"></div>
            <p class="position-absolute fw-bold text-white" style="top: 40%; left: 5%; z-index: 2;">{{ pageName }}
            </p>
        </div>
        <div class="my-3">
            <p class="p-2 text-center mt-3 mb-0 bill text-style">
                <span class="fs-5">WHAT ARE YOU LOOKING FOR?</span>
            </p>
            <div>
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, quisquam numquam. Eius
                        odio debitis quam deserunt amet non cupiditate molestias aut facilis tenetur earum rem
                        deleniti sunt, voluptatum quod sed minima nobis quis tempora! Perspiciatis aut quia soluta
                        libero neque ab rerum eius, est, nemo quibusdam, eligendi deserunt id nobis fugit magnam eum
                        illo molestiae error odit! Eos ab praesentium error cupiditate quod necessitatibus natus
                        asperiores in illum quidem aut dolorum quisquam repellendus nihil autem vero hic, maxime quo
                        odio soluta reiciendis nulla deserunt sit. Ducimus molestias error consequatur, numquam
                        itaque dolorum facere sed expedita! Asperiores rem laborum illo at.
                    </div>
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
            activeTabIndex: 0
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
</style>
