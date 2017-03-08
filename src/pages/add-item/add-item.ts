import { Component } from '@angular/core';
import { NavController, ViewController, ToastController } from 'ionic-angular';

/*
  Generated class for the AddItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {

  title;
  description;

  constructor(public navCtrl: NavController, public view: ViewController, public toastCtrl: ToastController) {

  }

  saveItem(){
    let newItem = {
      title: this.title,
      description: this.description
    };

    //this allows us to set up a listener
    //back on our home page to grab the item

    if(this.title != null){
      this.view.dismiss(newItem);
    }


    this.presentToast();
  }

  presentToast(){
    let toast = this.toastCtrl.create({
      message: 'You must enter a name for the Item',
      duration: 3000
    });

    if(this.title == null){
      toast.present();
    }
  }

  close(){
    this.view.dismiss();
  }


}
