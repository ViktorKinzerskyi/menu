import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItemsService } from '../../shared/services/menu-items.service';
import { MenuItem } from '../../shared/interfaces/menu-item.interface';
import { Subscription } from 'rxjs';
import { CookingItemsService } from '../../shared/services/cooking-items.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  public menuItems: MenuItem[] = [];
  private subscription: Subscription = new Subscription();

  public constructor (
    private readonly menuItemsService: MenuItemsService,
    private readonly cookingItemsService: CookingItemsService) { }

  public ngOnInit (): void {
    this.subscription = this.menuItemsService.fetchPosts().subscribe(menuItems => {
      this.menuItems = menuItems;
    })
  }

  public ngOnDestroy (): void {
    this.subscription.unsubscribe();
  }

  public onAdd (menuItem: MenuItem, quantity: number): void {
    this.cookingItemsService.addCookingItem(menuItem, quantity);
  }
}
