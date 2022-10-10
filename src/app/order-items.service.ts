import { Injectable } from '@angular/core';
import {MenuItem} from "./shared/menu-item.interface";

@Injectable({
  providedIn: 'root'
})
export class OrderItemsService {

  orderItems: {menuItem:MenuItem, quantity: number}[] = [
    // {
    //   menuItem: {
    //     imgPath: 'assets/images/pizza--v1.png',
    //     name: 'Pizza',
    //     description: '(Tomatoes, cheese, beacon, olives, olives)',
    //     price: 5
    //   },
    //   quantity: 1
    // },
    // {
    //   menuItem: {
    //     imgPath: 'assets/images/pizza--v1.png',
    //     name: 'Pizza',
    //     description: '(Tomatoes, cheese, beacon, olives, olives)',
    //     price: 5
    //   },
    //   quantity: 4
    // },


  ];

  constructor() { }
}
