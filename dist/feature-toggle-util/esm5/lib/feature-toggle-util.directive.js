/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureToggleUtilService } from './feature-toggle-util.service';
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
export { FeatureToggleUtilDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS10b2dnbGUtdXRpbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mZWF0dXJlLXRvZ2dsZS11dGlsLyIsInNvdXJjZXMiOlsibGliL2ZlYXR1cmUtdG9nZ2xlLXV0aWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXpFO0lBS0Usb0NBQ1UsT0FBbUIsRUFDbkIsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0Isb0JBQThDO1FBSDlDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTBCO0lBQ3hELENBQUM7SUFFRCxzQkFDSSxtREFBVzs7Ozs7UUFEZixVQUNnQixHQUFXO1lBQ3pCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDNUI7UUFDSCxDQUFDOzs7T0FBQTs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBTDBCLFVBQVU7Z0JBQUUsV0FBVztnQkFBRSxnQkFBZ0I7Z0JBQzNELHdCQUF3Qjs7OzhCQWM5QixLQUFLOztJQVNSLGlDQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FsQlksMEJBQTBCOzs7Ozs7SUFHbkMsNkNBQTJCOzs7OztJQUMzQixpREFBcUM7Ozs7O0lBQ3JDLG1EQUF1Qzs7Ozs7SUFDdkMsMERBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVUb2dnbGVVdGlsU2VydmljZSB9IGZyb20gJy4vZmVhdHVyZS10b2dnbGUtdXRpbC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xpYkZlYXR1cmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlVG9nZ2xlVXRpbERpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgZmVhdHVyZVRvZ2dsZVNlcnZpY2U6IEZlYXR1cmVUb2dnbGVVdGlsU2VydmljZSkge1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZlYXR1cmVOYW1lKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAmJiB0aGlzLmZlYXR1cmVUb2dnbGVTZXJ2aWNlLmlzRW5hYmxlZCh2YWwpKSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxufVxuIl19