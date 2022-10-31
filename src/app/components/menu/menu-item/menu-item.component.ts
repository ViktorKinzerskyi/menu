import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../../shared/interfaces/menu-item.interface";
import {CookingItemsService} from "../../../services/cooking-items.service";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input()
  public menuItem: MenuItem = {
    imgPath: '',
    name: '',
    description: '',
    price: 0
  };

  public quantity = 1;

  constructor(private cookingItemsService: CookingItemsService) { }

  ngOnInit(): void {
  }

  public onChangeQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  public onAdd(): void {
    this.cookingItemsService.addCookingItem(this.menuItem, this.quantity)
    this.quantity = 1;
  }
}
