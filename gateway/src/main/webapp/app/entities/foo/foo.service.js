(function() {
    'use strict';
    angular
        .module('gatApp')
        .factory('Foo', Foo);

    Foo.$inject = ['$resource'];

    function Foo ($resource) {
        var resourceUrl =  'app1/' + 'api/foos/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
