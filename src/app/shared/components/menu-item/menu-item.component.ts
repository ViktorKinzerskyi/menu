import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() public menuItem: MenuItem = {
    imgPath: '',
    name: '',
    description: '',
    price: 0
  };

  @Input() public orderId = 0;
  @Input() public orderItemQuantity = 0;

  @Output() public changedQuantity = new EventEmitter<number>();

  quantity = 1;

  public onChangeQuantity (changedQuantity: number): void {
    this.quantity = changedQuantity;
  }

  public onAdd (): void {
    this.changedQuantity.emit(this.quantity);
    this.quantity = 1;
  }
}
