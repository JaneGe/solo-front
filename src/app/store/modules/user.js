const user = {
    state: {
        id: undefined,
        name: undefined,
        avatar: undefined,
        token: undefined,
        setting: null
    },
    mutations: {
        SET_ID(state, value) {
            state.id = value
        },
        SET_NAME(state, value) {
            state.name = value
        },
        SET_AVATAR(state, value) {
            state.avatar = value
        },
        SET_TOKEN(state, value) {
            state.token = value
        },
        SET_SETTING(state, value) {
            state.setting = value
        },
    },
    actions: {

    }
}

export default user