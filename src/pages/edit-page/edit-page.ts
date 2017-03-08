import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController } from 'ionic-angular';
import { ItemDetailPage } from '../item-detail/item-detail';
import { HomePage } from '../home/home';

/*
  Generated class for the AddItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-page.html'
})
export class EditPage {

  title;
  description;
  item;
  items;
  index;
  constructor(public navParams: NavParams, public navCtrl: NavController, public view: ViewController) {


  }

  ionViewDidLoad(){
      this.item = this.navParams.get('item');
      this.items = this.navParams.get('items');
      this.title = this.item.title;
      this.description = this.item.description;
  }

  saveItem(item, items){

    console.log(items);
    console.log(item);
    console.log("Title: " + this.title);
    console.log("Index: " + this.index);

    // index = a.findIndex(x => x.prop2=="yutu");


    this.index = this.items.findIndex(x => x.description == item.description);
    console.log(this.index);

    let editedItem = {
      title: this.title,
      description: this.description
    };

    this.items.splice(this.index, 1, editedItem);


    //this allows us to set up a listener
    //back on our home page to grab the item
    this.view.dismiss(editedItem);
    // this.navCtrl.popToRoot();
  }

  close(){
    this.view.dismiss();
  }


  getIndex(item){
    let testIndex = this.items.indexOf(item.title);
    console.log(testIndex);
    return this.index;
  }



}
