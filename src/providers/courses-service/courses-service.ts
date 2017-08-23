import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Course } from '../../models/course'

@Injectable()
export class CoursesServiceProvider {

  constructor(public http: Http) {
    //onsole.log('Hello CoursesServiceProvider Provider');
  }

  getCourse(): Observable<Course[]> {
    return this.http.get('https://codingthailand.com/api/get_courses.php')
      .map((res: Response) => <Course[]>res.json())
      .catch(this.handleError);
  }
  
  private handleError(error: any) {
    return Observable.throw(error.json() || 'Server error')
  }
}
