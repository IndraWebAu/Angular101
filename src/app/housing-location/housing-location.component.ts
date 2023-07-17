import { Component, Input } from '@angular/core';
import { HousingLocation } from '../interfaces/housing-location';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.less']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
