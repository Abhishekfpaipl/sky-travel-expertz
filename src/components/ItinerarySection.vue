<template>
    <div class="container-fluid px-0">
        <div v-if="product.itinerary" class="timeline-container position-relative">
            <!-- <div class="timeline-line position-absolute top-0 start-50 translate-middle-x h-100"></div> -->

            <div v-for="(day, index) in product.itinerary" :key="index"
                class="timeline-item row mb-4 position-relative">
                <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 position-relative">
                    <div class="card shadow-sm border-0"
                        :class="{ 'text-end': index % 2 !== 0, 'text-start': index % 2 === 0 }">
                        <div class="card-body p-4">
                            <!-- <div class="timeline-badge position-absolute top-50 start-50 translate-middle">
                                <span class="badge bg-primary rounded-circle">
                                    {{ index + 1 }}
                                </span>
                            </div> -->

                            <div class="row align-items-center">
                                <div class="col-12">
                                    <h4 class="card-title mb-2 text-primary">
                                        <i class="bi bi-calendar-event me-2"></i>
                                        {{ day.title }}
                                    </h4>
                                    <h5 class="card-subtitle mb-3 text-muted">
                                        {{ day.subtitle }}
                                    </h5>
                                    <p class="card-text text-muted">
                                        {{ day.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark d-flex align-items-center">
                <i class="bi bi-exclamation-triangle-fill me-2"></i>
                <h5 class="card-title mb-0">Itinerary</h5>
            </div>
            <div class="card-body">
                <div class="text-center text-muted p-3">
                    No Itinerary found
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TradeFairItinerarySection',
    props: {
        product: {
            type: Object,
            required: true,
            validator: (value) => {
                return value.itinerary && Array.isArray(value.itinerary);
            }
        }
    }
}
</script>

<style scoped>
.timeline-container {
    padding: 2rem 0;
}

.timeline-line {
    width: 4px;
    background-color: #6c757d;
    opacity: 0.3;
    z-index: 1;
}

.timeline-item {
    margin-bottom: 2rem;
}

.timeline-badge {
    z-index: 3;
}

.timeline-badge .badge {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card {
    transition: transform 0.3s ease;
}

.card:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .timeline-line {
        left: 30px !important;
    }

    .timeline-item {
        text-align: left !important;
    }
}
</style>