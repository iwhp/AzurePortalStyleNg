﻿//#region Register Angular Module
(function () {
    'use strict';
    var app = angular.module('sampleapp', ['azureportalng', 'ngResource', 'ngDialog', 'ngMockE2E']);
    app.config([function () {
            AzurePortalNg.Debug.isEnabled = true;
            AzurePortalNg.Debug.isWithObjects = false;
        }]);
    //------------------------------------------------------------------------------------------------------------
    // TODO: 2015-04-25/hp: The sample should define the test environment ($httpBackend) here.
    //                      At the moment it is defined in 'sampleShell.ts'.
    //------------------------------------------------------------------------------------------------------------
    //angular.module('sampleapp', ['ngMockE2E'])
    //    .run(function ($httpBackend) {
    //    $httpBackend.whenGET(/\/AzurePortalNg\/.*/).passThrough();
    //});
})();
//#endregion
//# sourceMappingURL=sampleApp.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SampleTS;
(function (SampleTS) {
    'use strict';
    //#region Class Definition
    var SampleShell = (function (_super) {
        __extends(SampleShell, _super);
        //#region Properties
        //#endregion
        //#region Constructors
        function SampleShell(portalService) {
            _super.call(this, 'SAMPLE TypeScript', portalService);
            this.portalService.panorama.startboard.tiles.showTiles = true;
            this.portalService.panorama.avatarMenu.userAccount = new AzurePortalNg.UserAccount('useraccount@mail.com', 'first', 'last');
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Navigation 2', '/SampleTS/nav2/nav2.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 1-1', '/SampleTS/blade11/blade11.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 2', '/SampleTS/blade2/blade2.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 2-1', '/SampleTS/blade21/blade21.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('List 1', '/SampleTS/list1/list1.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Detail 1', '/SampleTS/detail1/detail1.html', portalService));
            tile.subTitle = 'TypeScript based';
            this.setObsoleteLayoutProperites();
            this.httpTestData();
        }
        //#endregion
        //#region Methods
        SampleShell.prototype.httpTestData = function () {
            var customers = new Array();
            customers.push(new SampleTS.Customer(1001, 'Harry', 'Sleeper'));
            customers.push(new SampleTS.Customer(1002, 'Eva', 'Cooker'));
            customers.push(new SampleTS.Customer(1003, 'Niklas', 'Soccer'));
            customers.push(new SampleTS.Customer(1004, 'Julia', 'Singer'));
            this.portalService.$httpBackend.whenGET(/\/AzurePortalNg\/.*/).passThrough();
            this.portalService.$httpBackend.whenGET(/\/SampleTS\/.*/).passThrough();
            this.portalService.$httpBackend.whenGET('/customers')
                .respond(customers);
        };
        return SampleShell;
    })(AzurePortalNg.PortalShell);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleapp').controller('sampleShell', ['azurePortalNg.portalService', SampleShell]);
    })();
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=sampleShell.js.map
var SampleTS;
(function (SampleTS) {
    'use strict';
    //#region Class Definition
    var Customer = (function () {
        function Customer(customerPkId, firstName, lastName) {
            this.customerPkId = customerPkId;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        return Customer;
    })();
    SampleTS.Customer = Customer;
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=Customer.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SampleTS;
(function (SampleTS) {
    'use strict';
    //#region Class Definition
    var Blade11 = (function (_super) {
        __extends(Blade11, _super);
        //#region Properties
        //#endregion
        //#region Constructors
        function Blade11(portalService) {
            _super.call(this, portalService, '/SampleTS/blade11/blade11.html', 'Blade 1-1', 'TypeScript based', 315);
            this.isCommandNew = true;
            this.commandNewText = 'Blade 2';
            this.statusbar = 'Blade 1-1...';
        }
        //#endregion
        //#region Methods - Overrides for Blade
        Blade11.prototype.onCommandNew = function () {
            this.portalService.bladeArea.addBlade('/SampleTS/blade2/blade2.html', this.path);
        };
        //#endregion
        //#region Data Access
        Blade11.prototype.onGetDataList = function () {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        return Blade11;
    })(AzurePortalNg.BladeList);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleapp').controller('blade11', ['azurePortalNg.portalService', Blade11]);
    })();
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=blade11.js.map
(function () {
    'use strict';
    angular.module('sampleapp').directive('blade11Blade', [blade11Blade]);
    function blade11Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            controller: 'blade11',
            controllerAs: 'vm',
        };
    }
})();
//# sourceMappingURL=blade11blade.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SampleTS;
(function (SampleTS) {
    'use strict';
    //#region Class Definition
    var Blade2 = (function (_super) {
        __extends(Blade2, _super);
        //#region Properties
        //#endregion
        //#region Constructors
        function Blade2(portalService) {
            _super.call(this, portalService, '/SampleTS/blade2/blade2.html', 'Blade 2', 'TypeScript based', 315);
            this.isCommandNew = true;
            this.commandNewText = 'Blade 2-1';
            this.isCommandSave = true;
            this.commandSaveText = 'Blade 1';
            this.statusbar = 'Blade 2...';
        }
        //#endregion
        //#region Methods - Overrides for Blade
        Blade2.prototype.onCommandNew = function () {
            this.portalService.bladeArea.addBlade('/SampleTS/blade21/blade21.html', this.path);
        };
        Blade2.prototype.onCommandSave = function () {
            this.portalService.bladeArea.addBlade('/SampleTS/blade1/blade1.html', this.path);
        };
        //#endregion
        //#region Data Access
        Blade2.prototype.onGetDataList = function () {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        return Blade2;
    })(AzurePortalNg.BladeList);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleapp').controller('blade2', ['azurePortalNg.portalService', Blade2]);
    })();
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=blade2.js.map
(function () {
    'use strict';
    angular.module('sampleapp').directive('blade2Blade', [blade2Blade]);
    function blade2Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            controller: 'blade2',
            controllerAs: 'vm',
        };
    }
})();
//# sourceMappingURL=blade2blade.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SampleTS;
(function (SampleTS) {
    'use strict';
    //#region Class Definition
    var Blade21 = (function (_super) {
        __extends(Blade21, _super);
        //#region Constructors
        function Blade21(portalService) {
            _super.call(this, portalService, '/SampleTS/blade21/blade21.html', 'Blade 2-1', 'TypeScript based', 315);
            this.isCommandNew = true;
            this.commandNewText = 'Blade 2';
            this.statusbar = 'Blade 2-1...';
        }
        //#endregion
        //#region Methods - Overrides for Blade
        Blade21.prototype.onCommandNew = function () {
            this.portalService.bladeArea.addBlade('/SampleTS/blade2/blade2.html', this.path);
        };
        //#endregion
        //#region Data Access
        Blade21.prototype.onGetDataList = function () {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        return Blade21;
    })(AzurePortalNg.BladeList);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleapp').controller('blade21', ['azurePortalNg.portalService', Blade21]);
    })();
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=blade21.js.map
(function () {
    'use strict';
    angular.module('sampleapp').directive('blade21Blade', [blade21Blade]);
    function blade21Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            controller: 'blade21',
            controllerAs: 'vm',
        };
    }
})();
//# sourceMappingURL=blade21blade.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SampleTS;
(function (SampleTS) {
    'use strict';
    //#region Class Definition
    var Detail1 = (function (_super) {
        __extends(Detail1, _super);
        //#region Properties
        //#endregion
        //#region Constructors
        function Detail1(portalService) {
            _super.call(this, portalService, '/SampleTS/detail1/detail1.html', 'Detail-1', 'TypeScript based', 315);
            this.statusbar = 'Detail-1...';
        }
        //#endregion
        //#region Data Access
        Detail1.prototype.onGetDataDetail = function () {
            return this.portalService.$http({ method: 'GET', url: '/customer/1' });
        };
        return Detail1;
    })(AzurePortalNg.BladeDetail);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleapp').controller('detail1', ['azurePortalNg.portalService', Detail1]);
    })();
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=detail1.js.map
(function () {
    'use strict';
    angular.module('sampleapp').directive('detail1Blade', [detail1Blade]);
    function detail1Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            controller: 'detail1',
            controllerAs: 'vm',
        };
    }
})();
//# sourceMappingURL=detail1blade.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SampleTS;
(function (SampleTS) {
    'use strict';
    //#region Class Definition
    var List1 = (function (_super) {
        __extends(List1, _super);
        //#region Constructors
        function List1(portalService) {
            _super.call(this, portalService, '/SampleTS/list1/list1.html', 'List-1', 'TypeScript based', 315);
            //this.isCommandNew = true;
            //this.commandNewText = 'Detail-1';
            this.statusbar = 'List-1...';
            this.activate();
        }
        //#endregion
        //#region Methods - Overrides for Blade
        List1.prototype.onCommandNew = function () {
            AzurePortalNg.Debug.write('[sampleTS-debug] \'List1.onCommandNew\' called.', [this]);
            this.portalService.bladeArea.addBlade('/SampleTS/detail1/detail1.html', this.path);
        };
        List1.prototype.onNavigateTo = function (id) {
            AzurePortalNg.Debug.write('[sampleTS-debug] \'List1.onNavigateTo\' called.', [this, id]);
            this.portalService.bladeArea.parameter.id = id;
            this.portalService.bladeArea.addBlade('/SampleTS/detail1/detail1.html', this.blade.path);
            this.portalService.$rootScope.$broadcast('bladeService.parameter', this.portalService.bladeArea.parameter);
        };
        //#endregion
        //#region Data Access
        List1.prototype.onGetDataList = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'List1.onGetDataList\' called.', [this]);
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        return List1;
    })(AzurePortalNg.BladeList);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleapp').controller('list1', ['azurePortalNg.portalService', List1]);
    })();
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=list1.js.map
(function () {
    'use strict';
    angular.module('sampleapp').directive('list1Blade', [list1Blade]);
    function list1Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            controller: 'list1',
            controllerAs: 'vm',
        };
    }
})();
//# sourceMappingURL=list1blade.js.map
//#region Class Definition
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Nav2 = (function (_super) {
    __extends(Nav2, _super);
    //#region Constructors
    function Nav2(portalService) {
        _super.call(this, portalService, '/SampleTS/nav2/nav2.html', 'Navigation 2', 'TypeScript based', 315);
        AzurePortalNg.Debug.write('[sampleTS-debug] \'Nav2\' constructor called.', [this]);
        this.navItems = [
            new AzurePortalNg.BladeNavItem('Navigation 2', '/SampleTS/nav2/nav2.html'),
            new AzurePortalNg.BladeNavItem('Blade 1-1', '/SampleTS/blade11/blade11.html'),
            new AzurePortalNg.BladeNavItem('Blade 2', '/SampleTS/blade2/blade2.html'),
            new AzurePortalNg.BladeNavItem('Blade 2-1', '/SampleTS/blade21/blade21.html'),
            new AzurePortalNg.BladeNavItem('List 1', '/SampleTS/list1/list1.html'),
            new AzurePortalNg.BladeNavItem('Detail 1', '/SampleTS/detail1/detail1.html'),
            new AzurePortalNg.BladeNavItem(),
            new AzurePortalNg.BladeNavItem('no path'),
            new AzurePortalNg.BladeNavItem('go to microsoft.com', null, 'http://www.microsoft.com'),
        ];
        this.statusbar = 'Nav 2...';
    }
    return Nav2;
})(AzurePortalNg.BladeNav);
//#endregion
//#region Angular Registration
(function () {
    'use strict';
    angular.module('sampleapp').controller('nav2', ['azurePortalNg.portalService', Nav2]);
})();
//#endregion
//# sourceMappingURL=nav2.js.map