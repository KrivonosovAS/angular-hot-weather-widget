import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPlacesData} from '../../mock/places-data';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  public selectPlace: IPlacesData;

  @Input()
  public placesData: IPlacesData[];

  @Output()
  public placeSelectEvent = new EventEmitter<IPlacesData>();

  ngOnInit(): void {
    this.setPlaceChoose(this.placesData[0]);
  }

  public setPlaceChoose(place: IPlacesData) {
    this.selectPlace = place;
    this.placeSelectEvent.next(place);
  }
}
