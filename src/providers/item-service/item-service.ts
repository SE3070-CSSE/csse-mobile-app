import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { items } from '../../shared/config';
import { Observable } from 'rxjs/Observable';
import { Properties } from '../../shared/properties';

/*
  Generated class for the ItemServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemServiceProvider {
  private itemUrl = items;

  constructor(public http: HttpClient, public properties: Properties) {
    console.log('Hello ItemServiceProvider Provider');
  }

  getItems(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.itemUrl, {
        observe: 'response',
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'Application/json',
          'Authorization': this.properties.token
        })
      })
        .subscribe(
          response => {
            console.log(response);
            resolve(response.body);
          },
          error => {
            console.log(error);
            reject(error);
          }
        )
    })
  }

}
