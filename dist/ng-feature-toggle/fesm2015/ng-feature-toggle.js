import { FeatureToggle } from 'feature-toggle';
import { Injectable, Directive, Input, ElementRef, TemplateRef, ViewContainerRef, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgFeatureToggleService extends FeatureToggle {
    constructor() {
        super();
    }
}
NgFeatureToggleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgFeatureToggleService.ctorParameters = () => [];
/** @nocollapse */ NgFeatureToggleService.ngInjectableDef = defineInjectable({ factory: function NgFeatureToggleService_Factory() { return new NgFeatureToggleService(); }, token: NgFeatureToggleService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgFeatureToggleDirective {
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
NgFeatureToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[libFeature]'
            },] }
];
/** @nocollapse */
NgFeatureToggleDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: NgFeatureToggleService }
];
NgFeatureToggleDirective.propDecorators = {
    featureName: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgFeatureToggleModule {
}
NgFeatureToggleModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgFeatureToggleDirective],
                imports: [],
                exports: [NgFeatureToggleDirective]
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

export { NgFeatureToggleService, NgFeatureToggleDirective, NgFeatureToggleModule };

//# sourceMappingURL=ng-feature-toggle.js.map