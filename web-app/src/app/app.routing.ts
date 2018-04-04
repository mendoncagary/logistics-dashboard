import { Routes } from '@angular/router';

import { ListDevicesComponent }   from './list-devices/list-devices.component';
import { Type1DataComponent } from 'app/type-1-data/type-1-data.component';
import { GeoOverSpeedingComponent } from 'app/geo-over-speeding/geo-over-speeding.component';
import { GeoDwellComponent } from 'app/geo-dwell/geo-dwell.component';
import { StationaryFilterComponent } from 'app/stationary-filter/stationary-filter.component';
import { LocalSystemHealthComponent } from 'app/local-system-health/local-system-health.component';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'local-system-health',
        pathMatch: 'full',
    },
    {
        path: 'local-system-health',
        component: LocalSystemHealthComponent
    },
    {
        path: 'list-devices',
        component: ListDevicesComponent
    },
    {
        path: 'type-1-data',
        component: Type1DataComponent
    },
    {
        path: 'geo-over-speeding',
        component: GeoOverSpeedingComponent
    },
    {
        path: 'geo-dwell',
        component: GeoDwellComponent
    },
    {
        path: 'stationary-filter',
        component: StationaryFilterComponent
    }
]
