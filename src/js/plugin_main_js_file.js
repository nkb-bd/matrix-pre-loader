import Vue from './elements';
import Router from 'vue-router';
Vue.use(Router);

import { applyFilters, addFilter, addAction, doAction } from '@wordpress/hooks';

export default class matrixloader {
    constructor() {
        this.applyFilters = applyFilters;
        this.addFilter = addFilter;
        this.addAction = addAction;
        this.doAction = doAction;
        this.Vue = Vue;
        this.Router = Router;
    }

    $get(options) {
        return window.jQuery.get(window.matrixloaderAdmin.ajaxurl, options);
    }

    $adminGet(options) {
        options.action = 'matrixloader_admin_ajax';
        return window.jQuery.get(window.matrixloaderAdmin.ajaxurl, options);
    }

    $post(options) {
        return window.jQuery.post(window.matrixloaderAdmin.ajaxurl, options);
    }

    $adminPost(options) {
        options.action = 'matrixloader_admin_ajax';
        return window.jQuery.post(window.matrixloaderAdmin.ajaxurl, options);
    }

    $getJSON(options) {
        return window.jQuery.getJSON(window.matrixloaderAdmin.ajaxurl, options);
    }

}
