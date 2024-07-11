<template>
    <div class="" style="padding-top: 66px;">

        <div class="" style="background-image: url('/img/trade-bg.svg')">
            <div class="py-5" style="background-color: var(--bg-forth)">
                <h1 class="text-center fw-bold">Contact Us</h1>
            </div>
        </div>
        <div class="container bg-white rounded-top-5" style="margin-top: -40px;" v-observe>
            <div class="row p-3">
                <div class="col-12 pt-4 text-center">
                    <form @submit.prevent="submitQuery()" class="mt-4 row g-3 needs-validation" novalidate>
                        <div class="w-100 form-floating mt-0">
                            <input type="text" class="form-control" placeholder="" v-model="name" required>
                            <label for="floatingInput" class="text-muted ms-2">Name</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <input type="tel" class="form-control" placeholder="Mobile" v-model="number" required>
                            <label class="ms-2 text-muted">Mobile No</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                v-model="note"></textarea>
                            <label for="floatingTextarea" class="ms-2 text-muted">Describe your requirements</label>
                        </div>

                        <div class="form-check text-start ms-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                v-model="agree">
                            <label class="form-check-label small" for="flexCheckDefault">
                                I agree to the <router-link to="/agreement" class="text-dark text-capitalize">terms and
                                    conditions</router-link> and
                                <router-link to="/privacy-policy" class="text-dark text-capitalize">privacy
                                    policy.</router-link>
                            </label>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-warning py-2 fs-5 w-100 rounded-0 text-white"
                                type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="container-fluid mt-5 py-5 text-dark" style="background-color: var(--bg-forth)" v-observe>
            <div class="row">
                <h1 class="text-uppercase mb-4 text-center">Need to get in touch with us?</h1>
                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <img src="/img/contactus.svg" style="width: 500px; max-width: 80%;" alt="">
                </div>
                <div class="col-12 col-md-6 mt-5 mt-md-0 ">
                    <div class="row row-cols-1">
                        <div v-for="(icon, index) in contact" :key="index" class="col py-2"
                            @click="handleIconClick(icon.action)">
                            <div class="d-flex justify-content-center align-items-center border p-2 ">
                                <a class="text-white" :href="icon.url" target="_blank">
                                    <i :class="icon.icon" :style="'color:' + icon.color"></i>
                                </a>
                                <p class="text-start ms-2 fw-bold mb-0">{{ icon.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="container my-5" v-observe>
            <h1 class="text-capitalize my-5 text-center">Follow us on</h1>
            <div class="row row-cols-4">
                <div v-for="(contact, index) in folows" :key="index" class="col py-2">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="rounded-circle border d-flex align-items-center justify-content-center"
                            style="width: 60px; height: 60px;">
                            <a class="text-white" :href="contact.url" target="_blank">
                                <i :class="contact.icon" :style="'color:' + contact.color"></i>
                            </a>
                        </div>
                    </div>
                    <p class="text-center mt-2 fw-bold">{{ contact.name }}</p>
                </div>
            </div>
        </div>
        <div class="my-3">
            <SocialSchedule v-observe />
        </div>
    </div>
</template>

<script>
import SocialSchedule from "@/components/SocialSchedule.vue";
export default {
    name: "ContactPage",
    components: {
        SocialSchedule,
    },
    data() {
        return {
            contact: [
                { name: 'support@skytravelexpertz.com', icon: 'bi-envelope fs-3', color: 'red', action: 'openEmail' },
                { name: '918318599577', icon: 'bi-telephone-fill fs-3', color: 'black', action: 'openDialer' },
                { name: '918318599577', icon: 'bi-whatsapp fs-3', color: 'green', action: 'openWhatsapp' },
                { name: 'Block B1/632, Janakpuri, Delhi', icon: 'bi-geo-fill fs-3', color: 'black', action: 'openMaps' },
            ],
            folows: [
                {
                    icon: 'bi bi-facebook fs-3',
                    name: 'Facebook',
                    color: 'blue',
                    url: 'https://www.facebook.com/yourpage'
                },
                {
                    icon: 'bi bi-twitter-x fs-3',
                    name: 'Twitter',
                    color: 'black',
                    url: 'https://www.instagram.com/yourprofile'
                },
                {
                    icon: 'bi bi-youtube fs-3',
                    name: 'YouTube',
                    color: 'red',
                    url: 'https://www.youtube.com/'
                },
                {
                    icon: 'bi bi-linkedin fs-3',
                    name: 'LinkedIn',
                    color: 'blue',
                    url: 'https://www.linkedin.com/in/yourprofile'
                },
            ],
            mobile: '',
            email: '',
            number: '',
            note: '',
        }
    },
    methods: {
        loginAccount() {
            console.log(this.mobile, this.email, this.number, this.note)
        }
    }
}
</script>

<style scoped>
.cutout {
    overflow: hidden;
    text-align: center;
}

.cutout>span {
    position: relative;
    display: inline-block;
}

.cutout>span:before,
.cutout>span:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 900px;
    /* Adjust width as needed */
    margin: 0 20px;
}

.cutout>span:before {
    right: 100%;
    border-bottom: 2px solid;
    border-color: red;
    border-image-slice: 1;
}

.cutout>span:after {
    left: 100%;
    border-bottom: 2px solid;
    border-color: red;
    border-image-slice: 1;
}
</style>
