import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import * as geolocation from "@nativescript/geolocation";

interface Location {
  altitude: number;
  longitude: number;
}

@Component({
  selector: 'Gps',
  templateUrl: './gps.component.html',
})
export class GpsComponent implements OnInit {

  public location: Location;

  constructor() {
    // Use the component constructor to inject providers.
    this.location = {
      longitude: 0,
      altitude: 0
    }
  }

  ngOnInit(): void {
    // Init your component properties here.

    geolocation.isEnabled().then(
      (isEnabled) => {
        if (!isEnabled) {
          geolocation.enableLocationRequest();
        }
      }
    )
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  public getLocation(): void {
    geolocation.watchLocation(
      (location) => {
        this.location.altitude = location.altitude;
        this.location.longitude = location.longitude;
      },
      (e) => {
        console.log(e);
      },
      {minimumUpdateTime: 1000 * 20}
    )
  }

}
