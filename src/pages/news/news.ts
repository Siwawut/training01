import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular'
import { Subscription } from 'rxjs/Subscription'

import { NewsServiceProvider } from '../../providers/news-service/news-service'
import { listNews } from '../../models/listnews'


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  listnews: listNews[]
  sub: Subscription

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public NewsServiceProvider: NewsServiceProvider,
    public LoadingController: LoadingController
  ) { }

  ionViewWillEnter() {
    this.getNews();
  }

  ionViewWillLeave() {
    this.sub.unsubscribe();
  }

  getNews(): void {
    let loader = this.LoadingController.create({
      content: "Loading..."
    })
    loader.present()
    this.sub = this.NewsServiceProvider.getNews().subscribe(
      (res) => this.listnews = res,
      (error) => console.log("Error from backend"),
      () => loader.dismiss()
    );
  }

  doRefresh(refresher) {
    this.sub = this.NewsServiceProvider.getNews().subscribe(
      (res) => this.listnews = res,
      (error) => {
        console.log("Error from backend"),
          refresher.complete()
      },
      () => refresher.complete()
    );
  }

  openExternal = function (url) {
      window.open(url, '_blank', 'location=yes');
  }
}
