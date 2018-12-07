import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from '../views/layout';
import Index from '../views/index';

Vue.use(VueRouter);

const routes = [
	{ 
		path: '/', 
		component: Layout,
		children: [{
			path: '',
			component: Index
		}]
	}
];

const router = new VueRouter({
	routes
});

export default router;