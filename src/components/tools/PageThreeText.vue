<template lang="pug">
    div.element
        div.element-container
            div.element-container-title {{text.title}}
            div.element-container-text {{text.text}}
        div.element-icon
            img(:src="text.icon")
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        text: Object,
    }
})
</script>

<style lang="scss" scoped>

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

</style>
