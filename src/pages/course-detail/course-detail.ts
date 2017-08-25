import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item'
import { CoursesServiceProvider } from '../../providers/courses-service/courses-service'

@IonicPage()
@Component({
  selector: 'page-course-detail',
  templateUrl: 'course-detail.html',
})
export class CourseDetailPage {

  id: any
  c_title: any  
  c_detail: any
  item: Item[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coursesServiceProvider: CoursesServiceProvider
  ) {
    this.id = this.navParams.get('id');
    this.c_title = this.navParams.get('c_title');
    this.c_detail = this.navParams.get('c_detail');
  }

  ionViewWillEnter() {
    this.getCourseDetail(this.id);
  }

  getCourseDetail(id:any): void {
    this.coursesServiceProvider.getCourseDetail(id).subscribe((res) => this.item = res);
  }

}
