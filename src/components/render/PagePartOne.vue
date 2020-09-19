<template lang="pug">
	div.element-page
		div.element-container
			img.element-container-img(src="@/assets/img/field.png")
			div.element-container-text
				page-text/
</template>

<script lang="ts">
import PageText from "@/components/tools/PageOneText.vue"

import Vue from "vue"
export default Vue.extend({
	components: {
		PageText,
	}
})
</script>

<style lang="scss" scoped>

	.element-container {
		position: relative;
		width: 100%;
        height: 100vh;

        &-img {
            width: 100%;
            height: 100vh;
        }

        &-text {
            position: absolute;
            top: 35vh;
            left: 25vw;
            width: 50vw;
        }
	}

</style>
