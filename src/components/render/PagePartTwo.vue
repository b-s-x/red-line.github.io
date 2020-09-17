<template lang="pug">
    div.element-page
        div.element-imager
            img.element-imager-img(src="@/assets/img/tower.png")

        div.element-text
            div.element-text-title
                span Citations <strong>d'Antoine:</strong>
            div.element-text-items
                text-item(
                    v-for="quote of allQuotes"
                    :key="quote.icon"
                    :quote="quote"
                )/
</template>

<script lang="ts">
import TextItem from "@/components/tools/PageTwoTextItem.vue"

import Vue from 'vue'
export default Vue.extend({
    components: {
        TextItem,
    },

    computed: {
       allQuotes() {
           return this.$store.getters.allQuotes
       }
    }
})
</script>

<style lang="scss" scoped>

    @import "./../../style/scss/variables";

    .element-page {
        display: flex;
        justify-content: center;
        height: 100vh;
        width: 100%;
    }

    .element-imager {
        width: 27%;
        height: 70%;
        align-self: flex-end;

        &-img {
            width: 100%;
            height: 100%;
        }
    }


    .element-text {
        width: 35%;
        height: 450px;
        margin: 100px 0 0 15px;

        &-items {
            width: 100%;
            height: 386px;
        }

        &-title {
            height: 60px;
            width: 100%;
            font-size: 28px;
            margin-left: 20px;

            strong {
                color: $main-colour;
                text-decoration: underline;
            }
        }
    }

</style>
