import { Component, OnInit } from '@angular/core';
import { Type1DataService } from './type-1-data.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'type-1-data',
    moduleId: module.id,
    templateUrl: 'type-1-data.component.html'
})

export class Type1DataComponent implements OnInit{
    private type1: any = [];
    private deviceIdentity: string;
    private startTime: any;
    private endTime: any;

    constructor(private type1DataService: Type1DataService) {}

     
  type1Data(): void {
    let type1data = this.type1DataService.type1data(this.deviceIdentity,this.startTime,this.endTime);
    type1data.subscribe(data => {
        this.type1 = data.device;
    });
  }


    ngOnInit(){
        this.startTime = new Date("01-02-2018 11:40:00") 
        this.endTime = new Date("12-02-2018 11:41:00")        
        this.deviceIdentity = "Device-002"

      
    }
}
