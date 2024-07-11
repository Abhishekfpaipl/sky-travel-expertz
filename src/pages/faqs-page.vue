<template>
    <div style="padding-top: 70px;">
        <div class="" style="background-image: url('/img/trade-bg.svg')">
            <div class="py-5 text-center fw-bold py-5 text-dark" style="background-color: var(--bg-forth)">
                <h1 class="text-center mb-4">Frequently Asked Questions</h1>
            </div>
        </div>
        <div class="container py-5 rounded-top-5 bg-white" style="margin-top: -40px;">
            <div>
                <ul class="nav nav-pills justify-content-start align-items-center" id="pills-tab" role="tablist">
                    <!-- <p class="fs-3 mb-0 me-3">Show:</p> -->
                    <div class="d-flex overflow-x-scroll gap-3 my-3 p-2 px-3 rounded" id="scroll">
                        <li class="nav-item border rounded" role="presentation" v-for="(price, index) in pricing"
                            :key="index">
                            <button class="nav-link text-dark" :class="{ 'active': index === activeTabIndex }"
                                :id="'tab-' + index" data-bs-toggle="pill" :data-bs-target="'#content-' + index"
                                type="button" role="tab" :aria-controls="'content-' + index"
                                :aria-selected="index === activeTabIndex" @click="activeTabIndex = index">{{
                                    price.name
                                }}</button>
                        </li>
                    </div>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="d-flex align-items-center shadow p-2 mb-3">
                        <input type="search" placeholder="Search for questions?" v-model="searchTerm"
                            class="form-control border-0" ref="searchInput" @keyup.enter="search">
                        <div>
                            <i class="bi bi-search" @click="search"></i>
                        </div>
                    </div>
                    <div class="tab-pane fade" :class="{ 'show active': index === activeTabIndex }"
                        v-for="(price, index) in pricing" :key="index" :id="'content-' + index" role="tabpanel"
                        :aria-labelledby="'tab-' + index" tabindex="0">
                        <div class="row">
                            <div class="col-12" v-for="(faq, index) in filteredFaqs(price.plans)" :key="index">
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item my-2 border-0">
                                        <h2 class="accordion-header border">
                                            <button class="accordion-button collapsed bg-light border-start border-4"
                                                type="button" data-bs-toggle="collapse"
                                                :data-bs-target="'#flush-collapseOne' + index" aria-expanded="false"
                                                :aria-controls="'flush-collapseOne' + index"
                                                style="border-color:rgb(255,162,0) !important">
                                                <span class="me-2">Q{{ index + 1 }}.</span> {{ faq.question }}
                                            </button>
                                        </h2>
                                        <div :id="'flush-collapseOne' + index"
                                            class="accordion-collapse collapse border-0"
                                            data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body text-start">{{ faq.answer }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="filteredFaqs(price.plans).length === 0" class="col-12">
                                <p class="text-center">No results found.</p>
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
    name: "PriceSection",
    data() {
        return {
            pricing: [
                {
                    id: 622,
                    name: "All Questions",
                    plans: [
                        {
                            question: "Can you accommodate special dietary needs or accessibility requirements?",
                            answer: "Yes, we strive to accommodate special requests. Please inform us of any dietary needs or accessibility requirements at the time of booking."
                        },
                        {
                            question: "Do you offer group travel packages?",
                            answer: "Yes, we offer customized group travel packages for families, corporate teams, schools, and other groups. Contact us for more details."
                        },
                        {
                            question: "What services do you offer?",
                            answer: "We offer a wide range of travel services including flight bookings, hotel reservations, tour packages, car rentals, travel insurance, and more."
                        },
                        {
                            question: "How can I book a trip with your company?",
                            answer: "You can book a trip through our website, mobile app, or by contacting our customer service team via phone or email."
                        },
                        {
                            question: "What payment methods do you accept?",
                            answer: "We accept major credit cards, debit cards, PayPal, and bank transfers. Some packages may also offer installment payment options."
                        },
                        {
                            question: "Can I make changes to my booking after it's been confirmed?",
                            answer: "Yes, you can make changes to your booking, but please note that changes may be subject to availability and additional fees."
                        },
                        {
                            question: "Is my payment information secure?",
                            answer: "Absolutely. We use industry-standard encryption and security measures to protect your payment information."
                        },
                        {
                            question: "What is your cancellation policy?",
                            answer: "Our cancellation policy varies depending on the service and the terms and conditions of the provider. Please refer to the specific policy provided at the time of booking."
                        },
                        {
                            question: "How do I request a refund?",
                            answer: "To request a refund, please contact our customer service team. Refund eligibility and processing times may vary based on the service and provider."
                        },
                        {
                            question: "Do I need travel insurance?",
                            answer: "While travel insurance is not mandatory, we highly recommend it to protect against unforeseen events such as trip cancellations, medical emergencies, and lost luggage."
                        },
                        {
                            question: "What documents do I need for international travel?",
                            answer: "For international travel, you will need a valid passport and possibly a visa, depending on the destination. Always check entry requirements for your specific destination."
                        },
                        {
                            question: "Can you assist with visa applications?",
                            answer: "Yes, we offer assistance with visa applications for many destinations. Please contact our team for more information."
                        },
                        {
                            question: "What should I do if I encounter an issue during my trip?",
                            answer: "If you encounter any issues during your trip, please contact our 24/7 customer support line for immediate assistance."
                        },
                        {
                            question: "How can I access my travel itinerary?",
                            answer: "You can access your travel itinerary through our mobile app or by logging into your account on our website. We also email a copy of your itinerary once your booking is confirmed."
                        },
                    ]
                },
                {
                    id: 62,
                    name: "General Questions",
                    plans: [
                        {
                            question: "What services do you offer?",
                            answer: "We offer a wide range of travel services including flight bookings, hotel reservations, tour packages, car rentals, travel insurance, and more."
                        },
                        {
                            question: "How can I book a trip with your company?",
                            answer: "You can book a trip through our website, mobile app, or by contacting our customer service team via phone or email."
                        },
                    ]
                },
                {
                    id: 1,
                    name: "Booking and Payment",
                    plans: [
                        {
                            question: "What payment methods do you accept?",
                            answer: "We accept major credit cards, debit cards, PayPal, and bank transfers. Some packages may also offer installment payment options."
                        },
                        {
                            question: "Can I make changes to my booking after it's been confirmed?",
                            answer: "Yes, you can make changes to your booking, but please note that changes may be subject to availability and additional fees."
                        },
                        {
                            question: "Is my payment information secure?",
                            answer: "Absolutely. We use industry-standard encryption and security measures to protect your payment information."
                        },
                    ]
                },
                {
                    id: 6,
                    name: "Cancellations and Refunds",
                    plans: [
                        {
                            question: "What is your cancellation policy?",
                            answer: "Our cancellation policy varies depending on the service and the terms and conditions of the provider. Please refer to the specific policy provided at the time of booking."
                        },
                        {
                            question: "How do I request a refund?",
                            answer: "To request a refund, please contact our customer service team. Refund eligibility and processing times may vary based on the service and provider."
                        },
                    ]
                },
                {
                    id: 5,
                    name: "Travel Preparations",
                    plans: [
                        {
                            question: "Do I need travel insurance?",
                            answer: "While travel insurance is not mandatory, we highly recommend it to protect against unforeseen events such as trip cancellations, medical emergencies, and lost luggage."
                        },
                        {
                            question: "What documents do I need for international travel?",
                            answer: "For international travel, you will need a valid passport and possibly a visa, depending on the destination. Always check entry requirements for your specific destination."
                        },
                        {
                            question: "Can you assist with visa applications?",
                            answer: "Yes, we offer assistance with visa applications for many destinations. Please contact our team for more information."
                        },
                    ]
                },
                {
                    id: 4,
                    name: "During the Trip",
                    plans: [
                        {
                            question: "What should I do if I encounter an issue during my trip?",
                            answer: "If you encounter any issues during your trip, please contact our 24/7 customer support line for immediate assistance."
                        },
                        {
                            question: "How can I access my travel itinerary?",
                            answer: "You can access your travel itinerary through our mobile app or by logging into your account on our website. We also email a copy of your itinerary once your booking is confirmed."
                        },
                    ]
                },
                {
                    id: 4,
                    name: "Special Requests",
                    plans: [
                        {
                            question: "Can you accommodate special dietary needs or accessibility requirements?",
                            answer: "Yes, we strive to accommodate special requests. Please inform us of any dietary needs or accessibility requirements at the time of booking."
                        },
                        {
                            question: "Do you offer group travel packages?",
                            answer: "Yes, we offer customized group travel packages for families, corporate teams, schools, and other groups. Contact us for more details."
                        },
                    ]
                },

            ],
            searchTerm: '',
            activeTabIndex: 0
        };
    },
    methods: {
        filteredFaqs(plans) {
            if (!this.searchTerm) {
                return plans;
            }
            const term = this.searchTerm.toLowerCase();
            return plans.filter(faq =>
                faq.question.toLowerCase().includes(term) || faq.answer.toLowerCase().includes(term)
            );
        },
    },
    mounted() {
        this.$refs.searchInput.focus();
    }
};
</script>

<style scoped>
.nav-link {
    transition: background-color 0.3s ease, color 0.3s ease;

}

.nav-link.active {
    background-color: var(--bg-light) !important;
    border: 1px solid rgb(255, 162, 0);
    color: black;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    /* border-radius: 2rem; */
    /* transform: scale(1.2); */
}
.form-control{
    box-shadow: none !important;
}
</style>
