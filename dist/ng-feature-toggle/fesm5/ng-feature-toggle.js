import { __extends } from 'tslib';
import { FeatureToggle } from 'feature-toggle';
import { Injectable, Directive, Input, ElementRef, TemplateRef, ViewContainerRef, NgModule, defineInjectable } from '@angular/core';

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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgFeatureToggleService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgFeatureToggleService.ngInjectableDef = defineInjectable({ factory: function NgFeatureToggleService_Factory() { return new NgFeatureToggleService(); }, token: NgFeatureToggleService, providedIn: "root" });
    return NgFeatureToggleService;
}(FeatureToggle));

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
    NgFeatureToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[libFeature]'
                },] }
    ];
    /** @nocollapse */
    NgFeatureToggleDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: NgFeatureToggleService }
    ]; };
    NgFeatureToggleDirective.propDecorators = {
        featureName: [{ type: Input }]
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
        { type: NgModule, args: [{
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

export { NgFeatureToggleService, NgFeatureToggleDirective, NgFeatureToggleModule };

//# sourceMappingURL=ng-feature-toggle.js.map