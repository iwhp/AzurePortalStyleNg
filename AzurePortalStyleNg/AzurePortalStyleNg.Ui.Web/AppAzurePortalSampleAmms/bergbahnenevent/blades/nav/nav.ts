﻿(function () {
    'use strict';

    angular.module('appAzurePortal').controller('nav', ['$scope', '$http', nav]);

    function nav($scope, $http) {
        var vm = this;

        vm.activate = activate;
        vm.navigateTo = navigateTo;

        function activate() { }

        function navigateTo(id) {

            if (id === 'amms-nav') {
                vm.views[0] = { title: 'Amms', subTitle: 'Administration' };
                return;
            }

            console.log('Did not navigate [navigateTo]! No route defined for id: ' + id);
        }
    }
})();
