import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { GpsRoutingModule } from './gps-routing.module'
import { GpsComponent } from './gps.component'

@NgModule({
  imports: [NativeScriptCommonModule, GpsRoutingModule],
  declarations: [GpsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class GpsModule {}
