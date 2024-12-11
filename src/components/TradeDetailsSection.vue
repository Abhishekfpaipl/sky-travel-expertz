<template>
    <div>
        <p>{{ product.description }}</p>
    </div>
</template>
<script>
export default {
    props:{
        product:{
            type: Object,
            required: true
        }
    },
}
</script>
<style lang="">

</style>