import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import * as camera from '@nativescript/camera';
import { Image } from '@nativescript/core';

@Component({
  selector: 'Camera',
  templateUrl: './camera.component.html',
})
export class CameraComponent implements OnInit {

  public imagePhoto: Image;

  constructor() {
    // Use the component constructor to inject providers.
    this.imagePhoto = new Image();
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  public takePhoto(): void {
    camera.requestPermissions().then(
      () => {
        camera.takePicture().then(
          (photo) => {
            this.imagePhoto.src = photo;
          }
        )
      }
    )
  }
}
