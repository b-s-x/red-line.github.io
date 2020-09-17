<template lang="pug">
    div.element
        div.element-icon
            component(:is="icon")/
        div.element-text {{quote.text}}
</template>

<script lang="ts">
import Vue from 'vue'

import StarIcon from "@/components/icons/star.vue"
import EmptyIcon from "@/components/icons/empty.vue"
import CloudIcon from "@/components/icons/cloud.vue"
import MoonIcon from "@/components/icons/moon.vue"


export default Vue.extend({
    props: {
        quote: Object
    },
    components: {
        StarIcon,
        EmptyIcon,
        CloudIcon,
        MoonIcon,
    },

    computed: {
        icon():string {
            return ((this.quote.icon || "empty") + "-icon")
        }
    },
})

</script>

<style lang="scss" scoped>

    @import "./../../style/scss/variables";

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

    .star-icon {
        fill: $main-colour;
    }

    .moon-icon {
        fill: $main-colour;
    }

    .cloud-icon {
        fill: $main-colour;
    }

</style>
