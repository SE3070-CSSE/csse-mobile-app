import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Item,
  AlertController
} from "ionic-angular";
import { ItemServiceProvider } from "../../providers/item-service/item-service";
import { PurchaseRequestProceedPage } from "../purchase-request-proceed/purchase-request-proceed";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

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
  private requestItem: FormGroup;
  requestItems: Array<{ item: any; quantity: number }> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public itemService: ItemServiceProvider,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController
  ) {
    this.requestItem = this.formBuilder.group({
      item: ["", Validators.required],
      quantity: ["", Validators.required]
    });
  }

  ionViewDidLoad() {
    this.itemService.getItems().then(res => {
      this.items = res;
    });
    console.log(this.items);
  }

  // addRequestItems(item, quantity) {
  //   this.requestItems.push({item, quantity});
  //   console.log(this.requestItems);
  // }

  addRequestItems() {
    this.requestItems.push(this.requestItem.value);
    this.requestItem.reset();
  }

  removeItem(i) {
    this.requestItems.splice(i, 1);
  }

  proceedToPurchaseRequest() {
    if (this.requestItems.length < 1) {
      this.presentAlert();
    } else {
      console.log("proceedToPurchaseRequest", this.requestItems);
      this.navCtrl.push(PurchaseRequestProceedPage, { items: this.requestItems });
    }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: "Error",
      subTitle: "You can't proceed without adding items",
      buttons: ["Dismiss"]
    });
    alert.present();
  }
}
