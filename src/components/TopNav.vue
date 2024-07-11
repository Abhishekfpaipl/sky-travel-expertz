<template>
    <!-- Desktop version -->
    <div class="d-lg-block d-none position-fixed top-0 w-100 bg-light border-bottom" style="z-index: 10;">
        <nav class="navbar navbar-expand-lg py-3">
            <div class="container-fluid d-flex justify-content-center align-items-center">
                <router-link to="/" class="d-flex align-items-center w-25 text-decoration-none">
                    <img src="/img/logo.png" style="width: 40px;">
                    <span class="ms-2 text-dark">Sky Travel Expertz</span>
                </router-link>

                <div class="w-75">
                    <ul class="list-unstyled mb-0 d-flex justify-content-end">
                        <li v-for="(cat, index) in menuCategories" :key="index"
                            class="category d-inline position-relative" >
                            <router-link :to="cat.path" class="title px-2 text-decoration-none text-dark">
                                {{ cat.title }}
                            </router-link>
                              
                            <div class="mega-menu " style="background-color: #FFF5DD;">
                                <div v-if="cat.subCat" class="px-4">
                                    <ul class="d-flex  list-unstyled mega-items flex-wrap py-4">
                                        <li v-for="(subCat, index) in cat.subCat" :key="index"
                                            class="py-2 px-3 text-capitalize">
                                            <router-link :to="subCat.path" class="text-decoration-none ">
                                                <a :href="subCat.path" class="sub-title fw-bold text-decoration-none text-dark">{{
                                                    subCat.name }}</a>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    <!-- Mobile version -->
    <div class="d-flex justify-content-between d-lg-none p-2 position-fixed top-0 w-100 bg-light py-3 border-bottom"
        style="z-index: 8;">
        <router-link to="/" class="text-decoration-none ">
            <img src="/img/logo.png" style="height: 40px;">
            <span class="ms-2 text-dark">Sky Travel Expertz</span>
        </router-link>
        <i class="bi bi-list fs-1 text-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"></i>

        <div class="offcanvas offcanvas-end bg-light" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel" style="">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body bg-light">
                <ul class="nav nav-pills flex-column mb-auto">
                    <li v-for="(link, index) in menuCategories" :key="index" class="nav-item my-1 border-bottom">
                        <button @click="selectMenu(index)"
                            :class="{ 'btn-warning': selectedMenu === index, 'text-dark': selectedMenu !== index }"
                            class="btn rounded border-0 w-100">
                            <div class="btn-toggle collapsed" data-bs-toggle="collapse"
                                :data-bs-target="'#home-collapse' + index" aria-expanded="false">
                                <div class="d-flex align-items-center">
                                    <!-- <i class="bi pe-2 fs-5 lh-1 bi-arrow-right"></i> -->
                                    <span>{{ link.title }}</span>
                                </div>
                            </div>
                        </button>
                        <div class="ms-3 ps-3 collapse show" :id="'home-collapse' + index">
                            <ul class="btn-toggle-nav list-unstyled">
                                <li v-for="(sub, subIndex) in link.subCat" :key="subIndex" class="mt-1">
                                    <button @click="selectSubMenu(sub.name)" class="btn rounded border-0 w-100">
                                        <router-link :to="sub.path"
                                            class="border-top pt-2 pb-0 d-flex align-items-center text-capitalize text-decoration-none text-dark">
                                            <i class="bi pe-2 fs-5 lh-1 bi-arrow-right"></i>
                                            <span>{{ sub.name }}</span>
                                        </router-link>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            hoveredCategoryIndex: -1,
            selectedMenu: null,
            selectedSubMenu: null,
            menuCategories: [
                {
                    id: 2,
                    title: 'Home',
                    path: '/',
                },
                {
                    id: 1,
                    title: 'Services',
                    path:'',
                    subCat: [
                        { name: 'trade fair', path: '/trade-detail' },
                        { name: 'honeymoon tour', path: '/honeymoon-tour' },
                        { name: 'domestic tour', path: '/domestic-tour' },
                        { name: 'international tour', path: '/international-tour' },
                        { name: 'eductional tour', path: '/educational-tour' },
                        { name: 'flight services', path: '/flight-services' },
                        { name: 'visa services', path: '/vis-services' },
                        { name: 'other services', path: '/other-services' },
                    ],
                },
                {
                    id: 3,
                    title: 'Contact Us',
                    path: '/contact-us',
                },
                {
                    id: 4,
                    title: 'About Us',
                    path: '/about-us',
                },
            ],
        };
    },
    computed: {
        mainMenu() {
            return this.$store.getters.mainMenu
        },
    },
    methods: {
        toggleMainMenu() {
            this.$store.dispatch('toggleMainMenu');
        },
        setHoveredCategory(index) {
            this.hoveredCategoryIndex = index;
        },
        clearHoveredCategory() {
            this.hoveredCategoryIndex = -1;
        },
        selectMenu(index) {
            this.selectedMenu = index;
        },
        selectSubMenu(name) {
            this.selectedSubMenu = name;
        },
    },
}
</script>

<style scoped>
.mega-menu {
    display: none;
    position: fixed;
    top: 46px;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 3;
    width: 100vw;
}

.category:hover .title {
    color: rgb(255, 162, 0) !important;
    border-bottom: 2px solid rgb(255, 162, 0) !important;
}
.sub-title:hover  {
    color: rgb(255, 162, 0) !important;
    border-bottom: 2px solid rgb(255, 162, 0) !important;
}

.category:hover .mega-menu {
    display: block;
}

.accordion-button:focus {
    box-shadow: none !important
}

.accordion-button:not(.collapsed) {
    background-color: transparent;
    box-shadow: none;
}

.accordion-button::after {
    display: none;
}

.accordion-item .accordion-button {
    background-color: transparent;
}
</style>