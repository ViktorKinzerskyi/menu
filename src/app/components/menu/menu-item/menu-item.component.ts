import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../../menu-items.service";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

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
