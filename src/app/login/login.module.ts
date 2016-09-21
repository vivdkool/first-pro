/**
 * Created by vitiwary on 17/08/16.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import {LoginComponent} from "./login.component";
import {routing} from "./login.routing";
import {SharedModule} from "../shared/shared.module";





@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,routing,SharedModule
  ],
  //providers: [LoginService]
})
export class LoginModule {

}
