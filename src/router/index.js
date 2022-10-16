import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import(/* webpackChunkName: "about" */ '../pages/HomePage.vue'),
	},
	{
		path: '/about',
		name: 'about',
		component: () => import(/* webpackChunkName: "about" */ '../pages/AboutPage.vue'),
	},
	{
		path: '/integration',
		name: 'integration',
		component: () => import(/* webpackChunkName: "about" */ '../pages/IntegrationPage.vue'),
	},
	{
		path: '/create',
		name: 'create',
		component: () => import(/* webpackChunkName: "about" */ '../views/CreateView.vue'),
	},
	{
		path: '/token/:chain/:id',
		name: 'token',
		component: () => import(/* webpackChunkName: "about" */ '../views/TokenView.vue'),
		props: true,
	},
	{
		path: '/plan/:chain/:id',
		name: 'plan',
		component: () => import(/* webpackChunkName: "about" */ '../views/PlanView.vue'),
		props: true,
	},
	{
		path: '/sub/:chain/:id',
		name: 'sub',
		component: () => import(/* webpackChunkName: "about" */ '../views/SubView.vue'),
		props: true,
	},
	{
		path: '/account/:chain/:id',
		name: 'account',
		component: () => import(/* webpackChunkName: "about" */ '../views/AccountView.vue'),
		props: true,
	},
	{
		path: '/account_in/:chain/:id',
		name: 'account_in',
		component: () => import(/* webpackChunkName: "about" */ '../views/AccountIn.vue'),
		props: true,
	},
	{
		path: '/account_out/:chain/:id',
		name: 'account_out',
		component: () => import(/* webpackChunkName: "about" */ '../views/AccountOut.vue'),
		props: true,
	},
	{
		path: '/join/:hash',
		name: 'join',
		component: () => import(/* webpackChunkName: "about" */ '../pages/JoinPage.vue'),
		props: true,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
