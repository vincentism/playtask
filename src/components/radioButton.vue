<template>
	<div class="radio-button" v-if="value.length !== 0">
		<div @click="switchTab(i)" 
			class="radio-item" 
			:class="{active: v.active}"
			v-for="(v, i) in value" 
			:key="i">
			{{v.label}}
		</div>
	</div>
</template>

<script>
	export default {
		props: {
		    value: {
		    	type: Array,
		    	default: []
		    }
		},
		data() {
			return {
				
			}
		},
		methods: {
			switchTab(i) {
				for (let value of this.value) {
					value.active = false;
				}
				this.value[i].active = true;
				this.$emit('input', JSON.parse(JSON.stringify(this.value)));
				this.$emit('change', i);
			}
		},
		mounted() {
			this.value[0].active = true;
			this.$emit('input', JSON.parse(JSON.stringify(this.value)));
		}
	}
</script>

<style lang="less">
	@mainColor: #0d81e8;
	.radio-button {
		display: inline-block;
		border-radius: 4px;
		overflow: hidden;
		border: 1px solid @mainColor;
		color: @mainColor;
		.radio-item {
			padding: 5px 10px;
			display: inline-block;
			border-right: 1px solid @mainColor;
		}
		.radio-item.active {
			background: @mainColor;
			color: #fff;
		}
		.radio-item:last-child {
			border-right: 0;
		}
	}
</style>