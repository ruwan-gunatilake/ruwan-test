import {Component} from '@angular/core';
import {BusDataService} from './services/bus-data.service';
import {BusOrg} from "./model/bus-organization";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private busOrg: BusOrg;
  isGroupOpen = false;
  note: string;
  notes: string[] = [];

  constructor(private dataService: BusDataService) {
    dataService.getBusData().subscribe(
      data => {
        this.busOrg = data;
       }
      , error => console.log(error));
  }

  getFirstRoutePart(routeNum: string): string {
    if (routeNum.toLowerCase() === 'unknown') {
      return '';
    }
    return routeNum.slice(0, 3);
  }

  getSecondRoutePart(routeNum: string): string {
    if (routeNum.toLowerCase() === 'unknown') {
      return 'Unknown';
    }
    return routeNum.slice(3, routeNum.length);
  }

  toggleRoutePanel(): void {
    this.isGroupOpen = (this.isGroupOpen) ? false : true;
  }

  submitForm(idx: string) {
    ;
    console.log("Notes being submitted for '" + this.busOrg.data[idx].organisation + "' are : " + this.notes[idx]);
    //This needs to be posted to server
  }
}
