import {Component, OnInit} from '@angular/core';
import {IPlacesData, placesData$} from '../mock/places-data';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Hot-Weather-Widget';
  public placesData$: Observable<IPlacesData[]> = placesData$;
  public currentPlace: IPlacesData;

  public setCurrentPlace(place: IPlacesData): void {
    this.currentPlace = place;
    console.log('SelectEvent', place);
  }
}

