<template>
  <div class="home" style="padding-top: 68px;">
    <div class="">
      <BannerSection />
    </div>
    <div class="my-2">
      <TradeFair />
    </div>
    <div class="">
      <VisaComponent />
    </div>
    <div class="">
      <VisaCountry />
    </div>
    <!-- <div class="">
      <SecondSection />
    </div> -->
    <!-- <div class="">
      <NumberingCollection />
    </div> -->
    <!-- <div class="">
      <GeneralCollection />
    </div> -->
  </div>
</template>

<script>
import BannerSection from "@/components/BannerSection.vue";
// import SecondSection from "@/components/SecondSection.vue";
// import NumberingCollection from "@/components/NumberingCollection.vue";
// import GeneralCollection from "@/components/GeneralCollection.vue";
import TradeFair from "@/components/sky-travel/TradeFair.vue";
import VisaComponent from "@/components/sky-travel/VisaComponent.vue";
import VisaCountry from "@/components/sky-travel/VisaCountry.vue";
export default {
  name: "HomeView",
  components: {
    BannerSection,
    // SecondSection,
    // NumberingCollection,
    // GeneralCollection,
    TradeFair,
    VisaComponent,
    VisaCountry,
  },
};
</script>
