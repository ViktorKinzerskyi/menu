import { Component, OnInit } from '@angular/core';
import {MenuItemsService} from "../../services/menu-items.service";
import {MenuItem} from "../../shared/interfaces/menu-item.interface";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor(private menuItemsService: MenuItemsService) { }

  ngOnInit(): void {
    this.menuItemsService.fetchPosts().subscribe( menuItems => {
      this.menuItems = menuItems;
    });
  }

}
