<template>
	<div class="lheader">
		<span>任务</span>
		<img @click="create" src="../assets/icon-plus.png" class="new" alt="">
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
            create() {

			}
		}
	}
</script>

<style lang="less">
	.lheader {
		width: 100%;
		height: 52px;
		line-height: 52px;
		text-align: center;
		position: fixed;
		top: 0;
		left: 0;
		span {
			font-size: 18px;
		}
		.new {
			width: 20px;
			height: 20px;
			position: absolute;
			top: 16px;
			right: 16px;
		}
	}
</style>