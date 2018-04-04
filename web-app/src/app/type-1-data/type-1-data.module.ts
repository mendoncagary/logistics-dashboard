import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Type1DataComponent } from './type-1-data.component';
import {Type1DataService } from './type-1-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NguiDatetimePickerModule
  ],
  declarations: [Type1DataComponent],
  exports: [Type1DataComponent],
  providers: [Type1DataService]
})
export class Type1DataModule { }
