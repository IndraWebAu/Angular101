import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../interfaces/housing-location';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent {

  housingLocation: HousingLocation | undefined;

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.housingLocation = this.housingService.getHousingLocationById(id);
  }
}
