import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { listNews } from '../../models/listnews'

@Injectable()
export class NewsServiceProvider {
  source:any="techcrunch"
  sortBy:any="latest"
  apiKey:any="1430c221bc024246b1dc3e771845cc0f"
  apiUrl:any=`https://newsapi.org/v1/articles?source=${this.source}&sortBy=${this.sortBy}&apiKey=${this.apiKey}`
  
  constructor(public http: Http) {  }

  getNews(): Observable<listNews[]> {
    return this.http.get(this.apiUrl)
      .map((res: Response) => <listNews[]>res.json().articles)
      .catch(this.handleError);
  }
  private handleError(error: any) {
    return Observable.throw(error.json() || 'Server error')
  }

}
