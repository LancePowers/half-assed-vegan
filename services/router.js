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
            var url = 'http://localhost:3000/v1/vegan';
            return $http.post(url, payload);
        };
        return obj;
    };
})()