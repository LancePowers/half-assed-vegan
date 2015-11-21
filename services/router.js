(function () {
    'use strict'
    angular
        .module('app')
        .factory('router', router);

    router.$inject = ['$http'];

    function router($http) {
        var obj = {};
        //2. post request
        obj.post = function (payload) {
            var url = '';

            return $http.post(url, payload);
        };
        return obj;
    };
})()