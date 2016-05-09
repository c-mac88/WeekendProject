(function() {
    'use strict';

    angular
        .module('app')
        .controller('State1Controller', State1Controller);

    State1Controller.$inject = ['getDronestreams'];



    /* @ngInject */
    function State1Controller(getDronestreams) {
        var vm = this;

        getDronestreams.getData().then(
            function(response) {
                vm.Strikes = response.data;
                var data = vm.Strikes.strike;
                var a = Math.floor((Math.random() * 591) + 1);
                var b = a + 30;
                var newData = data.slice(a, b);
                vm.newStrikes = newData;
                console.log(newData);
            });
    }
})();
