import Vuex from 'vuex'
import getter from './getter'

function getModules() {
    const result = {}
    const modules = require.context('./modules', false, /\.js$/)
    modules.keys().forEach(key => {
        const moduleName = key.split('/').pop().split('.')[0]
        result[moduleName] = modules[key].default
    })
    return result
}

const store = {
    modules: getModules(),
    getter: getter
}