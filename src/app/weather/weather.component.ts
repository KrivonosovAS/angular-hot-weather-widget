import {Component, Input, OnInit} from '@angular/core';
import {IPlacesData} from '../../mock/places-data';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  @Input()
  public currentPlace: IPlacesData;

}
