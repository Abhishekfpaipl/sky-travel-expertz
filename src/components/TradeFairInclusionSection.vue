<template>
    <div class="container mt-4 text-start"> 
        <div class="row border my-2" v-for="(inclusion, index) in inclusions" :key=index>
            <div class="col-12 d-flex align-items-center bg-light p-2 col-md-4">{{ inclusion.title }}</div>
            <div class="col-12 d-flex align-items-center col-md-8 p-2">{{ inclusion.content }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TradeFairInclusionSection',
    data() {
        return {
            inclusions: [
                {
                    title: ' Roundtrip Economy Class Airfare:.',
                    content: ' Fly comfortably with Singapore Airlines in Economy Class on your journey from Delhi/Mumbai to Shanghai and back.'
                },
                {
                    title: '  Airport Taxes:',
                    content: 'All airport taxes levied by both India and China for your roundtrip flights are covered.'
                },
                {
                    title: 'Group Airport Transfers: ',
                    content: ' Upon arrival and departure in Shanghai, enjoy convenient shared transfers between the airport and your hotel.'
                },
                {
                    title: '4-Night Accommodation:',
                    content: 'Relax in comfort at the park Inn by Radisson Shanghai Downtown for four nights.A Red Carpet certified hotel.'
                },
                {
                    title: 'Fairground Transfers:',
                    content: 'Travel between your hotel and the Sign & Led China 2024 exhibition venue effortlessly with comfortable shared transfers in a luxury air-conditioned coach.'
                },
                {
                    title: 'Daily Breakfast:',
                    content: ' Start each day with a delicious buffet breakfast at the hotel.'
                },
                {
                    title: 'Daily Dinners with Drinks:',
                    content: 'Enjoy delectable dinners every evening at our Indian Restaurant. Savor a selection of soft drinks, juices & whiskey to complement your meals.'
                },
                {
                    title: 'Half-Day City Tour:',
                    content: 'Embark on a captivating half-day tour of Shanghai, including visits to the vibrant AP Market and a scenic Huangpu River cruise.'
                },
                {
                    title: 'Single Entry Visa:',
                    content: "We'll handle obtaining your single-entry visa for China, ensuring a smooth entry process."
                },
                {
                    title: 'Overseas Travel Insurance: ',
                    content: "Travel with peace of mind knowing you're covered by overseas travel insurance."
                },
                {
                    title: ' Exclusive Travel Kit:',
                    content: 'Receive a handy travel kit packed with essentials for your journey.'
                },
                {
                    title: 'Red Carpet Tour Manager Services: ',
                    content: 'Benefit from the expertise and assistance of a dedicated Red Carpet Tour Manager throughout your trip.'
                },
            ]
        }
    }
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
<style lang="">

</style>