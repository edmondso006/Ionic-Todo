import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { EditPage } from '../pages/edit-page/edit-page';

//storage import
import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    EditPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    EditPage
  ],
  providers: [Storage, Data]
})
export class AppModule {}
