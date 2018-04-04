import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeoDwellComponent } from './geo-dwell.component';
import {GeoDwellService } from './geo-dwell.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NguiDatetimePickerModule
  ],
  declarations: [GeoDwellComponent],
  exports: [GeoDwellComponent],
  providers: [GeoDwellService]
})
export class GeoDwellModule { }
