import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NzCarouselModule
  ],
  exports: [
    HttpClientModule,
    NzCarouselModule,
    NzButtonModule,
    NzModalModule

  ]
})
export class SharedModule { }
