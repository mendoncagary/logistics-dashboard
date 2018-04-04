import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LocalSystemHealthComponent } from './local-system-health.component';
import {LocalSystemHealthService } from './local-system-health.service';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NguiDatetimePickerModule
  ],
  declarations: [LocalSystemHealthComponent],
  exports: [LocalSystemHealthComponent],
  providers: [LocalSystemHealthService]
})
export class LocalSystemHealthModule { }
