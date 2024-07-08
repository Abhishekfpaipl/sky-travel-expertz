<template>
  <div class="home">
    <div class="">
      <BannerSection />
    </div>
    <div class="">
      <TradeFair />
    </div>
    <div class="">
      <VisaComponent />
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
export default {
  name: "HomeView",
  components: {
    BannerSection,
    // SecondSection,
    // NumberingCollection,
    // GeneralCollection,
    TradeFair,
    VisaComponent,
  },
};
</script>
