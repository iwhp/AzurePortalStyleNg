﻿(function () {
    'use strict';

    angular.module('azureportalng')
        .controller('blade1', ['$scope', '$http', 'bladeService', blade1]);

    function blade1($scope, $http, bladeService) {
        /* jshint validthis: true */
        var vm = this;

        vm.blade = {
            title: 'Blade 1',
            subTitle: 'First Blade',
            isCommandDocument: true,
            commandDocument: dummy,
            isNavGrid: true,
            navGrid: {
                items: [
                    { title: 'Menu 1', bladePath: '/AzurePortalNgSampleAmms/bergbahnenevent/blades/exportexcel/exportexcel.html' },
                    { title: '', style: { cursor: 'default' }, bladePath: '' },
                    { title: 'Menu 2', bladePath: '/AzurePortalNgSampleAmms/bergbahnenevent/blades/exportexcel/exportexcel.html', roles: 'lgtbc-admin' },
                ]
            }
        };

        vm.blade.navGrid.navigateTo = navigateTo;

        function navigateTo(id) {
            bladeService.addBladePath(id);
        }

        function dummy() { }
    }
})();
