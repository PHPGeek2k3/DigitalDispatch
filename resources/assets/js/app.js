
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routes} from './routes';
import StoreData from './store';
import {extensions} from './store/extensions';
import {queues} from './store/queues':
import {calls} from './store/calls';
import Extensions from './components/Extensions.vue';
import Calls from './components/Calls.vue';
import Vendors from './components/Vendors.vue';
import ServiceRequests from './components/ServiceRequests.vue';
import Accounts from './components/Accounts.vue';
import MainApp from './components/MainApp.vue';
import moment from 'moment';


Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(StoreData);

const router = new VueRouter({
   routes,
   mode: 'history'
});

const app = new Vue({
    el: '#app',
    router.
    store,
    compoents: {
        MainApp,
        TimeClock,
        UserPanel,
        extensions
        calls,

    }
});
