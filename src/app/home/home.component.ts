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

  constructor(private housingService: HousingService) { }

  getHousing = (): HousingLocation[] | undefined => {
    let locations: HousingLocation[] = [];
    this.housingService
      .getAllHousingLocations()
      ?.subscribe(response => locations = response);
    return locations;
  }


  ngOnInit() {
    this.housingLocationList = this.getHousing();
  }

}