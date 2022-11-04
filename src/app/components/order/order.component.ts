import { Component, OnInit } from '@angular/core'
import { OrderItemsService } from '../../shared/services/order-items.service'
import { CookingItem } from '../../shared/interfaces/cooking-item.interface'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public orderItems: CookingItem[] = []

  public constructor (
    private readonly orderItemsService: OrderItemsService) { }

  public ngOnInit (): void {
    this.orderItems = this.orderItemsService.orderItems
  }

  public calcTotalPrice (): number {
    let totalPrice = 0
    this.orderItems.forEach(item => {
      totalPrice += item.menuItem.price * item.quantity
    })
    return totalPrice
  }

  public orderPrice (price: number, quantity: number): number {
    return price * quantity
  }

  public onRemove (index: number): void {
    this.orderItemsService.removeOrderItem(index)
  }
}
