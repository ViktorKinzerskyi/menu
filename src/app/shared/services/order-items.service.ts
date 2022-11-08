import { Injectable } from '@angular/core';
import { CookingItem } from '../interfaces/cooking-item.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderItemsService {
  public orderItems: CookingItem[] = [];

  public addOrderItem (orderItem: CookingItem): void {
    let itemExist = false;

    for (let i = 0; i < this.orderItems.length; i++) {
      if (this.orderItems[i].menuItem.name === orderItem.menuItem.name) {
        this.orderItems[i].quantity += orderItem.quantity;
        itemExist = true;
        break;
      }
    }

    if (!itemExist) {
      this.orderItems.push(orderItem);
    }
  }

  public removeOrderItem (index: number): void {
    this.orderItems.splice(index, 1);
  }
}
