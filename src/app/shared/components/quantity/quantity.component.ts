import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent {
  @Input() public quantity = 1;

  @Output() public changedQuantity = new EventEmitter<number>();

  public decreaseQuantity (): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.changedQuantity.emit(this.quantity);
    }
  }

  public increaseQuantity (): void {
    if (this.quantity < 99) {
      this.quantity++;
      this.changedQuantity.emit(this.quantity);
    }
  }
}
