import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../../shared/menu-item.interface";
import {CookingItemsService} from "../../../services/cooking-items.service";
import {OrderItemsService} from "../../../services/order-items.service";

@Component({
  selector: 'app-cooking-item',
  templateUrl: './cooking-item.component.html',
  styleUrls: ['./cooking-item.component.css']
})
export class CookingItemComponent implements OnInit {

  @Input()
  cookingItem: MenuItem = {
    imgPath: '',
    name: '',
    description: '',
    price: 0
  };

  @Input()
  quantity: number = 0;

  orderNumber: string = '';

  @Input()
  index: number = 0;

  cookingItems: {menuItem:MenuItem, quantity: number}[] = [];
  orderItems: {menuItem:MenuItem, quantity: number}[] = [];

  constructor(private cookingItemsService: CookingItemsService,
              private orderItemsService: OrderItemsService) { }

  ngOnInit(): void {
    this.cookingItems = this.cookingItemsService.cookingItems;
    this.orderItems = this.orderItemsService.orderItems;
    this.format();
  }

  format() {
    this.orderNumber = this.padLeft(this.cookingItemsService.orderNumber.toString(), "0", 5);
  }

  padLeft(text: string, padChar: string, size: number): string {
    return (String(padChar).repeat(size) + text).substr(size * -1, size);
  }

  onMoveToOrder() {
    let itemExist = false;
    this.cookingItems.splice(this.index,1);


    for(let i = 0; i < this.orderItems.length; i++){
      if(this.orderItems[i]['menuItem'].name == this.cookingItem.name){
        this.orderItems[i]['quantity'] += this.quantity;
        itemExist = true;
        break;
      }
    }

    if(!itemExist) {
      this.orderItems.push({menuItem: this.cookingItem, quantity: this.quantity});
    }

  }

  onRemove() {
    this.cookingItems.splice(this.index,1);
  }

}
