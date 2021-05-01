import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'

import { Bluetooth } from '@nativescript-community/ble';
const bluetooth = new Bluetooth();

@Component({
  selector: 'Bluetooth',
  templateUrl: './bluetooth.component.html',
  styles: [`
    Button { background-color: blue; color: white;}
  `]
})
export class BluetoothComponent implements OnInit {

  public arrayBluetooth: Array<any>;

  constructor() {
    // Use the component constructor to inject providers.
    this.arrayBluetooth = [];
  }

  ngOnInit(): void {
    // Init your component properties here.

    bluetooth.isBluetoothEnabled().then(
      function(enabled) {
        console.log("Enabled? " + enabled);
      }
    );
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  public startScanning(): void {
    bluetooth.startScanning({
      seconds: 4,
      onDiscovered: (peripheral) => {
        console.log("Periperhal found with UUID: " + peripheral.UUID);
        this.arrayBluetooth.push(peripheral.UUID);
      }
    }).then(function() {
      console.log("scanning complete");
    }, function (err) {
      console.log("error while scanning: " + err);
    });
  }

  public stopScanning(): void {
    bluetooth.stopScanning().then(function() {
      console.log("scanning stopped");
    });
  }
}
