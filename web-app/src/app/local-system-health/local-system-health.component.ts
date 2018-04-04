import { Component, OnInit } from '@angular/core';
import { LocalSystemHealthService } from './local-system-health.service';

@Component({
    selector: 'local-system-health',
    moduleId: module.id,
    templateUrl: 'local-system-health.component.html'
})

export class LocalSystemHealthComponent implements OnInit{
    private type1: any;
    private startTime: any;
    private endTime: any;

    constructor(private localSytemHealthService: LocalSystemHealthService) {}

     
  localSystemHealth(): void {
    let localSystemHealth = this.localSytemHealthService.localSystemHealth(this.startTime,this.endTime);
    localSystemHealth.subscribe(data => {
        console.log(data.device);
        this.type1 = data.device;
    });
  }

    ngOnInit(){
        this.startTime = new Date("01-02-2018 11:40:00") 
        this.endTime = new Date("12-02-2018 11:41:00")  
    }
}
