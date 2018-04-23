import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ItemComponent } from './list-items/item/item.component';
import {MatCardModule} from '@angular/material/card';/////
import { ItemService } from './services/item.service';/////


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListItemsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule/////
  ],
  providers: [ItemService],/////
  bootstrap: [AppComponent]
})
export class AppModule { }
