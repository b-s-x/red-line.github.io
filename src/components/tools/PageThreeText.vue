<template lang="pug">
    div.element
        div.element-container
            div.element-container-title {{text.title}}
            div.element-container-text {{text.text}}
        div.element-icon
            component(:is="icon")/
</template>

<script lang="ts">
import Vue from 'vue'
import AdventureIcon from "@/components/icons/adventure.vue"
import FlowerIcon from "@/components/icons/flower.vue"
import FoxIcon from "@/components/icons/fox.vue"
import SparkIcon from "@/components/icons/spark.vue"


export default Vue.extend({
    props: {
        text: Object,
    },

    components: {
        AdventureIcon,
        FlowerIcon,
        FoxIcon,
        SparkIcon,
    },

    computed: {
        icon():string {
            return this.text.icon + "-icon"
        }
    },
})
</script>

<style lang="scss" scoped>

    @import "./../../style/scss/variables";

    .element {
        width: 50%;
        display: flex;
        flex-direction: row;
    }

    .element-container {
        height: 100%;
        width: 100%;
        text-align: right;
        font-size: 24px;

        &-title {
            height: 20%;
            width: 100%;
            color: white;
            font-weight: bold;
        }

        &-text {
            height: 79%;
            width: 100%;
        }
    }

    .element-icon {
        margin: 0 14px 0 14px
    }

    .spark-icon {
        fill: $secondary-colour;
    }

    .adventure-icon {
        fill: $secondary-colour;
    }

    .flower-icon {
        fill: $secondary-colour;
    }

    .fox-icon {
        fill: $secondary-colour;
    }

</style>
