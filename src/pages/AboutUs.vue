<template>
    <div style="padding-top: 66px;">
        <div class="" style="background-image: url('/img/trade-bg.svg')">
            <div class="py-5" style="background-color: var(--bg-forth)">
                <h1 class="fw-bold ">About Us</h1>
            </div>
        </div>
        <div class="container py-5 rounded-top-5 bg-white" style="margin-top: -40px;">
            <OurTeam :values="links" v-observe />
            <div class="my-3">
                <InfoSection :customFields="customFields" v-observe />
            </div>
            <div class="my-3">
                <TeamBanner v-observe />
            </div>
        </div>

    </div>
</template>
<script>
import OurTeam from "@/components/OurTeam.vue";
import InfoSection from "@/components/InfoSection.vue";
import TeamBanner from "@/components/TeamBanner.vue";
export default {
    name: "AboutUs",
    components: {
        OurTeam,
        InfoSection,
        TeamBanner
    },
    data() {
        return {
            customFields: [
                {
                    name: "Shop Name",
                    value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus ."
                },
                {
                    name: "Description",
                    value: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus."
                },
                {
                    name: "Description",
                    value: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus."
                },
                {
                    name: "Description",
                    value: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus."
                },
                {
                    name: "Description",
                    value: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus."
                },
            ],
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