import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemServiceProvider } from '../../providers/item-service/item-service';
import { PurchaseRequestPage } from '../purchase-request/purchase-request';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public itemService: ItemServiceProvider) {

  }

  ionViewDidEnter() {
  }

  goToPurchaseRequests() {
    this.navCtrl.push(PurchaseRequestPage);
  }

}
