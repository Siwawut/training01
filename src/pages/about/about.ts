import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact'

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  Heros = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  cTel:string='088888888';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  openPage():void{
    //OpenPage
    //this.navCtrl.push(ContactPage);

    //OpenPage And Sand Data
    this.navCtrl.push(ContactPage,{
      cName:'Siwawut.im',
      cTel: this.cTel,
      Heros:this.Heros
    });
  }
}
