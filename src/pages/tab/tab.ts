import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { NewsPage } from '../news/news';

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
  tab1:any
  tab2:any
  tab3:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tab1 = HomePage
    this.tab2 = NewsPage
    this.tab3 = AboutPage

  }

  ionViewDidLoad() {
  }

}
