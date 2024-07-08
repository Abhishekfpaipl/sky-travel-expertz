<template> 
    <div class="" style="padding-top: 68px;">
        <div class="">
            <img src="/img/tradeFair.jpg" style="width: 100%;" alt="">
        </div>
        <InformationSection />
        <FameFoot />
        <!-- <div class="d-flex justify-content-center align-items-center">
            <div class="text-center position-fixed bottom-0 px-2 py-1 m-2 rounded text-white"
                style="z-index: 9999; background-color: #38383899;" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="bi bi-arrow-left me-2"></i>
                <span>Back</span>
            </div>
        </div> -->
    </div> 
</template> 
<script> 
import InformationSection from '@/components/InformationSection.vue';
 export default {
    name: "DigitalCard",
    components: {
        InformationSection,
     }, 
};
</script>