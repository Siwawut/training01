import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

//import models
import { Course } from '../../models/course'
import { Item } from '../../models/item'

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

  getCourseDetail(id: number): Observable<Item[]> {
    return this.http.get('https://codingthailand.com/api/get_course_detail.php?course_id=' + id)
      .map((res: Response) => <Item[]>res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    return Observable.throw(error.json() || 'Server error')
  }
}
