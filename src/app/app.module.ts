import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { FollowersComponent } from './followers/followers.component';
import { PlacesComponent } from './places/places.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule, MatSpinner} from '@angular/material';
import { TypesFilterPipe } from './pipes/types-filter.pipe';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    FollowersComponent,
    PlacesComponent,
    TypesFilterPipe,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
