import { Component, OnInit } from '@angular/core';
import { GeoDwellService } from './geo-dwell.service';

declare interface GeoDwell {
    headerRow: string[];
    dataRows: any;
}

@Component({
    selector: 'geo-dwell',
    moduleId: module.id,
    templateUrl: 'geo-dwell.component.html'
})

export class GeoDwellComponent implements OnInit{
    private type1: any;
    private startTime: any;
    private endTime: any;
    private latitude: Number;
    private longitude: Number;
    
    constructor(private geoDwellService: GeoDwellService) {}

     
  geoDwell(): void {
    let geoDwell = this.geoDwellService.geoDwell(this.latitude, this.longitude, this.startTime, this.endTime);
    geoDwell.subscribe(data => {
        console.log(data.device);
        this.type1 = data.device;
    });
  }

    ngOnInit(){
        this.latitude = 19.1
        this.longitude = 72.9
        this.startTime = new Date("01-02-2018 11:40:00") 
        this.endTime = new Date("12-02-2018 11:41:00")        
        


    }
}
