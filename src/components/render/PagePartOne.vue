<template lang="pug">
	div(class="element-page")
		div(class='element-img')
			img(class="img-field" src="@/assets/img/field.png")
			div(class="element-text")
				page-text/
</template>

<script lang="ts">
import PageText from '@/components/tools/PageText.vue'

import Vue from "vue"
export default Vue.extend({
	components: {
		PageText,
	}
})
</script>

<style lang="scss" scoped>

	.element-text {
		position: absolute;
		top: 35vh;
		left: 25vw;
		width: 50vw;
	}

	.element-img {
		position: relative;
		width: 100%;
		height: 100vh;
	}

	.img-field {
		width: 100%;
		height: 100vh;
	}

</style>
