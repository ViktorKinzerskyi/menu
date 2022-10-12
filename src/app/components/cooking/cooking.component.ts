import { Component, OnInit } from '@angular/core';
import {CookingItemsService} from "../../services/cooking-items.service";
import {MenuItem} from "../../shared/menu-item.interface";

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.css']
})
export class CookingComponent implements OnInit {

  cookingItems: {menuItem:MenuItem, quantity: number}[] = [];

  constructor(private cookingItemsService: CookingItemsService) { }

  ngOnInit(): void {
    this.cookingItems = this.cookingItemsService.cookingItems;
  }

}
