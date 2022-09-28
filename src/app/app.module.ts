import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderComponent } from './components/order/order.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
