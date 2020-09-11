<template lang="pug">
	div(class="element-one-page")
		div(class='element-one-img')
			img(class="img-field" src="@/assets/img/field.png")
			div(class="element-one-text")
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

	.element-one-text {
		position: absolute;
		top: 35vh;
		left: 25vw;
		width: 50vw;
	}

	.element-one-img {
		position: relative;
		width: 100%;
		height: 100vh;
	}

	.img-field {
		width: 100%;
		height: 100vh;
	}

</style>
