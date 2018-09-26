import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import * as moment from "moment";
import { PurchaseRequestServiceProvider } from "../../providers/purchase-request-service/purchase-request-service";

/**
 * Generated class for the PurchaseRequestProceedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-purchase-request-proceed",
  templateUrl: "purchase-request-proceed.html"
})
export class PurchaseRequestProceedPage {
  items: Array<{}> = [];
  purchaseRequest: any;

  requestedBy: string;
  neededOn: string;
  deliveryAddress: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private purchaseRequestService: PurchaseRequestServiceProvider
  ) {
    // this.formatRequestItems(this.navParams.get("items"));
    this.items = this.navParams.get("items");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PurchaseRequestProceedPage");
  }

  requestPurchase() {
    console.log(this.items);

    this.purchaseRequest = {
      requestLineItems: this.items,
      requestStatus: "PENDING",
      requestedBy: this.requestedBy,
      deliveryAddress: this.deliveryAddress,
      createdOn: moment().format("YYYY-MM-DD"),
      neededOn: this.neededOn,
      isDraftRequest: false
    };
    
    // console.log(JSON.parse(this.purchaseRequest));
    console.log(this.purchaseRequest);
    

    this.purchaseRequestService.postRequest(this.purchaseRequest).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  formatRequestItems(requestItems) {
    requestItems.forEach(element => {
      console.log('format', element);
      this.items.push({item: element.item._id, quantity: element.quantity, POCreated: false});
    });
  }

  getPurchaseRequests() {
    this.purchaseRequestService.getRequests().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
}
