<template>
    <div>
        <div class="row" v-for="(day, index) in test" :key="index">
            <div class="col-12 mb-4">
                <div class="card">
                    <div class="card-header text-bg-light">
                        Day {{ index + 1 }}
                    </div>
                    <div class="card-body">
                        <div class="row d-flex align-items-center" :class="{ 'flex-row-reverse': index % 2 !== 0 }">
                            <div class="col-md-4 mb-3 mb-md-0">
                                <img :src="day.image" class="img-fluid rounded"
                                    style="width:250px; height:160px;object-fit: fill;" :alt="'Day ' + (index + 1)">
                            </div>
                            <div class="col-md-8">
                                <h5 class="card-title text-start">{{ day.date }}</h5>
                                <p class="card-text text-start">{{ day.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            test: [
                {
                    date: '(18 Sep 2024): Arrival in Shanghai',
                    description: 'Board your flights from Delhi or Mumbai to Shanghai. Upon arrival in Shanghai clear immigration and assemble together for the transfer from airport to hotel in a comfortable coach. Check in at the hotel, settle in and relax after your journey. In the evening, a delicious Indian dinner will be served at an Indian Restaurant. Rest of the evening is at leisure to explore the nearby destination. Enjoy a comfortable overnight stay at your hotel.',
                    image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                },
                {
                    date: '(19 Sep 2024): Productive Start!',
                    description: 'Post having delicious breakfast at your hotel, Gear up for Exhibition! Immerse yourself in the future of signage and visual communication. Explore cutting-edge machinery, innovative materials, and groundbreaking technologies. Network with professionals and gain valuable insights that will propel you forward. After a day filled with discovery, unwind and relax at your hotel. In the evening, savor a delightful dinner at an Indian Restaurant, allowing you to reflect and connect with colleagues over delicious food. Rest comfortably, ready to conquer another day at the exhibition.',
                    image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                },
                {
                    date: '(20 Sep 2024): Exploring More of Sign & Led China!',
                    description: 'Another day of exploration with breakfast at your hotel. Today is yours to conquer the exhibition! Here\'s how to make the most of it: Revisit exhibitors: Follow up on promising leads or revisit booths that sparked your interest yesterday. Expand your knowledge: Attend seminars led by industry experts and gain valuable insights into the latest trends and technologies. Network: Connect with peers who share your interests. Unwind and Recharge: After a day of learning and networking, head back to your hotel for some well-deserved relaxation. Enjoy a comforting dinner at an Indian Restaurant. Get a good night\'s sleep, preparing yourself for the final day of the exhibition.',
                    image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                },
                {
                    date: '(21 Sep 2024): Balancing Business',
                    description: 'Pleasure Start your day with a breakfast at the hotel. Morning at Exhibition: Deepen your knowledge: Head back to the exhibition and attend targeted seminars, reconnect with key exhibitors, or delve deeper into specific areas that pique your interest. Unwind on the Huangpu River: Embark on a scenic cruise along the Huangpu River. Glide along the majestic Huangpu River, offering breathtaking panoramic views of the city skyline, including iconic landmarks like The Bund and Oriental Pearl Tower. Evening: After your enriching city exploration, return to your hotel and unwind. Enjoy a delicious dinner at an Indian Restaurant. Rest comfortably for your final night in Shanghai.',
                    image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                },
                {
                    date: ' (22 Sep 2024): Departure from Shanghai! ',
                    description: 'Savor a final delicious breakfast at your hotel. Check out of the hotel and ensure you have collected all your belongings. Mid-Morning: AP Market Adventure: Immerse yourself in the vibrant atmosphere of the AP Market. Hunt for unique souvenirs and local handicrafts to commemorate your trip. Tantalize your taste buds with a delicious array of Shanghai Street food. Afternoon: Relaxing Transfer: A comfortable coach will take you directly to Shanghai Airport, ensuring a stress-free journey. Enjoy your flight back home, reflecting on the insightful experiences and connections you made at Sign & Led China 2024 and your exploration of Shanghai.',
                    image: 'https://rctrips.com/assets/itinerary/airport32.jpg'
                }
            ]
        }
    }
}
</script>
<style lang="">

</style>