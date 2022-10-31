import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItemsService} from "../../services/menu-items.service";
import {MenuItem} from "../../shared/interfaces/menu-item.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  public menuItems: MenuItem[] = [];

  constructor(private menuItemsService: MenuItemsService) { }

  ngOnInit(): void {
    this.subscription = this.menuItemsService.fetchPosts().subscribe( menuItems => {
      this.menuItems = menuItems;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
