window.matrixloaderBus = new window.matrixloader.Vue();

window.matrixloader.Vue.mixin({
    methods: {
        applyFilters: window.matrixloader.applyFilters,
        addFilter: window.matrixloader.addFilter,
        addAction: window.matrixloader.addFilter,
        doAction: window.matrixloader.doAction,
        $get: window.matrixloader.$get,
        $adminGet: window.matrixloader.$adminGet,
        $adminPost: window.matrixloader.$adminPost,
        $post: window.matrixloader.$post
    }
});



import {routes} from './routes'

const router = new window.matrixloader.Router({
    routes: window.matrixloader.applyFilters('matrixloader_global_vue_routes', routes),
    linkActiveClass: 'active'
});


import App from './AdminApp'

new window.matrixloader.Vue({
    el: '#matrixloader_app',
    render: h => h(App),
    router: router
});



// Try edit message
