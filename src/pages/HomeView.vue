<template>
  <div class="home" style="padding-top: 68px;">
    <div class="">
      <CarouselBanner />
    </div>
    
    <div class="my-2">
      <TradeFair />
    </div>
    <div class="">
      <WhyChooseUs :description="whychooseUs" title="why choose us" image="/img/whychooseUs.svg" v-observe />
    </div>
    <div class="">
      <CounterSection/>
    </div>
    <!-- <div class="">
      <VisaComponent />
    </div> -->
    <!-- <div class="">
      <VisaCountry />
    </div> -->
    <div class="my-2">
      <AutoScrolling />
    </div>
    <div class="">
      <BannerSection />
    </div>
    <div class="">
      <FaqSection :faqs="faqs" image-src="/img/faq.svg" title="Frequently asked questions" image-position="left"
        v-observe />
    </div>
  </div>
</template>

<script>
import CarouselBanner from "@/components/CarouselBanner.vue";
import BannerSection from "@/components/BannerSection.vue";
import TradeFair from "@/components/sky-travel/TradeFair.vue";
import AutoScrolling from "@/components/AutoScrolling.vue";
// import VisaComponent from "@/components/sky-travel/VisaComponent.vue";
// import VisaCountry from "@/components/sky-travel/VisaCountry.vue";
import WhyChooseUs from "@/components/WhyChooseUs.vue";
import FaqSection from "@/components/FaqSection.vue";
import CounterSection from "@/components/CounterSection.vue";
export default {
  name: "HomeView",
  components: {
    CarouselBanner,
    BannerSection,
    TradeFair,
    AutoScrolling,
    // VisaComponent,
    // VisaCountry,
    WhyChooseUs,
    FaqSection,
    CounterSection,
  },
  data() {
    return {
      whychooseUs: [
        {
          title: 'Expertise and Experience',
          icon: 'bi-headset'
        },
        {
          title: 'Personalized Service',
          icon: 'bi-thumbs-up'
        },
        {
          title: "Exclusive Offers",
          icon: 'bi-currency-ruppee'
        },
        {
          title: "Safety and Trust",
          icon: 'bi-journal'
        },
        {
          title: "Comprehensive Services",
          icon: 'bi-stars'
        },
        {
          title: "Value for Money",
          icon: 'bi-stars'
        },
        {
          title: "Sustainability and Responsibility",
          icon: 'bi-stars'
        },
        {
          title: "Unique Experiences",
          icon: 'bi-stars'
        },
        {
          title: "Technological Advantage",
          icon: 'bi-stars'
        },
        {
          title: "Flexibility and Convenience",
          icon: 'bi-stars'
        },
      ],
    }
  }
};
</script>
