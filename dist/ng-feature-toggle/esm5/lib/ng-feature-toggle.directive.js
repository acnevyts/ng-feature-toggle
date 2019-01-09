/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgFeatureToggleService } from './ng-feature-toggle.service';
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
export { NgFeatureToggleDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgFeatureToggleDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    NgFeatureToggleDirective.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    NgFeatureToggleDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    NgFeatureToggleDirective.prototype.featureToggleService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmVhdHVyZS10b2dnbGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZmVhdHVyZS10b2dnbGUvIiwic291cmNlcyI6WyJsaWIvbmctZmVhdHVyZS10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXJFO0lBS0Usa0NBQ1UsT0FBbUIsRUFDbkIsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0Isb0JBQTRDO1FBSDVDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXdCO0lBQ3RELENBQUM7SUFFRCxzQkFDSSxpREFBVzs7Ozs7UUFEZixVQUNnQixHQUFXO1lBQ3pCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDNUI7UUFDSCxDQUFDOzs7T0FBQTs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBTDBCLFVBQVU7Z0JBQUUsV0FBVztnQkFBRSxnQkFBZ0I7Z0JBQzNELHNCQUFzQjs7OzhCQWM1QixLQUFLOztJQVNSLCtCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FsQlksd0JBQXdCOzs7Ozs7SUFHakMsMkNBQTJCOzs7OztJQUMzQiwrQ0FBcUM7Ozs7O0lBQ3JDLGlEQUF1Qzs7Ozs7SUFDdkMsd0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRmVhdHVyZVRvZ2dsZVNlcnZpY2UgfSBmcm9tICcuL25nLWZlYXR1cmUtdG9nZ2xlLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbGliRmVhdHVyZV0nXG59KVxuZXhwb3J0IGNsYXNzIE5nRmVhdHVyZVRvZ2dsZURpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgZmVhdHVyZVRvZ2dsZVNlcnZpY2U6IE5nRmVhdHVyZVRvZ2dsZVNlcnZpY2UpIHtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmZWF0dXJlTmFtZSh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgJiYgdGhpcy5mZWF0dXJlVG9nZ2xlU2VydmljZS5pc0VuYWJsZWQodmFsKSkge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==