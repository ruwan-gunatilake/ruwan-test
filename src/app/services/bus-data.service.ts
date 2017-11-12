import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BusDataService {

  constructor(private http: Http) {
  }

  public getBusData(): Observable<any> {
    return this.http.get('./assets/bus-services-data.json')
      .map((res: any) => res.json());
      // .catch((error: any) => console.log(error));

  }
}
