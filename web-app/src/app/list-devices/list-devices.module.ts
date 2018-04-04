import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListDevicesComponent } from './list-devices.component';
import {ListDevicesService } from './list-devices.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListDevicesComponent],
  exports: [ListDevicesComponent],
  providers: [ListDevicesService]
})
export class ListDevicesModule { }
