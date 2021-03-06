import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { BluetoothComponent } from './bluetooth.component'

const routes: Routes = [{ path: '', component: BluetoothComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class BluetoothRoutingModule {}
