<template>
	<div class="list-item">
		<div @click="selectItem" class="item-selector">
			<span v-if="!v.completed" class="icon-unselected"></span>
			<img v-else class="icon-selected" src="../assets/icon-selected.png" alt="">
		</div>
		<div class="item-content">
			<p class="title">{{v.title}}</p>
			<p class="tip">{{v.looptime}}/{{v.loopable ? '∞' : 1}}</p>
		</div>

		<span class="score">+{{v.score}}</span>
		<div class="under-line"></div>
	</div>
</template>

<script>
    import store from '../vuex';
    import { mapMutations, mapState, mapGetters } from 'vuex'
	export default {
		props: {
			v: {
			    type: Object,
				default: {}
			}
		},
		data() {
			return {

			}
		},
		computed: {
			...mapState(['taskList'])
		},
		methods: {
			...mapMutations([
			    'UPDATETASKLIST'
			]),
			selectItem() {
				this.$emit('complete', this.v.id);
			}
		}
	}
</script>

<style lang="less">
	@mainColor: #0d81e8;
	.list-item {
		display: flex;
		position: relative;
		align-items: center;
		padding: 10px 20px;
		.item-selector {
			margin-right: 20px;
			img {
				width: 20px;
				height: 20px;
			}
			.icon-unselected {
				width: 18px;
				height: 18px;
				display: inline-block;
				border: 1px solid #bdbdbd;
				border-radius: 100%;
			}
		}
		.item-content {
			flex-grow: 10;
			text-align: left;
			.title {
				font-size: 18px;
				margin-bottom: 5px;
			}
			.tip {
				color: #bdbdbd;
				font-size: 12px;
			}
		}

		.score {
			color: @mainColor;
		}

		.under-line {
			width: 90%;
			position: absolute;
			bottom: 0;
			left: 5%;
			border-bottom: 1px solid #e6e6e6;

		}
	}
</style>
