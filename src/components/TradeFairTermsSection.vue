<template>
    <div v-if="product.extraDetails" class="container-fluid p-4">
        <section v-if="product.extraDetails && product.extraDetails.note" class="card mb-4 border-primary">
            <div class="card-header bg-primary text-white d-flex align-items-center">
                <i class="bi bi-info-circle me-2"></i>
                <h3 class="card-title mb-0">Important Notes</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li v-for="(item, index) in product.extraDetails.note" :key="index"
                    class="list-group-item list-group-item-action text-start">
                    <span class="text-primary me-2">•</span>{{ item }}
                </li>
            </ul>
        </section>
        <section v-if="product.extraDetails" class="mb-4">
            <h2 class="text-center mb-4">
                {{ product.extraDetails.tableHeading }}
            </h2>
            <div class="table-responsive">
                <table class="table table-striped table-hover table-bordered">
                    <thead class="table-primary">
                        <tr>
                            <th v-for="column in product.extraDetails.columns" :key="column" class="text-uppercase">
                                {{ column }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, index) in product.extraDetails.data" :key="index">
                            <td v-for="cell in row" :key="cell">
                                {{ cell }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section v-if="product.extraDetails && product.extraDetails.miscellaneousHeading"
            class="card mb-4 border-success">
            <div class="card-header bg-success text-white d-flex align-items-center">
                <i class="bi bi-check-circle me-2"></i>
                <h3 class="card-title mb-0">
                    {{ product.extraDetails.miscellaneousHeading }}
                </h3>
            </div>
            <ul class="list-group list-group-flush">
                <li v-for="(item, index) in product.extraDetails.miscellaneous" :key="index"
                    class="list-group-item list-group-item-action text-start">
                    <span class="text-success me-2">•</span>{{ item }}
                </li>
            </ul>
        </section>

        <section v-if="product.extraDetails && product.extraDetails.terms" class="card mb-4 border-danger">
            <div class="card-header bg-danger text-white d-flex align-items-center">
                <i class="bi bi-exclamation-triangle me-2"></i>
                <h3 class="card-title mb-0">
                    {{ product.extraDetails.termsHeading }}
                </h3>
            </div>
            <ul class="list-group list-group-flush">
                <li v-for="(item, index) in product.extraDetails.terms" :key="index"
                    class="list-group-item list-group-item-action text-start">
                    <span class="text-danger me-2">•</span>{{ item }}
                </li>
            </ul>
        </section>
    </div>
    <div v-else class="container">
        <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark d-flex align-items-center">
                <i class="bi bi-exclamation-triangle-fill me-2"></i>
                <h5 class="card-title mb-0">Terms</h5>
            </div>
            <div class="card-body">
                <div class="text-center text-muted p-3">
                    No terms found
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TradeFairTermsSection',
    props: {
        product: {
            type: Object,
            required: true,
            validator: (value) => {
                return value.extraDetails !== undefined;
            }
        }
    }
}
</script>

<style scoped></style>