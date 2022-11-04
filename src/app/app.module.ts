import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { MenuComponent } from './components/menu/menu.component'
import { OrderComponent } from './components/order/order.component'
import { MenuItemComponent } from './shared/components/menu-item/menu-item.component'
import { QuantityComponent } from './shared/components/quantity/quantity.component'
import { CookingComponent } from './components/cooking/cooking.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { OrderIdPipe } from './shared/pipes/order-id.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderComponent,
    MenuItemComponent,
    QuantityComponent,
    CookingComponent,
    OrderIdPipe
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
