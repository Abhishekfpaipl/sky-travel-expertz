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
  </div>
</template>

<script>
import BannerSection from "@/components/BannerSection.vue"; 
import TradeFair from "@/components/sky-travel/TradeFair.vue";
import VisaComponent from "@/components/sky-travel/VisaComponent.vue";
import VisaCountry from "@/components/sky-travel/VisaCountry.vue";
export default {
  name: "HomeView",
  components: {
    BannerSection, 
    TradeFair,
    VisaComponent,
    VisaCountry,
  },
};
</script>
