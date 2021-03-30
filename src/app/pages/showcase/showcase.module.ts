import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseComponent } from './showcase.component';
import { SliderComponent } from './slider/slider.component';
import { DetailsComponent } from './details/details.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [ShowcaseComponent, SliderComponent, DetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShowcaseRoutingModule
  ]
})
export class ShowcaseModule { }
