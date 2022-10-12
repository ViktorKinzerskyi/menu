import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {

  @Output()
  changedQuantity = new EventEmitter<number>();

  @Input()
  quantity:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  decreaseQuantity() {
    if (this.quantity > 1){
      this.quantity--;
      this.changedQuantity.emit(this.quantity);
    }
  }

  increaseQuantity() {
    if (this.quantity < 99) {
      this.quantity++;
      this.changedQuantity.emit(this.quantity);
    }

  }
}
