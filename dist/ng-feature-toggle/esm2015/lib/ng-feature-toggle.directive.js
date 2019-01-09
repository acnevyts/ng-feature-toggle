/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgFeatureToggleService } from './ng-feature-toggle.service';
export class NgFeatureToggleDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmVhdHVyZS10b2dnbGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZmVhdHVyZS10b2dnbGUvIiwic291cmNlcyI6WyJsaWIvbmctZmVhdHVyZS10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBS3JFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7SUFFbkMsWUFDVSxPQUFtQixFQUNuQixXQUE2QixFQUM3QixhQUErQixFQUMvQixvQkFBNEM7UUFINUMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBd0I7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxJQUNJLFdBQVcsQ0FBQyxHQUFXO1FBQ3pCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDekQ7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7O1lBTDBCLFVBQVU7WUFBRSxXQUFXO1lBQUUsZ0JBQWdCO1lBQzNELHNCQUFzQjs7OzBCQWM1QixLQUFLOzs7Ozs7O0lBTkosMkNBQTJCOzs7OztJQUMzQiwrQ0FBcUM7Ozs7O0lBQ3JDLGlEQUF1Qzs7Ozs7SUFDdkMsd0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRmVhdHVyZVRvZ2dsZVNlcnZpY2UgfSBmcm9tICcuL25nLWZlYXR1cmUtdG9nZ2xlLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbGliRmVhdHVyZV0nXG59KVxuZXhwb3J0IGNsYXNzIE5nRmVhdHVyZVRvZ2dsZURpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgZmVhdHVyZVRvZ2dsZVNlcnZpY2U6IE5nRmVhdHVyZVRvZ2dsZVNlcnZpY2UpIHtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmZWF0dXJlTmFtZSh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgJiYgdGhpcy5mZWF0dXJlVG9nZ2xlU2VydmljZS5pc0VuYWJsZWQodmFsKSkge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==