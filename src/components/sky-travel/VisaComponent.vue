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

        <div class="row g-1">

            <div class="col-3" v-for="(visa, index) in visas" :key="index">
                <img :src="visa.image" class="position-relative" alt="" style="height:350px ;">
                <p class="text-center mb-0 position-absolute bottom-0 text-white" style="z-index: 9;">{{ visa.name }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visas: [
                {
                    name: 'Study Aboard',
                    image: 'https://utourizmo.com/images/studyvisaservice.webp',
                },
                {
                    name: 'Settle Aboard',
                    image: 'https://utourizmo.com/images/workvisaservice.webp',
                },
                {
                    name: 'Travel Aboard',
                    image: 'https://utourizmo.com/images/touristvisaservices.webp',
                },
                {
                    name: 'Jobs Aboard',
                    image: 'https://utourizmo.com/images/businessvisaservices.webp',
                },
            ]
        }
    }
}
</script>
<style lang="">

</style>