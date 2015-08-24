﻿(function () {
    'use strict';

    angular.module('sampleapp').controller('nav1', ['$scope', '$http', 'azurePortalNg.portalService', nav1]);

    function nav1($scope, $http, bladeService: AzurePortalNg.PortalService) {
        /* jshint validthis: true */
        var vm = this;

        vm.blade = {
            title: 'Navigation 1',
            subTitle: 'Javascript based',
            isNavGrid: true,
            statusbar: 'Nav 1...',
            navGrid: {
                items: [
                    { title: 'Navigation 1', bladePath: '/Sample1/nav1/nav1.html' },
                    { title: 'Navigation 2', bladePath: '/Sample1/nav2/nav2.html' },
                    { title: 'Blade 1', bladePath: '/Sample1/blade1/blade1.html' },
                    { title: 'Blade 1-1', bladePath: '/Sample1/blade11/blade11.html' },
                    { title: 'Blade 2', bladePath: '/Sample1/blade2/blade2.html' },
                    { title: 'Blade 2-1', bladePath: '/Sample1/blade21/blade21.html' },
                    { title: 'List 1', bladePath: '/Sample1/list1/list1.html' },
                    { title: 'Detail 1', bladePath: '/Sample1/detail1/detail1.html' },
                    {}, // empty line
                    { title: 'no path' }, // line with not link
                    { title: 'go to microsoft.com', hrefPath: 'http://www.microsoft.com' }, // line with external link
                ]
            }
        };

        vm.blade.navGrid.navigateTo = navigateTo;

        function navigateTo(path: string) {
            bladeService.bladeArea.clearLevel(2);
            bladeService.bladeArea.addBlade(path);//.addBladePath(path);
        }

        function dummy() { }
    }
})();
