<template>

    <div class="" style="background-image: url('/img/trade-bg.svg')">
        <div class="py-5" style="background-color: var(--bg-forth)">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 text-center">
                    <div class="col">
                        <h2 class="d-flex justify-content-center">
                            <AutoCounter :data="30" />&nbsp;+
                        </h2>
                        <p class="fw-bold">Countries</p>
                    </div>
                    <div class="col">
                        <h2 class="d-flex justify-content-center">
                            <AutoCounter :data="1000" />&nbsp;+
                        </h2>
                        <p class="fw-bold">Satisfied Cusomters</p>
                    </div>
                    <div class="col">
                        <h2 class="d-flex justify-content-center">
                            <AutoCounter :data="5000" />&nbsp;+
                        </h2>
                        <p class="fw-bold">Packages Sold</p>
                    </div>
                    <div class="col">
                        <h2 class="d-flex justify-content-center">
                            <AutoCounter :data="15" />&nbsp;+
                        </h2>
                        <p class="fw-bold">Years Of Experience</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import AutoCounter from "@/components/AutoCounter.vue"
export default {
    components: {
        AutoCounter
    },
}
</script>