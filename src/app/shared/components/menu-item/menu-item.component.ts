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
  @Input() public order = 0
  // @Input() public quantity = 0
  //
  // @Output() public changedQuantity = new EventEmitter<number>()
  //
  // public onChangeQuantity (changedQuantity: number): void {
  //   this.changedQuantity.emit(changedQuantity)
  // }
}
