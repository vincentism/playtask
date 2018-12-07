<template>
	<div class="navigate-bar">
		<div>
			<img class="navigate-bar-icon" src="../assets/icon-task.png" alt="">
			<p>任务</p>
		</div>
		<div>
			<img class="navigate-bar-icon" src="../assets/icon-desire.png" alt="">
			<p>欲望</p>
		</div>
		<div>
			<img class="navigate-bar-icon" src="../assets/icon-chat.png" alt="">
			<p>统计</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style lang="less">
  	* { 
  		margin: 0;
  		padding: 0;
  	}
	.navigate-bar {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #e6e6e6;
		padding: 5px 0;
		box-sizing: border-box; 
		display: flex;
		justify-content: space-around;
		div {
			text-align: center;
		}
		.navigate-bar-icon {
			display: inline-block;
			width: 24px;
			height: 24px;
			margin-bottom: 5px;
		}
		p {
			text-align: center;
			margin: 0;
			font-size: 12px;
		}
	}
</style>