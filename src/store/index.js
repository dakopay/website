import { createStore } from 'vuex';

export default createStore({
	state: {
		address: null,
		chain: null,
		connected: false,
	},
	getters: {
		address: (state) => state.address,
		chain: (state) => state.chain,
		connected: (state) => state.connected,
	},
	mutations: {
		setAddress(state, address) {
			state.address = address;
		},
		setChain(state, chain) {
			state.chain = chain;
		},
		setConnected(state, connected) {
			state.connected = connected;
		},
	},
	actions: {},
	modules: {},
});
