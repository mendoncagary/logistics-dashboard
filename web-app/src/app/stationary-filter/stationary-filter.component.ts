import { Component, OnInit } from '@angular/core';
import { StationaryFilterService } from './stationary-filter.service';

@Component({
    selector: 'stationary-filter',
    moduleId: module.id,
    templateUrl: 'stationary-filter.component.html'
})

export class StationaryFilterComponent implements OnInit{
    private type1: any;
    private startTime: any;
    private endTime: any;

    constructor(private stationaryFilterService: StationaryFilterService) {}

     
  stationaryFilter(): void {
    let stationaryFilter = this.stationaryFilterService.stationaryFilter(this.startTime,this.endTime);
    stationaryFilter.subscribe(data => {
        console.log(data.device);
        this.type1 = data.device;

    });
  }

    ngOnInit(){
        this.startTime = new Date("01-02-2018 11:40:00") 
        this.endTime = new Date("12-02-2018 11:41:00")  
    }
}
