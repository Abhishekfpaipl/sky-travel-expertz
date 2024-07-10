<template>
  <div class="container mt-4 text-start">
    <div class="row border my-2" v-for="(inclusion, index) in inclusions" :key=index>
      <div class="col-12 d-flex align-items-center bg-light p-2 col-md-4">
        <span v-if="inclusion.title">
          {{ inclusion.title }}
        </span>  
        <i v-if="!inclusion.title" class="bi bi-arrow-right text-dark"></i> 
      </div>
      <div class="col-12 d-flex align-items-center col-md-8 p-2">{{ inclusion.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TradeFairExclusionSection',
  data() {
    return {
      inclusions: [
        {
          title: ' Optional Activities: ',
          content: 'Any activities or excursions not mentioned in the inclusions are not covered by the package.'
        },
        {
          title: 'Personal Expenses:',
          content: 'Items of a personal nature such as laundry, souvenirs, phone calls, and minibar charges are not included.'
        },
        {
          title: ' Pre/Post Accommodation: ',
          content: 'Additional nights before or after your included hotel stay will incur an extra charge of USD 130 per night, including room and breakfast only.'
        },
        {
          title: '  Individual Transfers:',
          content: ' Transfers outside of the scheduled group transfers will cost USD 100 per van, per way.'
        },
        {
          title: ' ',
          content: 'Additional Travel Insurance Cost depending upon the age of the traveler.'
        },
        {
          title: ' ',
          content: 'This package includes a single-entry visa.'
        },
        {
          title: ' ',
          content: 'Enjoy delectable dinners every evening at our Indian Restaurant. Savor a selection of soft drinks, juices & whiskey to complement your meals.'
        },
        {
          title: 'Extras:',
          content: 'GST@ 05 % will be payable on total package cost.'
        },
        {
          title: ' ',
          content: "TCS @ 05 % will be payable on total package cost."
        },
        {
          title: ' ',
          content: "Tips to Guide 25 USD."
        },
        {
          title: ' ',
          content: 'If any increase in visa & insurance charges charges.'
        },
        {
          title: 'Visa Services: ',
          content: ' The following visa-related expenses are not included: Invitation Charges, VFS Premium Lounge Charges & Courier Charges.'
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