import Vue from 'vue'
import Router from 'vue-router'

import recommend from '@/components/recommend'
import rank from '@/components/rank'
import mine from '@/components/mine'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'recommend',
		component: recommend
	}, {
		path: '/rank',
		name: 'rank',
		component: rank
	}, {
		path: '/mine',
		name: 'mine',
		component: mine
	}]
})