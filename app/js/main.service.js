(function() {
    'use strict';

    angular
        .module('app')
        .factory('getDronestreams', getDronestreams); // https://docs.angularjs.org/guide/services

    getDronestreams.$inject = ['$http', '$log', '$q']; // https://github.com/johnpapa/angular-styleguide/tree/master/a1#manual-annotating-for-dependency-injection

    /* @ngInject */
    function getDronestreams($http, $log, $q) {

        var service = {
            getData: getData,
            getScreenshot: getScreenshot,
        };

        return service;

        function getData() {

            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'https://joshbegley-dronestream.p.mashape.com/data'
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('Success!');
                    } else {
                        defer.reject(response);
                        //error if found but empty
                        toastr.warning('Failure </br>' + response.config.url);
                    }
                },
                // failure
                function(error) {
                    //error if the file isn't found
                    defer.reject(error);
                    $log.error(error);
                    toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                });

            return defer.promise;

        }



        function getScreenshot() {

                var defer = $q.defer();
                $http({
                    method: 'GET',
                    url: 'https://aladhan.p.mashape.com/calendarByCity?city=' + newData.location + '&country=' + newData.country + '&month=' + newData.date.substr(5, 2) + '&year=' + newData.date.substr(0, 4)


                }).then(function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);
                            toastr.success('Success!');
                        } else {
                            defer.reject(response);
                            //error if found but empty
                            toastr.warning('Failure </br>' + response.config.url);
                        }
                    },
                    // failure
                    function(error) {
                        //error if the file isn't found
                        defer.reject(error);
                        $log.error(error);
                        toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                    });
                return defer.promise;
        }

    }
})();
