import {Component, Input, OnInit} from '@angular/core';
import {IPlacesData} from '../../mock/places-data';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent {

@Input()
  public currentPlace: IPlacesData;
}
