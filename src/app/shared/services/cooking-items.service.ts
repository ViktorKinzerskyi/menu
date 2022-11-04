import { Injectable } from '@angular/core'
import { MenuItem } from '../interfaces/menu-item.interface'
import { CookingItem } from '../interfaces/cooking-item.interface'

@Injectable({
  providedIn: 'root'
})
export class CookingItemsService {
  public orderNumber = 0

  public cookingItems: CookingItem[] = []
  public addCookingItem (menuItem: MenuItem, quantity: number): void {
    this.cookingItems.push({
      menuItem: menuItem,
      quantity: quantity,
      orderId: this.increaseOrderItem()
    })
  }

  public removeCookingItem (index: number): void {
    this.cookingItems.splice(index, 1)
  }

  public increaseOrderItem (): number {
    return ++this.orderNumber
  }
}
