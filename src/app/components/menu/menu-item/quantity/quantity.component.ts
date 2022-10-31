import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {

  @Output()
  public changedQuantity = new EventEmitter<number>();

  @Input()
  public quantity:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public decreaseQuantity(): void {
    if (this.quantity > 1){
      this.quantity--;
      this.changedQuantity.emit(this.quantity);
    }
  }

  public increaseQuantity(): void {
    if (this.quantity < 99) {
      this.quantity++;
      this.changedQuantity.emit(this.quantity);
    }

  }
}
