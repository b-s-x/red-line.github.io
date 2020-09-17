<template lang="pug">
    div
        != "<strong> : Antoine de Saint-Exupéry </strong>"
        p «Tu n'es encore pour moi qu'un petit garçon tout semblable à cent mille petits garçons. Et je n'ai pas besoin de toi. Et tu n'a pas besoin de moi non plus. Je ne suis pour toi qu'un renard semblable à cent mille renards. Mais, si tu m'apprivoises, nous aurons besoin l'un de l'autre. Tu seras pour moi unique au monde. Je serai pour toi unique au monde...»

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({ })

</script>

<style lang="scss" scoped>

    @import "./../../style/scss/variables";

    div {
        min-width: 50vw;

        strong {
            font-size: 34px;
            color: $main-colour;
        }

        p {
            font-size: 24px;
            text-align: justify;
        }
    }

</style>

