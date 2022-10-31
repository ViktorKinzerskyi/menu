import { Injectable } from '@angular/core';
import {MenuItem} from "../shared/interfaces/menu-item.interface";

@Injectable({
  providedIn: 'root'
})
export class OrderItemsService {

  public orderItems: {menuItem:MenuItem, quantity: number}[] = [];

  constructor() { }

  public addOrderItem(oderItem:MenuItem, quantity: number): void {
    let itemExist = false;

    for(let i = 0; i < this.orderItems.length; i++){
      if(this.orderItems[i].menuItem.name == oderItem.name){
        this.orderItems[i].quantity += quantity;
        itemExist = true;
        break;
      }
    }

    if(!itemExist) {
      this.orderItems.push({menuItem: oderItem, quantity: quantity});
    }
  }

  public removeOrderItem(index: number): void {
    this.orderItems.splice(index,1);
  }
}
