import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GuidanceComponent } from './components/guidance/guidance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { PerformanceComponent } from './components/performance/performance.component';
import { SensorsComponent } from './components/sensors/sensors.component';
import { WorldmapComponent } from './components/worldmap/worldmap.component';
import { LiveDataFeedComponent } from './components/live-data-feed/live-data-feed.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { SidebarService } from './services/sidebar.service';
import { NotAcknowledgedGuidanceComponent } from './components/not-acknowledged-guidance/not-acknowledged-guidance.component';
import { AcknowledgedGuidanceComponent } from './components/acknowledged-guidance/acknowledged-guidance.component';
import { RemoveTime, TimeSeriesComponent } from './components/time-series/time-series.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { BiReportComponent } from './components/bi-report/bi-report.component';


const routes: Routes = [
  { path: '', redirectTo: '/guidance', pathMatch: 'full' },
  { path: 'guidance', component: GuidanceComponent }, // Default route for the home component
  { path: 'performance', component: PerformanceComponent },
  { path: 'sensors', component: SensorsComponent , children: [
    {
      path: 'livedatafeed', component: LiveDataFeedComponent
    },
    {
      path: 'timeseries', component: TimeSeriesComponent
    },
  ]},
  { path: 'worldmap', component: WorldmapComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'bireport', component: BiReportComponent },
  
  // Add more routes for other components if needed
];

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    GuidanceComponent,
    PerformanceComponent,
    SensorsComponent,
    WorldmapComponent,
    LiveDataFeedComponent,
    NotAcknowledgedGuidanceComponent,
    AcknowledgedGuidanceComponent,
    TimeSeriesComponent,
    DatePickerComponent,
    RemoveTime,
    AdminPageComponent,
    BiReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgxDaterangepickerMd.forRoot(),
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
