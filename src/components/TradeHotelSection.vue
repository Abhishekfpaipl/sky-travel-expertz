<template>
    <div>
        <div v-if="product.hotel" class="container mt-4">
            <!-- <h2 class="text-center mb-3">Hotel</h2> -->
            <table class="table table-bordered table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th v-for="column in product.hotel.columns" :key="column">{{ column }}</th>
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
</template>
<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
}
</script>
<style lang="">

</style>