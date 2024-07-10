<template>
  <div class="home" style="padding-top: 68px;">
    <div class="">
      <BannerSection />
    </div>
    <div class="my-2">
      <AutoScrolling />
    </div>
    <div class="my-2">
      <TradeFair />
    </div>
    <div class="my-5">
      <WhyChooseUs :description="whychooseUs" title="why choose us" image="/img/whychooseUs.svg" v-observe />
    </div>
    <div class="my-5">
      <FaqSection :faqs="faqs" image-src="/img/faq.svg" title="Frequently asked questions" image-position="left"
        v-observe />
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
import AutoScrolling from "@/components/AutoScrolling.vue";
import VisaComponent from "@/components/sky-travel/VisaComponent.vue";
import VisaCountry from "@/components/sky-travel/VisaCountry.vue";
import WhyChooseUs from "@/components/WhyChooseUs.vue";
import FaqSection from "@/components/FaqSection.vue";
export default {
  name: "HomeView",
  components: {
    BannerSection,
    TradeFair,
    AutoScrolling,
    VisaComponent,
    VisaCountry,
    WhyChooseUs,
    FaqSection,
  },
  data() {
    return {
      whychooseUs: [
        {
          title: 'Ensure Zero Lead Leakage',
          icon: 'bi-headset'
        },
        {
          title: 'No Missing Follow - ups',
          icon: 'bi-thumbs-up'
        },
        {
          title: "Increase 80 % Additional Sales",
          icon: 'bi-currency-ruppee'
        },
        {
          title: "Cost effective",
          icon: 'bi-journal'
        },
        {
          title: "Secured Plateform",
          icon: 'bi-stars'
        },
        {
          title: "Free support",
          icon: 'bi-stars'
        },
        {
          title: "Modern Interface",
          icon: 'bi-stars'
        },
        {
          title: "Easy Setup & Fast Adoption",
          icon: 'bi-stars'
        },
      ],
    }
  }
};
</script>
