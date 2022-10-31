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
  public orderItem: MenuItem = {
    imgPath: '',
    name: '',
    description: '',
    price: 0
  };

  @Input()
  public quantity: number = 0;

  @Input()
  public index = 0;

  public orderPrice (): number {
    return this.orderItem.price * this.quantity
  }

  constructor(private orderItemsService: OrderItemsService) { }

  ngOnInit(): void {
  }

  public onRemove(): void {
    this.orderItemsService.removeOrderItem(this.index);
  }

}
