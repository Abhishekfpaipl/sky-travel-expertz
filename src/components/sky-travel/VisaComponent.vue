<template>
    <div class="container">
        <h2>Visa Services</h2>
        <p>U-TOURIZMO provides Visa Facilitation Services to Travel Agents, Travel Management Companies, Corporate, and
            individual travelers. We as a Business Partner understand, analyze and offer customized solutions to our
            clients along with consultancy for visa appeals.
            We offer you a one-stop solution to all your visa needs. Our advisors would assist you with the visa
            formalities, documentation, case preparation, submission of application and collection of passports etc. In
            most cases this entire process would be taken care by us making it an effortless process for you.
            We are expert Visa and Immigration agents, consultants and advisors offering perfect Documentation Services
            for UK SPOUSE VISAS, ASIA, AFRICA, SETTLEMENT VISAS and all other visas to all countries including
            SCHENGEN,UK, CANADA, AUSTRALIA, NEW ZEALAND AND USA. We offer full range of online services for all Visa,
            Immigration, Appeals and Administrative Review matters to our clients globally. Our services include
            complete documentation in following areas - Study Visa | Settle Visa | Travel Visa | Jobs Visa</p>

        <div class="row">
            <div v-for="(item, index) in abroadOptions" :key="index" class="col-md-3 mb-4">
                <div class="card">
                    <img :src="item.image" class="card-img-top" :alt="item.title">
                    <div class="card-img-overlay d-flex align-items-end">
                        <h5 class="card-title text-white mb-0">{{ item.title }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
 export default { 
    data() {
        return {
            abroadOptions: [
                { title: 'Study Abroad', image: 'https://utourizmo.com/images/studyvisaservice.webp' },
                { title: 'Settle Abroad', image: 'https://utourizmo.com/images/workvisaservice.webp', },
                { title: 'Travel Abroad', image: 'https://utourizmo.com/images/touristvisaservices.webp', },
                { title: 'Jobs Abroad', image: 'https://utourizmo.com/images/businessvisaservices.webp', },
            ]
        }
    }
}
</script>
<style scoped>
.card {
    position: relative;
    overflow: hidden;
}

.card-img-top {
    /* height: 200px; */
    object-fit: cover;
}

.card-img-overlay {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
}

.card-title {
    font-size: 1.25rem;
    font-weight: bold;
}

 

@media (min-width: 576px) and (max-width: 991.98px) {
    .col:nth-child(odd) {
        border-right: 1px solid white;
    }

    .col:nth-child(-n+2) {
        border-bottom: 1px solid white;
        padding-bottom: 1rem;
    }
}

@media (min-width: 992px) {
    .col:not(:last-child) {
        border-right: 1px solid white;
    }
}
</style>