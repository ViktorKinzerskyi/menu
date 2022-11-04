import { Component, OnInit } from '@angular/core'
import { CookingItemsService } from '../../shared/services/cooking-items.service'
import { CookingItem } from '../../shared/interfaces/cooking-item.interface'
import { OrderItemsService } from '../../shared/services/order-items.service'

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.css']
})
export class CookingComponent implements OnInit {
  public cookingItems: CookingItem[] = []

  public constructor (
    private readonly cookingItemsService: CookingItemsService,
    private readonly orderItemsService: OrderItemsService
  ) { }

  public ngOnInit (): void {
    this.cookingItems = this.cookingItemsService.cookingItems
  }

  public moveToOrder (index: number): void {
    this.orderItemsService.addOrderItem(this.cookingItems[index])
    this.cookingItemsService.removeCookingItem(index)
  }

  public removeToOrder (index: number): void {
    this.cookingItemsService.removeCookingItem(index)
  }
}
