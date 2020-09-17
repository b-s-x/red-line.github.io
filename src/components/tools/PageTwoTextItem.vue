<template lang="pug">
    div.element
        div.element-icon
            img(:src="quote.icon")
        div.element-text {{quote.text}}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        quote: Object
    },
})

</script>

<style lang="scss" scoped>

    .element {
        display: flex;

        &-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 20%;
        }

        &-text {
            width: 80%;
            text-align: justify;
            font-size: 24px;
            margin: 7px 0 7px 0;
        }
    }

</style>
