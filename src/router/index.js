import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/css',
		name: 'CSS',
		component: () =>
			import(/* webpackChunkName: "CSS" */ '../views/css/Css.vue'),
	},
	{
		path: '/modernjs',
		name: 'ModernJavaScript',
		redirect: '/modernjs/javascript',
		component: () => import('../layout/ModernJsLayout.vue'),
		children: [
			{
				path: 'javascript',
				name: 'The JavaScript Language',
				component: () =>
					import(
						/* webpackChunkName: "modernjs" */ '../views/modernJavaScript/JavaScriptLang.vue'
					),
			},
			{
				path: 'browser',
				name: 'Browser',
				component: () =>
					import(
						/* webpackChunkName: "modernjs" */ '../views/modernJavaScript/Browser.vue'
					),
			},
			{
				path: 'addarticle',
				name: 'Additional Article',
				component: () =>
					import(
						/* webpackChunkName: "modernjs" */ '../views/modernJavaScript/AdditionalArticles.vue'
					),
			},
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	// base: process.env.BASE_URL,
	routes,
});

export default router;
