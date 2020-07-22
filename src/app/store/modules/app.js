const app = {
    state: {
        fullLoading: false
    },
    mutations: {
        SET_FULL_LOADING(state, value) {
            state.fullLoading = value
        }
    },
    actions: {
        SetFullLoading({ commit }, value) {
            commit('SET_FULL_LOADING', value)
        }
    }
}

export default app