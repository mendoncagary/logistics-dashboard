import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ListDevicesService {

  constructor(private http:Http) { }

  private url = "https:/localhost/api/list-devices/";


  listDevices(type: Number): Observable<any> {
    return this.http.get(this.url+type)
        .map(this.extractData)
        .catch(this.handleErrorObservable);
} 

private extractData(res: Response) {
  let body = res.json();
  return body;
} 

private handleErrorObservable (error: Response | any) {
  console.error(error.message || error);
  return Observable.throw(error.message || error);
} 



}
