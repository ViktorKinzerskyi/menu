import {Injectable, OnInit} from '@angular/core';
import { MenuItem } from '../shared/interfaces/menu-item.interface';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class MenuItemsService{

  constructor(private http: HttpClient) { }

  fetchPosts (){
     return this.http.get<MenuItem[]>('assets/db/MenuItems.json')
  }
}
