<template>
    <div class="container mt-4">
        <div v-if="product.hotel" class="card shadow-sm">
            <div class="card-header bg-primary text-white">
                <h4 class="mb-0">Hotel</h4>
            </div>
            <div class="card-body">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th v-for="column in product.hotel.columns" :key="column">
                                {{ column }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, index) in product.hotel.data" :key="index">
                            <td v-for="cell in row" :key="cell">{{ cell }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-else class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark d-flex align-items-center">
                <i class="bi bi-exclamation-triangle-fill me-2"></i>
                <h5 class="card-title mb-0">Hotel</h5>
            </div>
            <div class="card-body">
                <div class="text-center text-muted p-3">
                    No Hotel data found
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

.card-header {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
}
</style>