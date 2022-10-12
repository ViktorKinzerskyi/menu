import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../../shared/menu-item.interface";
import {OrderItemsService} from "../../../order-items.service";

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input()
  orderItem: MenuItem = {
    imgPath: '',
    name: '',
    description: '',
    price: 0
  };

  @Input()
  quantity: number = 0;

  @Input()
  index = 0;

  orderItems: {menuItem:MenuItem, quantity: number}[] = [];


  constructor(private orderItemsService: OrderItemsService) { }

  ngOnInit(): void {
    this.orderItems = this.orderItemsService.orderItems;
  }

  onRemove() {
    this.orderItems.splice(this.index,1);
  }

}
