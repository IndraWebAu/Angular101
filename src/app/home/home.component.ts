import { Component, inject } from '@angular/core';
import { HousingLocation } from '../interfaces/ihousing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] | undefined = [];
  housingService: HousingService = inject(HousingService);


  constructor(housingService: HousingService) {
    this.housingLocationList = housingService.getAllHousingLocations();
  }
}
