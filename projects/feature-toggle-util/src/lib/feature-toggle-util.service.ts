import { Injectable } from '@angular/core';
import { FeatureToggle } from 'feature-toggle';

@Injectable({
  providedIn: 'root'
})
export class FeatureToggleUtilService extends FeatureToggle {
  constructor() {
    super();
  }
}
