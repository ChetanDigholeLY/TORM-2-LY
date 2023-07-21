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

const routes: Routes = [
  { path: '', redirectTo: '/guidance', pathMatch: 'full' },
  { path: 'guidance', component: GuidanceComponent }, // Default route for the home component
  { path: 'performance', component: PerformanceComponent },
  { path: 'sensors', component: SensorsComponent },
  
  // Add more routes for other components if needed
];

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    GuidanceComponent,
    PerformanceComponent,
    SensorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
