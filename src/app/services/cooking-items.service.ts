import { Injectable } from '@angular/core';
import {MenuItem} from "../shared/interfaces/menu-item.interface";

@Injectable({
  providedIn: 'root'
})
export class CookingItemsService {

  orderNumber = 0;

  cookingItems: {menuItem:MenuItem, quantity: number}[] = [];

  constructor() { }

  addCookingItem(menuItem: MenuItem, quantity: number) {
    this.cookingItems.push({
      menuItem: menuItem,
      quantity: quantity
    })
    this.increaseOrderItem();
  }

  removeCookingItem(index: number) {
    this.cookingItems.splice(index,1);
  }

  increaseOrderItem(){
    this.orderNumber++
  }

}
