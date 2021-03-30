import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowcaseComponent} from "./showcase.component";
import {SliderComponent} from "./slider/slider.component";

const routes: Routes = [
  {
    path: '',
    component: ShowcaseComponent,
    children: [
      {
        path: 'slider',
        component: SliderComponent
      },
      {
        path: '**',
        redirectTo: 'slider',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseRoutingModule { }
