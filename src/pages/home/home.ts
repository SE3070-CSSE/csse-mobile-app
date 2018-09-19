import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemServiceProvider } from '../../providers/item-service/item-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public itemService: ItemServiceProvider) {

  }

  ionViewDidEnter() {
    this.itemService.getItems().then(res => {
      console.log('home', res);
    }).catch(err => {
      console.log(err);
    })
  }

}
