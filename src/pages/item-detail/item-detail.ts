import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Data } from '../../providers/data';


@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  title;
  description;
  item: any;
  items = [];

  constructor(public navParams: NavParams, public view: ViewController, public dataService: Data, public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;

    //this get the whole item. Now just need to get the array of objects
    this.item = this.navParams.get('item');
    this.items = this.navParams.get('items');
  }

  deleteItem(item){
    //Debugging
    // console.log(this.item);
    // console.log(this.items);

    this.items.splice(this.items.indexOf(item), 1);
    this.dataService.save(this.items);

    this.navCtrl.pop(ItemDetailPage);


  }

}
