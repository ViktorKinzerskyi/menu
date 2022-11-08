import {Component, EventEmitter, Input, Output} from '@angular/core'
import { MenuItem } from '../../interfaces/menu-item.interface'
import { CookingItemsService } from '../../services/cooking-items.service'

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
  }

  @Input() public orderId = 0
  @Input() public orderItemQuantity = 0

  @Output() public changedQuantity = new EventEmitter<number>()
  @Output() public addMenuItem = new EventEmitter<any>()

  @Input() public defaultQuantity = 1

  public onChangeQuantity (changedQuantity: number): void {
    this.changedQuantity.emit(changedQuantity)
  }

  public onAdd (): void {
    this.defaultQuantity = 1

    this.addMenuItem.emit()
    // console.log(this.defaultQuantity)
  }
}
