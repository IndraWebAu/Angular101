import { Component } from '@angular/core';
import { HousingLocation } from '../interfaces/housing-location';
import { HousingService } from '../housing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] | undefined = [];

  filteredLocationList: HousingLocation[] | undefined = [];

  constructor(
    private housingService: HousingService) { }

  ngOnInit() {
    this.housingLocationList = this.getHousing();
    this.filteredLocationList = this.housingLocationList;
  }

  getHousing = (): HousingLocation[] | undefined => {
    let locations: HousingLocation[] = [];
    this.housingService
      .getAllHousingLocations()
      ?.subscribe(response => locations = response);
    return locations;
  }

  filterResults(filterValue: string) {
    if (!filterValue)
      this.filteredLocationList = this.housingLocationList;

    this.filteredLocationList = this.housingLocationList
      ?.filter(location =>
        location
          ?.city
          .toLowerCase()
          .includes(filterValue.toLowerCase()));
  }

  clear(input: HTMLInputElement) {
    input.value = '';
    this.filteredLocationList = this.housingLocationList;
  }
}