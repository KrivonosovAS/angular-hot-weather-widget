import { Pipe, PipeTransform } from '@angular/core';
import {IPlacesData} from '../../mock/places-data';

@Pipe({
  name: 'typesFilter'
})
export class TypesFilterPipe implements PipeTransform {

  transform(placesData: IPlacesData[]): IPlacesData[] {
    if (!placesData) {
      return;
    }
    const types: Map<string, IPlacesData> = new Map();
    placesData.forEach((placeData) => {
      types.set(placeData.type, placeData);
      }
    );
    return [... types.values()];
  }

}
