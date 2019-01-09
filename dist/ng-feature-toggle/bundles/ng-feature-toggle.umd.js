(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('feature-toggle'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-feature-toggle', ['exports', 'feature-toggle', '@angular/core'], factory) :
    (factory((global['ng-feature-toggle'] = {}),global.featureToggle,global.ng.core));
}(this, (function (exports,featureToggle,i0) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgFeatureToggleService = /** @class */ (function (_super) {
        __extends(NgFeatureToggleService, _super);
        function NgFeatureToggleService() {
            return _super.call(this) || this;
        }
        NgFeatureToggleService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgFeatureToggleService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgFeatureToggleService.ngInjectableDef = i0.defineInjectable({ factory: function NgFeatureToggleService_Factory() { return new NgFeatureToggleService(); }, token: NgFeatureToggleService, providedIn: "root" });
        return NgFeatureToggleService;
    }(featureToggle.FeatureToggle));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgFeatureToggleDirective = /** @class */ (function () {
        function NgFeatureToggleDirective(element, templateRef, viewContainer, featureToggleService) {
            this.element = element;
            this.templateRef = templateRef;
            this.viewContainer = viewContainer;
            this.featureToggleService = featureToggleService;
        }
        Object.defineProperty(NgFeatureToggleDirective.prototype, "featureName", {
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val && this.featureToggleService.isEnabled(val)) {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
                else {
                    this.viewContainer.clear();
                }
            },
            enumerable: true,
            configurable: true
        });
        NgFeatureToggleDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[libFeature]'
                    },] }
        ];
        /** @nocollapse */
        NgFeatureToggleDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.TemplateRef },
                { type: i0.ViewContainerRef },
                { type: NgFeatureToggleService }
            ];
        };
        NgFeatureToggleDirective.propDecorators = {
            featureName: [{ type: i0.Input }]
        };
        return NgFeatureToggleDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgFeatureToggleModule = /** @class */ (function () {
        function NgFeatureToggleModule() {
        }
        NgFeatureToggleModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [NgFeatureToggleDirective],
                        imports: [],
                        exports: [NgFeatureToggleDirective]
                    },] }
        ];
        return NgFeatureToggleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgFeatureToggleService = NgFeatureToggleService;
    exports.NgFeatureToggleDirective = NgFeatureToggleDirective;
    exports.NgFeatureToggleModule = NgFeatureToggleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-feature-toggle.umd.js.map