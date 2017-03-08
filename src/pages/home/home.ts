import { Component } from '@angular/core';

import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Data } from '../../providers/data';
import { EditPage } from '../edit-page/edit-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public items = [];

  currentIndex;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {

    this.dataService.getData().then((todos) => {
      if(todos){
        this.items = JSON.parse(todos);
      }
    });

  }

  addItem(){
    //creating a modal with the AddItemPage
    let addModal = this.modalCtrl.create(AddItemPage);

    //it will grab the item that is being passed back then
    //save it using the saveItem function
    addModal.onDidDismiss((item) => {
      if(item){
        this.saveItem(item);
      }
    });
        addModal.present();
  }

  editItem(item){
    let editModal = this.modalCtrl.create(EditPage, {
      item: item,
      items: this.items
    });

    editModal.onDidDismiss((item) => {
      if(item){
        this.saveEditedItem(item);
      }
    });
    editModal.present();

    // editModal.onDidDismiss((item) => {
    //   if(item){
    //     this.saveItem(item);
    //   }
    // });
  }

  deleteItem(item){
    this.items.splice(this.items.indexOf(item), 1);
    this.dataService.save(this.items);
  }



  saveItem(item){
    //right now we are only saving to the array not
    //local storage
    this.items.push(item);
    this.dataService.save(this.items);
  }

  saveEditedItem(item){
    this.dataService.save(this.items);
  }



  viewItem(item){
    let openViews = this.navCtrl.getViews();
    console.log(this.navCtrl.getViews());
    this.navCtrl.push(ItemDetailPage, {
      item: item,
      items: this.items
    });

  }

}
