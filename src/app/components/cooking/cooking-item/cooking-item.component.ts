import {Component, Input, OnInit} from '@angular/core';
import { MenuItem } from 'src/app/shared/interfaces/menu-item.interface';
import {CookingItemsService} from "../../../services/cooking-items.service";
import {OrderItemsService} from "../../../services/order-items.service";

@Component({
  selector: 'app-cooking-item',
  templateUrl: './cooking-item.component.html',
  styleUrls: ['./cooking-item.component.css']
})
export class CookingItemComponent implements OnInit {

  @Input()
  public cookingItem: MenuItem = {
    imgPath: '',
    name: '',
    description: '',
    price: 0
  };

  @Input()
  public quantity: number = 0;

  public orderNumber: number = 0;

  @Input()
  public index: number = 0;

  constructor(private cookingItemsService: CookingItemsService,
              private orderItemsService: OrderItemsService) { }

  ngOnInit(): void {
    this.orderNumber = this.cookingItemsService.orderNumber;
  }

  public onMoveToOrder(): void {
    this.orderItemsService.addOrderItem(this.cookingItem, this.quantity);
    this.cookingItemsService.removeCookingItem(this.index);
  }

  public onRemove(): void {
    this.cookingItemsService.removeCookingItem(this.index);
  }

}
