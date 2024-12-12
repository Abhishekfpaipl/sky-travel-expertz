<template>
    <div v-if="product.description" class="container my-4">
        <div class="card shadow-sm">
            <div class="card-body">
                <p class="card-text">{{ product.description }}</p>
            </div>
        </div>
    </div>
    <div v-else class="container"> 
        <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark d-flex align-items-center">
                <i class="bi bi-exclamation-triangle-fill me-2"></i>
                <h5 class="card-title mb-0">Description</h5>
            </div>
            <div class="card-body">
                <div class="text-center text-muted p-3">
                    No description found
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    border-radius: 0.5rem;
}
</style>