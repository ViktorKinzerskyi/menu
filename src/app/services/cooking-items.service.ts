import { Injectable } from '@angular/core';
import {MenuItem} from "../shared/menu-item.interface";

@Injectable({
  providedIn: 'root'
})
export class CookingItemsService {

  cookingItems: {menuItem:MenuItem, quantity: number}[] = [];

  constructor() { }
}
