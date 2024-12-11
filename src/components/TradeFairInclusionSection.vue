<template>
    <div class="container mt-4 text-start">
        <div class="row border my-2" v-for="(inclusion, index) in product.inclusions" :key=index>
            <div v-if="inclusion.title" class="col-12 d-flex align-items-center bg-light p-2 col-md-4">{{ inclusion.title }}</div>
            <div v-else class="col-12 d-flex align-items-center bg-light p-2 col-md-4">Title {{ index + 1 }}</div>
            <div class="col-12 d-flex align-items-center col-md-8 p-2">{{ inclusion.content }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TradeFairInclusionSection',
    props: {
        product: {
            type: Object,
            required: true
        }
    }, 
}
</script> 