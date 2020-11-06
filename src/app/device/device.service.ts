import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  getDeviceInfo() {
    return Device.getInfo()
      .then(info => {
        return info;
      });
  }

  getFullDeviceDetails() {
   return this.getDeviceInfo()
    .then(info => {
      return [
        {name: 'OS', val: info.osVersion},
        {name: 'Browser', val: navigator.appVersion},
        {name: 'Platform', val: info.platform},
        {name: 'Manufacturer', val: info.manufacturer},
        {name: 'Model', val: info.model},
        {name: 'Screen size:', val: `W: ${window.screen.availWidth}px H:${window.screen.availHeight}px`}
      ]
    });
  }

}