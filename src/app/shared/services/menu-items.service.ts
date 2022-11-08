import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService{

  public constructor (private readonly http: HttpClient) { }

  public fetchPosts (): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>('assets/db/MenuItems.json');
  }
}
