import { Directive, Input, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureToggleUtilService } from './feature-toggle-util.service';

@Directive({
  selector: '[libFeature]'
})
export class FeatureToggleUtilDirective {

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private featureToggleService: FeatureToggleUtilService) {
  }

  @Input()
  set featureName(val: string) {
    if (val && this.featureToggleService.isEnabled(val)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
