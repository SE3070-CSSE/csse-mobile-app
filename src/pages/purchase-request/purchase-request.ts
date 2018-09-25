import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Item } from "ionic-angular";
import { ItemServiceProvider } from "../../providers/item-service/item-service";
import { PurchaseRequestProceedPage } from "../purchase-request-proceed/purchase-request-proceed";

/**
 * Generated class for the PurchaseRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-purchase-request",
  templateUrl: "purchase-request.html"
})
export class PurchaseRequestPage {
  items: any;
  requestItems: Array<{item: any, quantity: number}> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public itemService: ItemServiceProvider
  ) {}

  ionViewDidLoad() {
    this.itemService.getItems().then(res => {
      this.items = res;
    });
    console.log(this.items);
  }

  addRequestItems(item, quantity) {
    this.requestItems.push({item, quantity});
    console.log(this.requestItems);
  }

  proceedToPurchaseRequest() {
    console.log('proceedToPurchaseRequest', this.requestItems);
    this.navCtrl.push(PurchaseRequestProceedPage, {items: this.requestItems});
  }
}
