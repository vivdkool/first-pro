/**
 * Created by vitiwary on 17/08/16.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import {HomeComponent} from "./home.component";
import {routing} from "./home.routing";


import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,routing,SharedModule
  ]
})
export class HomeModule {

}
