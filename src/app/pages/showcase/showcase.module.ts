import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../shared/shared.module';
import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseComponent } from './showcase.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [ShowcaseComponent, SliderComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShowcaseRoutingModule
  ]
})
export class ShowcaseModule { }
