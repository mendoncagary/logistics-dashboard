import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';
import { ListDevicesModule }   from './list-devices/list-devices.module';
import { Type1DataModule }   from './type-1-data/type-1-data.module';

import { GeoOverSpeedingModule } from 'app/geo-over-speeding/geo-over-speeding.module';
import { GeoDwellModule } from 'app/geo-dwell/geo-dwell.module';
import { StationaryFilterModule } from 'app/stationary-filter/stationary-filter.module';
import { LocalSystemHealthModule } from 'app/local-system-health/local-system-health.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    ListDevicesModule,
    Type1DataModule,
    GeoOverSpeedingModule,
    GeoDwellModule,
    StationaryFilterModule,
    LocalSystemHealthModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
