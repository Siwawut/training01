import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  cName:string;
  cTel:string;
  Heros:string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cName = this.navParams.get('cName');
    this.cTel = this.navParams.get('cTel');
    this.Heros = this.navParams.get('Heros');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  RootPage():void{
    this.navCtrl.setRoot(HomePage);
  }


}
