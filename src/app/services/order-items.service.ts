import { Injectable } from '@angular/core';
import {MenuItem} from "../shared/menu-item.interface";

@Injectable({
  providedIn: 'root'
})
export class OrderItemsService {

  orderItems: {menuItem:MenuItem, quantity: number}[] = [];

  constructor() { }
}
