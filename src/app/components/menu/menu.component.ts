import { Component, OnDestroy, OnInit } from '@angular/core'
import { MenuItemsService } from '../../shared/services/menu-items.service'
import { MenuItem } from '../../shared/interfaces/menu-item.interface'
import { Subscription } from 'rxjs'
import { CookingItemsService } from '../../shared/services/cooking-items.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  public menuItems: MenuItem[] = []
  // public defaultQuantity = 0
  public quantity = 1
  private subscription: Subscription = new Subscription()

  public constructor (
    private readonly menuItemsService: MenuItemsService,
    private readonly cookingItemsService: CookingItemsService) { }

  public ngOnInit (): void {
    this.subscription = this.menuItemsService.fetchPosts().subscribe(menuItems => {
      this.menuItems = menuItems
    })
  }

  public ngOnDestroy (): void {
    this.subscription.unsubscribe()
  }

  public onChangeQuantity (quantity: number): void {
    this.quantity = quantity
  }

  public onAdd (menuItem: MenuItem): void {
    this.cookingItemsService.addCookingItem(menuItem, this.quantity)
    // this.defaultQuantity = 1
    this.quantity = 1
  }
}
