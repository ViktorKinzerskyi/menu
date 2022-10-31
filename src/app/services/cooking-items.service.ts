import { Injectable } from '@angular/core';
import {MenuItem} from "../shared/interfaces/menu-item.interface";

@Injectable({
  providedIn: 'root'
})
export class CookingItemsService {

  public orderNumber = 0;

  public cookingItems: {menuItem:MenuItem, quantity: number}[] = [];

  constructor() { }

  public addCookingItem(menuItem: MenuItem, quantity: number): void {
    this.cookingItems.push({
      menuItem: menuItem,
      quantity: quantity
    })
    this.increaseOrderItem();
  }

  public removeCookingItem(index: number): void {
    this.cookingItems.splice(index,1);
  }

  public increaseOrderItem(): void{
    this.orderNumber++
  }

}
