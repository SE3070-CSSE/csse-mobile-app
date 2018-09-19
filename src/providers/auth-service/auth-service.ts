import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { validateUser } from '../../shared/config';
import { StorageServiceProvider } from '../storage-service/storage-service';

import { Properties } from '../../shared/properties';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient, public storageSerive: StorageServiceProvider, public properties: Properties) {
    console.log('Hello AuthServiceProvider Provider');
  }

  validateUser(payload): Promise<any> {
    console.log('AuthSerivce - Payload', payload);
    return new Promise((resolve, reject) => {
      this.http.post(validateUser, payload, {
        observe: 'response',
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'Application/json'
        })
      })
        .subscribe(
          response => {
            console.log(response.headers.get('Authorization'));
            resolve(true);
          },
          error => {
            console.log(error);
            reject(false);
          }
        )
    })
  }

}
