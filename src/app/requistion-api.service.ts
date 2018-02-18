import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Requisition } from './requisition';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequistionApiService {
  private _url = 'https://api.myjson.com/bins/7849d';
  constructor(private _http: HttpClient) { }
  getRequisitions(): Observable<Requisition[]> {
    return this._http.get<Requisition[]>(this._url);
  }
}
