﻿(function () {
    'use strict';

    angular.module('sampleapp')
        .directive('sample1Blade11Blade', [sample1Blade11Blade]);

    function sample1Blade11Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            controller: 'blade11',
            controllerAs: 'vm',
            //link: function (scope, element, attrs, controller) {
            //    scope.bladeClose = function () {
            //        bladeService.clearLastLevel();
            //    };
            //}
        };
    }
})();
