/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureToggleUtilService } from './feature-toggle-util.service';
export class FeatureToggleUtilDirective {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    FeatureToggleUtilDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    FeatureToggleUtilDirective.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    FeatureToggleUtilDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    FeatureToggleUtilDirective.prototype.featureToggleService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS10b2dnbGUtdXRpbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mZWF0dXJlLXRvZ2dsZS11dGlsLyIsInNvdXJjZXMiOlsibGliL2ZlYXR1cmUtdG9nZ2xlLXV0aWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBS3pFLE1BQU0sT0FBTywwQkFBMEI7Ozs7Ozs7SUFFckMsWUFDVSxPQUFtQixFQUNuQixXQUE2QixFQUM3QixhQUErQixFQUMvQixvQkFBOEM7UUFIOUMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBMEI7SUFDeEQsQ0FBQzs7Ozs7SUFFRCxJQUNJLFdBQVcsQ0FBQyxHQUFXO1FBQ3pCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDekQ7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7O1lBTDBCLFVBQVU7WUFBRSxXQUFXO1lBQUUsZ0JBQWdCO1lBQzNELHdCQUF3Qjs7OzBCQWM5QixLQUFLOzs7Ozs7O0lBTkosNkNBQTJCOzs7OztJQUMzQixpREFBcUM7Ozs7O0lBQ3JDLG1EQUF1Qzs7Ozs7SUFDdkMsMERBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVUb2dnbGVVdGlsU2VydmljZSB9IGZyb20gJy4vZmVhdHVyZS10b2dnbGUtdXRpbC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xpYkZlYXR1cmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlVG9nZ2xlVXRpbERpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgZmVhdHVyZVRvZ2dsZVNlcnZpY2U6IEZlYXR1cmVUb2dnbGVVdGlsU2VydmljZSkge1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZlYXR1cmVOYW1lKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAmJiB0aGlzLmZlYXR1cmVUb2dnbGVTZXJ2aWNlLmlzRW5hYmxlZCh2YWwpKSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxufVxuIl19