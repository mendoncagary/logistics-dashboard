import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StationaryFilterComponent } from './stationary-filter.component';
import {StationaryFilterService } from './stationary-filter.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NguiDatetimePickerModule
  ],
  declarations: [StationaryFilterComponent],
  exports: [StationaryFilterComponent],
  providers: [StationaryFilterService]
})
export class StationaryFilterModule { }
