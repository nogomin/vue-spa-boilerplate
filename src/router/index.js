import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import Login from '../components/Login';
import NotFound from '../components/NotFound';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/Login',
        component: Login
    }, {
        path: '*',
        component: NotFound
    }]
})