<template>
    <nav id="navbar-example2" class="navbar nav-scroll">
        <ul class="nav nav-pills d-flex justify-content-center">
            <li v-for="(section, index) in sections" :key="index" class="nav-item" @click="scrollToSection(section.id)">
                <a class="nav-link  rounded-0" :href="'#' + section.id" :class="{ 'active': section.id === activeTab }">
                    {{ section.name }}
                </a>
            </li>
        </ul>
    </nav>
    <div id="About">
        AboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAbout
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi illo quibusdam maxime nobis provident dolorem
        assumenda totam nihil sit cumque, natus nulla qui ipsam laudantium animi dolor veritatis, accusantium
        architecto.
    </div>

    <div id="Promoters" class="bg-light py-3">
        PromotersPromotersPromotersPromotersPromotersPromotersPromotersPromotersPromotersPromotersPromotersPromotersPromotersPromotersPromotersPromotersPromotersPromotersPromotersPromoters
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perspiciatis temporibus error porro dicta
        pariatur facere consequuntur, nulla iste hic voluptate alias reprehenderit rerum necessitatibus atque unde?
        Itaque, in doloribus!
    </div>

    <div id="Achivements" class="">
        <p class="p-2 text-center mb-0 bill"><span class="fs-2">~ Achivements ~</span></p>
        <div class="container mb-5">
            AChievementsAChievementsAChievementsAChievementsAChievementsAChievementsAChievementsAChievementsAChievementsAChievements
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta, repellendus molestias doloremque
            nam, nobis magni ullam cumque facilis recusandae consequatur facere iure quos quibusdam fugit nihil,
            quisquam ab nesciunt!
        </div>
    </div>

    <div id="Brands" class="section mb-5">
        <p class="p-2 text-center mt-3 mb-0 bill"><span class="fs-2">~ Brands ~</span></p>
        <div class="container mb-5">
            BrandsBrandsBrandsBrandsBrandsBrandsBrandsBrandsBrandsBrandsBrandsBrandsBrandsBrandsBrandsBrandsBrands
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, quos? Incidunt dignissimos vero ducimus minus
            obcaecati, suscipit molestias facilis adipisci omnis magni nulla recusandae autem deserunt eos voluptas
            magnam! Harum?
        </div>
    </div>

    <div id="Reviews" class="">
        ReviewsReviewsReviewsReviewsReviewsReviewsReviewsReviewsReviewsReviewsReviewsReviewsReviewsReviewsReviewsReviewsReviewsReviews
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci numquam labore libero? Aperiam, et? Ex
        consequuntur beatae accusamus corrupti iste facilis vero natus libero neque unde. Numquam modi commodi earum?
    </div>

    <div id="Connect" class="">
        ConnectConnectConnectConnectConnectConnectConnectConnectConnectConnectConnectConnectConnectConnectConnectConnectConnect
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt adipisci reiciendis aliquam. Nisi, iure eius!
        Exercitationem, corporis vitae nihil laboriosam perferendis explicabo voluptatibus? Perspiciatis, sed nostrum
        quas tempora nam in?
    </div>

</template>

<script>
export default {
    name: 'SectionNavbar',
    data() {
        return {
            sections: [
                { id: 'About', name: 'About' },
                { id: 'Promoters', name: 'Promoters' },
                { id: 'Achivements', name: 'Achievements' },
                { id: 'Brands', name: 'Brands' },
                { id: 'Reviews', name: 'Reviews' },
                { id: 'Connect', name: 'Connect' }
            ]
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        scrollToSection(sectionId) {
            const el = document.getElementById(sectionId);
            if (el) {
                window.scrollTo({ top: el.offsetTop - 0, behavior: 'smooth' });
                this.updateActiveTab(sectionId);
            }
        },
        handleScroll() {
            const scrollPosition = window.pageYOffset + window.innerHeight / 2;
            const closestSection = this.sections.reduce((prev, curr) => {
                const prevEl = document.getElementById(prev.id);
                const currEl = document.getElementById(curr.id);
                const prevDist = Math.abs(prevEl.offsetTop - scrollPosition);
                const currDist = Math.abs(currEl.offsetTop - scrollPosition);
                return currDist < prevDist ? curr : prev;
            });

            if (closestSection.id !== this.activeTab) {
                this.updateActiveTab(closestSection.id);
            }
        },
    },
};
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 89px;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #000000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-scroll {
    overflow-x: auto;
}

.nav-pills {
    flex-wrap: nowrap;
    white-space: nowrap;
}

.nav-pills .nav-link {
    border: none;
    text-decoration: none;
    color: #fff;
    padding: 10px;
    background-color: transparent;
}

.nav-pills .nav-link.active {
    border-bottom: 3px solid #fff !important;
    background-color: none;
    font-weight: bold;
}
</style>