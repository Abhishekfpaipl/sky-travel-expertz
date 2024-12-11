<template>
    <div class="">
        <div v-if="product.extraDetails && product.extraDetails.note" class="">
            <h3 class="text-center mb-3">Important Notes</h3>
            <ul class="list-group">
                <li class="list-group-item text-start" v-for="(item, index) in product.extraDetails.note" :key="index">
                    {{ item }}
                </li>
            </ul>

        </div>
        <div v-if="product.extraDetails" class="my-5">
            <h2 class="text-center mb-3">{{ product.extraDetails.tableHeading }}</h2>
            <table class="table table-bordered table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th v-for="column in product.extraDetails.columns" :key="column">{{ column }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in product.extraDetails.data" :key="index">
                        <td v-for="cell in row" :key="cell">{{ cell }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-if="product.extraDetails && product.extraDetails.miscellaneousHeading" class="my-5">
            <h3 class="text-center mb-3">{{ product.extraDetails.miscellaneousHeading }}</h3>
            <ul class="list-group">
                <li class="list-group-item text-start" v-for="(item, index) in product.extraDetails.miscellaneous"
                    :key="index">
                    {{ item }}
                </li>
            </ul>
        </div>
        <div v-if="product.extraDetails && product.extraDetails.terms" class="my-5">
            <h3 class="text-center mb-3">{{ product.extraDetails.termsHeading }}</h3>
            <ul class="list-group">
                <li class="list-group-item text-start" v-for="(item, index) in product.extraDetails.terms" :key="index">
                    {{ item }}
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
export default {
    name: 'TradeFairTermsSection',
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>