<template>
    <div class="container-fluid text-dark bg-light pt-3 border-top border-bottom">
        <div class="row">
            <div class="col-12 col-md-4 mb-3">
                <router-link to="/">
                    <img :src="img" style="width: 100px;object-fit: contain;">
                </router-link>
            </div>

            <div class=" col-12 col-md-4 mb-3 text-center">
                <p class="mb-2 fw-bold">Contact Us</p>
                <p class="mb-2">Email : support@skytravelexpertz.com</p>
                <p class="mb-2">Mob no. : 91 8318599577</p>
                <p class="mb-2">Address : 2nd Floor, Block B1/632, <br> Janakpuri, 110058, Delhi, India</p>
                <div class="d-flex gap-2 justify-content-center">
                    <p class="fw-bold">Follow Us :</p>
                    <i class="bi bi-twitter-x"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-instagram"></i>
                </div>
            </div>
            <div class="col-12 col-md-4 d-flex justify-content-around">
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Company</p>
                    <div class="d-flex flex-column">
                        <router-link :to="link.link" class="text-decoration-none my-1 text-dark"
                            v-for="(link, index) in company" :key="index">{{ link.name }}</router-link>
                    </div>
                </div>
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Resources</p>
                    <div class="d-flex flex-column">
                        <router-link :to="link.link" class="text-decoration-none my-1 text-dark"
                            v-for="(link, index) in links" :key="index">{{ link.name }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <FameFoot /> -->
</template>

<script>
// import FameFoot from '@/components/FameFoot.vue'
export default {
    name: 'FooterBar',
    components: {
        // FameFoot,
    },
    data() {
        return {
            img: '/img/logo.png',
            company: [
                {
                    id: 3,
                    name: 'Login',
                    link: '/product-list'
                },
                {
                    id: 4,
                    name: 'Contact Us',
                    link: '/contact-us'
                },
                {
                    id: 42,
                    name: 'About Us',
                    link: '/about-us'
                },
            ],
            links: [
                {
                    id: 13,
                    name: 'Legal',
                    link: '/legal-warning'
                },
                {
                    id: 1,
                    name: 'Privacy Policy',
                    link: '/privacy-policy'
                },
                {
                    id: 12,
                    name: 'Terms Of Use',
                    link: '/term-of-use'
                },



            ],
        }
    },
}
</script>

<style></style>
