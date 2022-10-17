import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../../shared/interfaces/menu-item.interface";
import {OrderItemsService} from "../../../services/order-items.service";

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

  orderPrice () {
    return this.orderItem.price * this.quantity
  }

  constructor(private orderItemsService: OrderItemsService) { }

  ngOnInit(): void {
  }

  onRemove() {
    this.orderItemsService.removeOrderItem(this.index);
  }

}
