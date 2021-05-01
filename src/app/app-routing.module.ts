import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'bluetooth',
    loadChildren: () => import('~/app/bluetooth/bluetooth.module').then((m) => m.BluetoothModule),
  },
  {
    path: 'gps',
    loadChildren: () => import('~/app/gps/gps.module').then((m) => m.GpsModule),
  },
  {
    path: 'camera',
    loadChildren: () => import('~/app/camera/camera.module').then((m) => m.CameraModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('~/app/settings/settings.module').then((m) => m.SettingsModule),
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
