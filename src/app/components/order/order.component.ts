import {Component, Input, OnInit} from '@angular/core';
import {OrderItemsService} from "../../order-items.service";
import {MenuItem} from "../../shared/menu-item.interface";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderItems: {menuItem:MenuItem, quantity: number}[] = [];


  constructor(private orderItemsService: OrderItemsService) { }

  ngOnInit(): void {
    this.orderItems = this.orderItemsService.orderItems;
  }

  culcTotalPrice() {
    let totalPrice = 0;
    this.orderItems.forEach(item => {
      totalPrice += item['menuItem'].price * item['quantity'];
    })
    return totalPrice;
  }

}
