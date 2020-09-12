<template lang="pug">
    div.element
        div.container-text
            div.title-item {{text.title}}
            div.text-item {{text.text}}
        div.container-icon
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

    .container-text {
        height: 100%;
        width: 100%;
        text-align: right;
        font-size: 24px;
    }

    .title-item {
        height: 20%;
        width: 100%;
        color: white;
        font-weight: bold;
    }

    .text-item {
        height: 79%;
        width: 100%;
    }

    .container-icon {
        height: 100%;
        width: 17%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

</style>
