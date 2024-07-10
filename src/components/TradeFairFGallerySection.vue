<template>
    <div class="container pb-5">
        <div class="row pt-4 ">
            <div :id="'productImages' + index" class="carousel slide">
                <div class="d-flex mt-2 p-2" id="scroll" style="overflow-x: scroll;">
                    <button type="button" class="rounded-0 p-0 border me-1" :data-bs-target="'#productImages' + index"
                        :data-bs-slide-to="imgIndex" :class="{ active: imgIndex === 0 }"
                        :aria-current="imgIndex === 0 ? true : false" v-for="(image, imgIndex) in images"
                        :key="imgIndex">
                        <img :src="image.thumbnail" class="" :alt="image.thumbnail"
                            style="height: 100px; object-fit: contain;">
                    </button>
                </div>
                <div class="carousel-inner">
                    <div :id="'cardCarousel' + imgIndex" class="carousel-item" :class="{ active: imgIndex === 0 }"
                        v-for="(image, imgIndex) in images" :key="imgIndex">
                        <img :src="image.thumbnail" class="img-fluid" :alt="image.name"
                            style="min-height: 100px; width: 100%; object-fit: cover;">
                    </div>
                </div>
            </div>
        </div>
        <p class="text-start">Radisson Collection Hyland Shanghai. Add: China, Shanghai, Huangpu, Nanjing Rd (E), 505CN
            Shanghai Area: 200001
            Radisson Collection Hyland Shanghai provides the perfect home base for your visit. Here's
            why:
            Amenities - The hotel offers a variety of amenities, including a spa, fitness centre,
            business centre, and three dining options. Guests can also enjoy complimentary Wi-Fi, air
            conditioning, local and international TV channels, a mini-bar, and complimentary bottled
            water in their rooms. Upgraded rooms and suites include access to the Executive Lounge.
            Prime Location - Situated in the heart of Shanghai's commercial district, you'll be steps
            away from Nanjing Road's pedestrian shopping area. This central location offers easy access
            to the exhibition centre and allows you to explore Shanghai's vibrant business and cultural
            scene.
            Seamless Efficiency - Focus on what matters most - the exhibition. Our hotel prioritizes
            your needs, offering amenities that streamline your business trip. Enjoy complimentary Wi-Fi
            to stay connected, a business centre for any last-minute tasks, and comfortable, spacious
            rooms to ensure a restful night's sleep.
            Unwind and Recharge - After a productive day at Sign China 2024, unwind and recharge at our
            hotel's spa or fitness centre. Rejuvenate and prepare for the next day's meetings feeling
            refreshed and focused.
            Whether you're a business traveller seeking a comfortable stay with easy access to work
            areas, or a tourist wanting to explore the city, Park Inn by Radisson Shanghai Downtown
            provides a central location and a relaxing atmosphere.</p>
    </div>
</template>

<script>
export default {
    name: "GallerySection",
    data() {
        return {
            images: [
                { thumbnail: 'https://img101.urbanic.com/v1/goods-pic/36e2a81c9e3348cfa2187d434f2c2379UR_w1440_q90.webp', },
                { thumbnail: 'https://img101.urbanic.com/v1/goods-pic/5bda5323bbeb417e9bacc64bdc6e945cUR_w1440_q90.webp', },
                { thumbnail: 'https://img101.urbanic.com/v1/goods-pic/aaa2dc38e1bc4e06a5797a4464334001UR_w1440_q90.webp', },
                { thumbnail: 'https://img101.urbanic.com/v1/goods-pic/8578182f6d5e4aab85f3ad043afaf921UR_w1440_q90.webp', },
                { thumbnail: 'https://img101.urbanic.com/v1/goods-pic/6b76cdcaa6bb4ef9a61efc20ed76d981UR_w1440_q90.webp', },
                { thumbnail: 'https://img101.urbanic.com/v1/goods-pic/6cc4429416c444e986cce9081419439bUR_w1440_q90.webp', },
                { thumbnail: 'https://img101.urbanic.com/v1/goods-pic/38a9f23844304c9791f36d8d17dd434dUR_w1440_q90.webp', },
                { thumbnail: 'https://img101.urbanic.com/v1/goods-pic/0895a5151f614a8f9a9a03496223f935UR_w1440_q90.webp', },
                { thumbnail: 'https://img101.urbanic.com/v1/703c1c85d9a04f03a11294de9aa4d46f.webp', },
            ],
            selectedImage: null
        }
    },
    mounted() {
        this.selectedImage = this.images[0]
    },
    methods: {
        selectImage(image) {
            this.selectedImage = image;
        }
    }
}
</script>

<style scoped></style>