import {Component, OnInit} from '@angular/core';
import {OrderItemsService} from "../../services/order-items.service";
import {MenuItem} from "../../shared/interfaces/menu-item.interface";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public orderItems: {menuItem:MenuItem, quantity: number}[] = [];


  constructor(private orderItemsService: OrderItemsService) { }

  ngOnInit(): void {
    this.orderItems = this.orderItemsService.orderItems;
  }

  public calcTotalPrice(): number {
    let totalPrice = 0;
    this.orderItems.forEach(item => {
      totalPrice += item['menuItem'].price * item['quantity'];
    })
    return totalPrice;
  }

}
