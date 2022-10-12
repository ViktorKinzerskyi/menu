import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../../shared/menu-item.interface";
import {CookingItemsService} from "../../../cooking-items.service";
import {OrderItemsService} from "../../../order-items.service";

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

  @Input()
  index: number = 0;

  cookingItems: {menuItem:MenuItem, quantity: number}[] = [];
  orderItems: {menuItem:MenuItem, quantity: number}[] = [];

  constructor(private cookingItemsService: CookingItemsService,
              private orderItemsService: OrderItemsService) { }

  ngOnInit(): void {
    this.cookingItems = this.cookingItemsService.cookingItems;
    this.orderItems = this.orderItemsService.orderItems;
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
