import { Component } from '@angular/core';
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

  constructor(private housingService: HousingService) { }

  getHousing = (): HousingLocation[] | undefined =>
    this.housingLocationList = this
      .housingService
      .getAllHousingLocations();

  ngOnInit() {
    this.housingLocationList = this.getHousing();
  }

}