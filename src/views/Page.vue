<template lang='pug'>
    div(class='page')
		part-one/
		part-two/
		part-three/
</template>

<script>
import PartOne from '@/components/render/PagePartOne.vue'
import PartTwo from '@/components/render/PagePartTwo.vue'
import PartThree from '@/components/render/PagePartThree.vue'

export default {
	components: {
		PartOne,
		PartTwo,
		PartThree
	}
}
</script>

<style lang="scss">

	body {
		margin: 0
	}

</style>
