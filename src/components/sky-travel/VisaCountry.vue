<template>
    <div class="container">
        <div class="row my-3">
            <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                <h3>Guidance & Immigration Services</h3>
                <p class="">Beabroad (A brand of CWI consultancy Pvt Ltd) is a one-stop solution provider for all your
                    immigration and overseas education needs. We believe in building a life-long relationship with all
                    our clients. Building strong relationships and providing innovative solutions to our clients is of
                    utmost priority to us. Our team of experts assesses and reviews every case assiduously, ensuring
                    proper client representation while maintaining individuality and personal touch. We keep an eye on
                    all immigration law updates and developments. Simultaneously, making sure clients receive all
                    available options to make the most informed decisions. We provide all immigration, permanent
                    residency, and overseas study assistance for Canada, Australia, and the UK. Furthermore, all visas,
                    travel, loans, and IELTS guidance are undertaken by us.</p>
            </div>
            <div class="col-12 col-md-6">
                <img src="https://utourizmo.com/images/guidenceimg.webp" class="img-fluid rounded" alt="">
            </div>
        </div>
    </div>
    <div class="text-center p-4 my-3">
        <div class="mb-4">
            <span v-for="(type, index) in visaTypes" :key="index">
                {{ type }}{{ index < visaTypes.length - 1 ? ' | ' : '' }} </span>
        </div>

        <h2 class="mb-4">{{ title }}</h2>

        <div class="countries-grid d-flex justify-content-center gap-4 flex-wrap">
            <div v-for="country in countries" :key="country.name" class="country-item">
                <!-- <div class="country-image"> -->
                <img :src="country.image" :alt="country.name" class="rounded-circle shadow overlfow-hidden"
                    style="width: 150px;height: 150px; object-fit: cover;">
                <!-- </div> -->
                <p class="fw-bold">{{ country.name }} Visa</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visaTypes: ['Student Visa', 'Business Visa', 'Tourist Visa'],
            title: 'Top Rated Visa Countries We Serve!',
            countries: [
                { name: 'Australia', image: 'https://utourizmo.com/images/australia.webp' },
                { name: 'Canada', image: 'https://utourizmo.com/images/canada.webp' },
                { name: 'USA', image: 'https://utourizmo.com/images/usa.webp' },
                { name: 'UK', image: 'https://utourizmo.com/images/uk.webp' },
                { name: 'Germany', image: 'https://utourizmo.com/images/germany.webp' },
            ]
        }
    }
}
</script>