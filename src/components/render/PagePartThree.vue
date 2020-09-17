<template lang="pug">
    div.element-page
        div.element-title
            span.element-title-text soyez gentil et explorez le monde avec
            span.element-title-text.word amour
        div.element-container
            page-three-text(v-for="text of allText" :key="text.id" :text="text")/

</template>

<script lang="ts">

import PageThreeText from "@/components/tools/PageThreeText.vue"
import Vue from 'vue'
export default Vue.extend({
    components: {
        PageThreeText,
    },

    computed: {
        allText() {
            return this.$store.getters.allText
        }
    }
})
</script>

<style lang="scss" scoped>

    @import "./../../style/scss/variables";

    .element-page {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: $main-colour;
    }

    .element-title {
        height: 10%;
        width: 60%;
        text-align: right;

        &-text {
            padding-top: 20px;
            margin-top: 20px;
            font-size: 30px;
            font-weight: bold;
        }

        .word {
            text-decoration: underline;
        }
    }

    .element-container {
        height: 50%;
        width: 60%;
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
    }

</style>
