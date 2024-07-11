<template>
    <!-- <div class="min-vh-100"
        style="background-image: url('/img/homeBanner.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center;"> -->
    <div class="" style="background-image: url('/img/trade-bg.svg')">
        <div class="py-5" style="background-color: var(--bg-forth)">
            <div class="d-flex justify-content-evenly align-items-center w-100">
                <div class="d-flex align-items-center px-2">
                    <TextStyle />
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->
</template>
<script>
import TextStyle from "@/components/TextStyle.vue";
export default {
    components: {
        TextStyle
    },
    data() {
        return {
            searchText: '',
            currentIndex: 0,
            words: ['City', 'Clothing', 'Categories', 'Top Retailer'],
        }
    },
    mounted() {
        this.rotateWords();
    },
    methods: {
        rotateWords() {
            setTimeout(() => {
                this.searchText = this.words[this.currentIndex];
                this.currentIndex++;
                if (this.currentIndex >= this.words.length) {
                    this.currentIndex = 0;
                }
                this.rotateWords();
            }, 1000);
        },
    }

}
</script>
<style></style>