import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from "@angular/http";
import {MdIconRegistry} from "@angular2-material/icon";

import { CoreComponent } from './core.component';
import {LoginService} from "./login.service";
import {AuthGuardService} from "../guards/auth-guard.service";


@NgModule({
  imports: [
    CommonModule,HttpModule
  ],
  declarations: [CoreComponent],
  providers:[LoginService,MdIconRegistry,AuthGuardService],
  exports:[CoreComponent,HttpModule]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
