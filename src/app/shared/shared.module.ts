import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';

import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';
import {MdToolbarModule} from "@angular2-material/toolbar";
import {MdCardModule} from "@angular2-material/card";
import {MdButtonModule} from "@angular2-material/button";
import {MdIconModule,} from "@angular2-material/icon";
import {MdInputModule} from "@angular2-material/input";
import {MdListModule} from "@angular2-material/list";

import {NG2D3Module} from "ng2d3/release/ng2d3";


import { DashletComponent } from './dashlet/dashlet.component';
import { PieChartComponent } from './d3charts/pie-chart/pie-chart.component';

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule.forRoot(),MdToolbarModule.forRoot(), MdCardModule.forRoot(),MdButtonModule.forRoot(),MdIconModule.forRoot(),
    MdInputModule.forRoot(),MdListModule.forRoot(), NG2D3Module
  ],
  declarations: [
    SharedComponent,
    DashletComponent,
    PieChartComponent
  ],
  exports:[SharedComponent, DashletComponent,
    MdSidenavModule, MdToolbarModule, MdCardModule,MdButtonModule,MdIconModule,MdInputModule,MdListModule,]
})
export class SharedModule { }
