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
  quantity = 1;

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
    this.quantity++;
    this.changedQuantity.emit(this.quantity);

  }
}
