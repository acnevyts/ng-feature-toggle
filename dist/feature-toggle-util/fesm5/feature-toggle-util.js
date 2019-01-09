import { __extends } from 'tslib';
import { FeatureToggle } from 'feature-toggle';
import { Injectable, Directive, Input, ElementRef, TemplateRef, ViewContainerRef, NgModule, defineInjectable } from '@angular/core';

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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FeatureToggleUtilService.ctorParameters = function () { return []; };
    /** @nocollapse */ FeatureToggleUtilService.ngInjectableDef = defineInjectable({ factory: function FeatureToggleUtilService_Factory() { return new FeatureToggleUtilService(); }, token: FeatureToggleUtilService, providedIn: "root" });
    return FeatureToggleUtilService;
}(FeatureToggle));

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
         */
        function (val) {
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
        { type: Directive, args: [{
                    selector: '[libFeature]'
                },] }
    ];
    /** @nocollapse */
    FeatureToggleUtilDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: FeatureToggleUtilService }
    ]; };
    FeatureToggleUtilDirective.propDecorators = {
        featureName: [{ type: Input }]
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
        { type: NgModule, args: [{
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

export { FeatureToggleUtilService, FeatureToggleUtilModule, FeatureToggleUtilDirective as ɵa };

//# sourceMappingURL=feature-toggle-util.js.map