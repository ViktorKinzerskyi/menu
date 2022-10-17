import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../../shared/interfaces/menu-item.interface";
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

  orderNumber: number = 0;

  @Input()
  index: number = 0;

  constructor(private cookingItemsService: CookingItemsService,
              private orderItemsService: OrderItemsService) { }

  ngOnInit(): void {
    this.orderNumber = this.cookingItemsService.orderNumber;
  }

  onMoveToOrder() {
    this.orderItemsService.addOrderItem(this.cookingItem, this.quantity);
    this.cookingItemsService.removeCookingItem(this.index);
  }

  onRemove() {
    this.cookingItemsService.removeCookingItem(this.index);
  }

}
