import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent {
  @Output() public changedQuantity = new EventEmitter<number>()

  @Input() public quantity = 0

  public decreaseQuantity (): void {
    if (this.quantity > 1) {
      this.quantity--
      this.changedQuantity.emit(this.quantity)
    }
  }

  public increaseQuantity (): void {
    if (this.quantity < 99) {
      this.quantity++
      this.changedQuantity.emit(this.quantity)
    }
  }
}
