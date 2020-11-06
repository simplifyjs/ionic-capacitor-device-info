import { Component, OnInit } from '@angular/core';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {
  infos = [];

  constructor(
    private deviceSvc: DeviceService
  ) { }

  ngOnInit() {
    this.getInfos();
  }

  async getInfos() {
    const completeDeviceInfo = await this.deviceSvc.getFullDeviceDetails();
    this.infos = completeDeviceInfo;
  }

}
