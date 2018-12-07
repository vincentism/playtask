<template>
	<div>
		<router-view></router-view>
		<navigate></navigate>	
	</div>
</template>

<script>
	import { lheader, navigate } from '../components';
	import store from '../vuex';
	export default {
		components: {
			navigate,
			lheader
		},
		store,
		data() {
			return {}
		}
	}
</script>

