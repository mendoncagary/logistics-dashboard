import { Component, OnInit } from '@angular/core';
import { ListDevicesService } from './list-devices.service';

declare interface ListDevices {
    headerRow: string[];
    dataRows: any;
}

@Component({
    selector: 'list-devices',
    moduleId: module.id,
    templateUrl: 'list-devices.component.html'
})

export class ListDevicesComponent implements OnInit{
    public tableData1: ListDevices;
    public tableData2: ListDevices;
    private type1: any;
    private type2: any;

    constructor(private listDevicesService: ListDevicesService) {}

     
  listDevices(type): void {
    let listDevices = this.listDevicesService.listDevices(type);
    listDevices.subscribe(data => {
        console.log(data.device);
        if(type==1)
            this.type1 = data.device;
        else
        this.type2 = data.device;
    });
  }

    ngOnInit(){

        this.listDevices(1);
       console.log(this.type1);
        this.listDevices(2);
       

        //  this.tableData1 = {
        //    headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
        // //     // dataRows: [
        // //     //     ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
        // //     //     ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
        // //     //     ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
        // //     //     ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
        // //     //     ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
        // //     //     ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
        // //     // ]
        // //     dataRows: this.type1
        //  };
        // console.log(this.tableData1.dataRows)
        this.tableData2 = {
            headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
            dataRows: [
                ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
            ]
        };
    }
}
