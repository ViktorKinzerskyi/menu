import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../../menu-items.service";

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input()
  menuItem: MenuItem = {
    imgPath: '',
    name: '',
    description: '',
    price: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
