import { Component, OnInit } from '@angular/core';
import { GeoOverSpeedingService } from './geo-over-speeding.service';

@Component({
    selector: 'geo-overspeeding',
    moduleId: module.id,
    templateUrl: 'geo-over-speeding.component.html'
})

export class GeoOverSpeedingComponent implements OnInit{
    private type1: any;
    private startTime: any;
    private endTime: any;

    constructor(private geoOverSpeedingService: GeoOverSpeedingService) {}

     
  geoOverSpeeding(): void {
    let geoOverSpeeding = this.geoOverSpeedingService.geoOverSpeeding(this.startTime, this.endTime);
    geoOverSpeeding.subscribe(data => {
        console.log(data);
        this.type1 = data.device;
    });
  }

    ngOnInit(){
        this.startTime = new Date("01-02-2018 11:40:00") 
        this.endTime = new Date("12-02-2018 11:41:00")        
        
    }
}
