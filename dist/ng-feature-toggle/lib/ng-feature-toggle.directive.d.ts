import { ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgFeatureToggleService } from './ng-feature-toggle.service';
export declare class NgFeatureToggleDirective {
    private element;
    private templateRef;
    private viewContainer;
    private featureToggleService;
    constructor(element: ElementRef, templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, featureToggleService: NgFeatureToggleService);
    featureName: string;
}
