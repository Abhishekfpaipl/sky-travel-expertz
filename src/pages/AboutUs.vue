<template>
    <div>
        <div class="" style="background-image: url('/img/trade-bg.svg')">
            <div class="py-5" style="background-color: var(--bg-forth)">
                <h1 class="fw-bold ">About Us</h1>
            </div>
        </div>
        <div class="container">
            <div class="row my-5">
                <div class="col-md-6">
                    <img class="img-fluid" src="/img/about-us.jpg" alt="About Us">
                </div>
                <div class="col-md-6">
                    <p>
                        Since 2007, Sky Travel Expertz has been synonymous with curating extraordinary travel
                        experiences that go beyond mere destinations. Whether you’re navigating the vibrant energy of
                        international trade fairs, uncovering hidden gems on a luxurious leisure holiday, or delving
                        into the diverse charm of domestic vacations, our expertise ensures a journey tailored to your
                        dreams.
                    </p>
                    <p>
                        Our commitment to your comfort knows no bounds. Through partnerships with luxury hotels
                        worldwide, we guarantee impeccable service and plush accommodations wherever you travel. Adding
                        a touch of home away from home, our team can arrange for skilled Indian chefs to accompany your
                        group, serving authentic flavors that connect you to your roots, no matter where you are.
                    </p>
                    <p>
                        At Sky Travel Expertz, we believe travel is more than an itinerary—it’s a transformative
                        experience. From seamless trade fair expeditions to bespoke international holidays, we bring the
                        world to your doorstep, turning every journey into a cherished memory. Let us guide you into a
                        world of discovery, comfort, and adventure.
                    </p>
                    <div class="row mt-4">
                        <div class="col-md-6">
                            <div class="d-flex align-items-center mb-3">
                                <i class="bi bi-airplane-fill text-danger me-2"></i>
                                <h5>First Class Flights</h5>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <i class="bi bi-stars text-danger me-2"></i>
                                <h5>5 Star Accommodations</h5>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <i class="bi bi-translate text-danger me-2"></i>
                                <h5>10+ languages Available</h5>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center mb-3">
                                <i class="bi bi-building text-danger me-2"></i>
                                <h5>Handpicked Hotels</h5>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <i class="bi bi-car-front-fill text-danger me-2"></i>
                                <h5>Latest Model Vehicles</h5>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <i class="bi bi-clipboard-data text-danger me-2"></i>
                                <h5>150+ Premium City Tours</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.930237487185!2d77.08170247550078!3d28.631852875665075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04be6c45e403%3A0x1f42c549170e3286!2s2nd%20Floor%2C%20632%2C%20Block%20B1%2C%20Janakpuri%2C%20New%20Delhi%2C%20Delhi%2C%20110058!5e0!3m2!1sen!2sin!4v1734065012489!5m2!1sen!2sin"
                    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="my-5">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-primary">Our Vision</h1>
                        <p>
                            Trip Ninja was founded on the idea that better travel could be easily unlocked by using
                            technology to modernize and simplify traditionally complex processes. We believe in the
                            power of travel to connect us with others and share meaningful experiences together. We
                            envision a world where travel companies are the intersection of high technology and
                            meaningful experiences.
                        </p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-12">
                        <h1 class="text-primary">Our Mission</h1>
                        <p>
                            Our mission is to build tech that simplifies complexity and empowers travel companies -
                            because efficient travel companies make for happy travelers.
                        </p>
                        <p>
                            As a part of the Webjet Group, we are committed to building technology that serves as
                            infrastructure to make booking travel better for all.
                        </p>
                    </div>
                </div>
            </div>
            <OurTeam :values="links" v-observe />  
        </div>

    </div>
</template>
<script>
import OurTeam from "@/components/OurTeam.vue";  
export default {
    name: "AboutUs",
    components: {
        OurTeam,  
    },
    data() {
        return { 
            links: [
                {
                    id: 1,
                    img: 'img/users/1.png',
                    title: "Member 1",
                    description: "Tailored designs to fit your unique brand identity.",
                },
                {
                    id: 2,
                    img: 'img/users/2.png',
                    title: "Member 2",
                    description: "Optimized for seamless experiences on all devices.",
                },
                {
                    id: 3,
                    img: 'img/users/3.png',
                    title: "Member 3",
                    description: "Efficient CMS solutions for easy content updates.",
                },
                {
                    id: 4,
                    img: 'img/users/4.png',
                    title: "Member 4",
                    description: "Robust online stores to boost your sales.",
                },
                {
                    id: 5,
                    img: 'img/users/5.png',
                    title: "Member 5",
                    description: "Bespoke applications to meet your business needs.",
                },
            ],
        }
    }
}
</script>