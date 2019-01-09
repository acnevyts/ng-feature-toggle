(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('feature-toggle'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('feature-toggle-util', ['exports', 'feature-toggle', '@angular/core'], factory) :
    (factory((global['feature-toggle-util'] = {}),global.featureToggle,global.ng.core));
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
    var FeatureToggleUtilService = /** @class */ (function (_super) {
        __extends(FeatureToggleUtilService, _super);
        function FeatureToggleUtilService() {
            return _super.call(this) || this;
        }
        FeatureToggleUtilService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FeatureToggleUtilService.ctorParameters = function () { return []; };
        /** @nocollapse */ FeatureToggleUtilService.ngInjectableDef = i0.defineInjectable({ factory: function FeatureToggleUtilService_Factory() { return new FeatureToggleUtilService(); }, token: FeatureToggleUtilService, providedIn: "root" });
        return FeatureToggleUtilService;
    }(featureToggle.FeatureToggle));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FeatureToggleUtilDirective = /** @class */ (function () {
        function FeatureToggleUtilDirective(element, templateRef, viewContainer, featureToggleService) {
            this.element = element;
            this.templateRef = templateRef;
            this.viewContainer = viewContainer;
            this.featureToggleService = featureToggleService;
        }
        Object.defineProperty(FeatureToggleUtilDirective.prototype, "featureName", {
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
        FeatureToggleUtilDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[libFeature]'
                    },] }
        ];
        /** @nocollapse */
        FeatureToggleUtilDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.TemplateRef },
                { type: i0.ViewContainerRef },
                { type: FeatureToggleUtilService }
            ];
        };
        FeatureToggleUtilDirective.propDecorators = {
            featureName: [{ type: i0.Input }]
        };
        return FeatureToggleUtilDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FeatureToggleUtilModule = /** @class */ (function () {
        function FeatureToggleUtilModule() {
        }
        FeatureToggleUtilModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [FeatureToggleUtilDirective],
                        imports: [],
                        exports: [FeatureToggleUtilDirective]
                    },] }
        ];
        return FeatureToggleUtilModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.FeatureToggleUtilService = FeatureToggleUtilService;
    exports.FeatureToggleUtilModule = FeatureToggleUtilModule;
    exports.ɵa = FeatureToggleUtilDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=feature-toggle-util.umd.js.map