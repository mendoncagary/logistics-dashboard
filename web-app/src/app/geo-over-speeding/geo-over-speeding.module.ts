import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeoOverSpeedingComponent } from './geo-over-speeding.component';
import {GeoOverSpeedingService } from './geo-over-speeding.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NguiDatetimePickerModule
  ],
  declarations: [GeoOverSpeedingComponent],
  exports: [GeoOverSpeedingComponent],
  providers: [GeoOverSpeedingService]
})
export class GeoOverSpeedingModule { }
