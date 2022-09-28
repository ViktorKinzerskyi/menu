import { Injectable } from '@angular/core';

export interface MenuItem {
  imgPath: string,
  name: string,
  description: string,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  menuItems: MenuItem[] = [
    {
      imgPath: 'assets/images/pizza--v1.png',
      name: 'Pizza',
      description: '(Tomatoes, cheese, beacon, olives, olives)',
      price: 5
    },
    {
      imgPath: 'assets/images/rice-bowl.png',
      name: 'Rice bowl',
      description: '(home made noodle, smoked BBQ, green onions, shitake mushrooms, boiled egg)',
      price: 9
    },
    {
      imgPath: 'assets/images/hamburger.png',
      name: 'Hamburger',
      description: '(Pineapple, onion, tomato, beef, BBQ sauce)',
      price: 8
    },
    {
      imgPath: 'assets/images/pizza--v1.png',
      name: 'Pizza',
      description: '(Tomatoes, cheese, beacon, olives, olives)',
      price: 5
    },
    {
      imgPath: 'assets/images/rice-bowl.png',
      name: 'Rice bowl',
      description: '(home made noodle, smoked BBQ, green onions, shitake mushrooms, boiled egg)',
      price: 9
    },
    {
      imgPath: 'assets/images/hamburger.png',
      name: 'Hamburger',
      description: '(Pineapple, onion, tomato, beef, BBQ sauce)',
      price: 8
    },
    {
      imgPath: 'assets/images/pizza--v1.png',
      name: 'Pizza',
      description: '(Tomatoes, cheese, beacon, olives, olives)',
      price: 5
    },
    {
      imgPath: 'assets/images/rice-bowl.png',
      name: 'Rice bowl',
      description: '(home made noodle, smoked BBQ, green onions, shitake mushrooms, boiled egg)',
      price: 9
    },
    {
      imgPath: 'assets/images/hamburger.png',
      name: 'Hamburger',
      description: '(Pineapple, onion, tomato, beef, BBQ sauce)',
      price: 8
    },
    {
      imgPath: 'assets/images/pizza--v1.png',
      name: 'Pizza',
      description: '(Tomatoes, cheese, beacon, olives, olives)',
      price: 5
    },
    {
      imgPath: 'assets/images/rice-bowl.png',
      name: 'Rice bowl',
      description: '(home made noodle, smoked BBQ, green onions, shitake mushrooms, boiled egg)',
      price: 9
    },
    {
      imgPath: 'assets/images/hamburger.png',
      name: 'Hamburger',
      description: '(Pineapple, onion, tomato, beef, BBQ sauce)',
      price: 8
    },
    {
      imgPath: 'assets/images/pizza--v1.png',
      name: 'Pizza',
      description: '(Tomatoes, cheese, beacon, olives, olives)',
      price: 5
    }
  ]

  constructor() { }
}
