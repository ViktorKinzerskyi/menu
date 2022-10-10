import { Component, OnInit } from '@angular/core';
import {MenuItemsService} from "../../menu-items.service";
import {MenuItem} from "../../shared/menu-item.interface";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor(private menuItemsService: MenuItemsService) { }

  ngOnInit(): void {
    this.menuItems = this.menuItemsService.menuItems;
  }

}
