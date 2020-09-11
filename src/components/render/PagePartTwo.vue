<template lang="pug">
    div.element-two-page
        div.element-two-img
            img.img-tower(src="@/assets/img/tower.png")

        div.element-two-text
            div.text-title
                span Citations <strong>d'Antoine:</strong>
            div.text-container
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

    .element-two-page {
        display: flex;
        justify-content: center;
        height: 100vh;
        width: 100%;
    }

    .element-two-img {
        width: 27%;
        height: 70%;
        align-self: flex-end;
    }

    .img-tower {
		width: 100%;
		height: 100%;
	}

    .element-two-text {
        width: 35%;
        height: 450px;
        margin: 100px 0 0 15px;
    }

     .text-container {
        width: 100%;
        height: 386px;
    }

    .text-title {
        height: 60px;
        width: 100%;
        font-size: 28px;
        margin-left: 20px;
    }

    strong {
         color: rgb(214, 60, 55);
         text-decoration: underline;
    }

</style>
