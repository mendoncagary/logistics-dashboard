import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'local-system-health', title: 'Local System Health',  icon:'ti-user', class: '' },
    { path: 'list-devices', title: 'List Devices',  icon:'ti-view-list-alt', class: '' },
    { path: 'type-1-data', title: 'Type 1 Data',  icon:'ti-text', class: '' },
    { path: 'geo-over-speeding', title: 'Geo Overspeeding',  icon:'ti-pencil-alt2', class: '' },
    { path: 'geo-dwell', title: 'Geo Dwell',  icon:'ti-map', class: '' },
    { path: 'stationary-filter', title: 'Stationary filter',  icon:'ti-bell', class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
