<template>
    <div class="container-fluid px-0">
        <div class="card border-success mb-3">
            <div class="card-header bg-success text-white d-flex align-items-center">
                <i class="bi bi-check-circle-fill me-2"></i>
                <h5 class="card-title mb-0">Inclusions</h5>
            </div>
            <div class="card-body p-0">
                <ul class="list-group list-group-flush">
                    <li v-for="(inclusion, index) in product.inclusions" :key="index"
                        class="list-group-item list-group-item-action d-flex align-items-center">
                        <span class="me-2 text-success">
                            <i class="bi bi-arrow-right"></i>
                        </span>
                        <span>{{ inclusion }}</span>
                    </li>
                </ul>
                <div v-if="!product.inclusions || product.inclusions.length === 0" class="text-center text-muted p-3">
                    No inclusions specified
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TradeFairInclusionSection',
    props: {
        product: {
            type: Object,
            required: true,
            validator: (value) => {
                return value.inclusions !== undefined;
            }
        }
    }
}
</script>

<style scoped>
.list-group-item {
    transition: background-color 0.2s ease;
}

.list-group-item:hover {
    background-color: rgba(25, 135, 84, 0.1);
}

.card {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-header {
    font-weight: 600;
}
</style>

<style lang="scss">
// Additional SCSS styling can be added here if needed</style>