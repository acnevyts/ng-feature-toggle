import { ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureToggleUtilService } from './feature-toggle-util.service';
export declare class FeatureToggleUtilDirective {
    private element;
    private templateRef;
    private viewContainer;
    private featureToggleService;
    constructor(element: ElementRef, templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, featureToggleService: FeatureToggleUtilService);
    featureName: string;
}
