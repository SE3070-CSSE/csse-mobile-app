import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiServiceProvider Provider');
  }

  private backendGet(url, token): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(url, {
        observe: 'response',
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'Application/json',
          'Authorization': 'Bearer ' + token
        })
      })
        .subscribe(
          response => {
            console.log(response);
            resolve(response);
          },
          error => {
            console.log(error);
            reject(error);
          }
        );
      });
  }

  private backendPost(url, payload, token): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(url, payload, {
        observe: 'response',
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'Application/json',
          'Authorization': 'Bearer ' + token
        })
      })
      .subscribe(
        response => {
            console.log(response);
            resolve(response);
          },
          error => {
            console.log(error);
            reject(error);
          }
        );
    });
  }

}
