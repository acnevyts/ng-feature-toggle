import { FeatureToggle } from 'feature-toggle';
import { Injectable, Directive, Input, ElementRef, TemplateRef, ViewContainerRef, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeatureToggleUtilService extends FeatureToggle {
    constructor() {
        super();
    }
}
FeatureToggleUtilService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FeatureToggleUtilService.ctorParameters = () => [];
/** @nocollapse */ FeatureToggleUtilService.ngInjectableDef = defineInjectable({ factory: function FeatureToggleUtilService_Factory() { return new FeatureToggleUtilService(); }, token: FeatureToggleUtilService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeatureToggleUtilDirective {
    /**
     * @param {?} element
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} featureToggleService
     */
    constructor(element, templateRef, viewContainer, featureToggleService) {
        this.element = element;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.featureToggleService = featureToggleService;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set featureName(val) {
        if (val && this.featureToggleService.isEnabled(val)) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    }
}
FeatureToggleUtilDirective.decorators = [
    { type: Directive, args: [{
                selector: '[libFeature]'
            },] }
];
/** @nocollapse */
FeatureToggleUtilDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: FeatureToggleUtilService }
];
FeatureToggleUtilDirective.propDecorators = {
    featureName: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeatureToggleUtilModule {
}
FeatureToggleUtilModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FeatureToggleUtilDirective],
                imports: [],
                exports: [FeatureToggleUtilDirective]
            },] }
];

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