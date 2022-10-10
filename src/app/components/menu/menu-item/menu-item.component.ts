import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../../shared/menu-item.interface";
import {CookingItemsService} from "../../../cooking-items.service";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input()
  menuItem: MenuItem = {
    imgPath: '',
    name: '',
    description: '',
    price: 0
  };

  quantity = 1;

  cookingItems: {menuItem:MenuItem, quantity: number}[] = [];

  constructor(private cookingItemsService: CookingItemsService) { }

  ngOnInit(): void {
    this.cookingItems = this.cookingItemsService.cookingItems;
  }

  onChangeQuantity(quantity: number) {
    this.quantity = quantity;
  }

  onAdd() {
    this.cookingItems.push({
      menuItem: this.menuItem,
      quantity: this.quantity
    })
    this.quantity =1;
  }
}
