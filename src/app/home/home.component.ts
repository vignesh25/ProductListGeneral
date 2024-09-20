import { Component,Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { cloneDeep } from 'lodash';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showHeader: boolean = true;
  menuList = [
    {
      name: 'Fried Rice',
      cost: 'Rs 500',
      image: 'assets/images/food.jpg',
      description: 'Delicious fried rice with veggies and optional chicken toppings.',
      rating: 4.3,
      isVeg: true
    },
    {
      name: 'Biryani',
      cost: 'Rs 700',
      image: 'assets/images/f3.jpeg',
      description: 'Rich and flavorful Biryani with a blend of spices and tender meat.',
      rating: 4.7,
      isVeg: false
    },
    {
      name: 'Noodles',
      cost: 'Rs 600',
      image: 'assets/images/f2.jpeg',
      description: 'Stir-fried noodles with a mix of fresh vegetables and sauces.',
      rating: 4.1,
      isVeg: false
    },
    {
      name: 'Sambar Rice',
      cost: 'Rs 500',
      image: 'assets/images/f5.jpeg',
      description: 'South Indian style Sambar Rice served with a side of crispy papad.',
      rating: 3.8,
      isVeg: true
    }
  ];
  displayMenuList: any[]
  constructor(private router: Router) {
    this.displayMenuList = cloneDeep(this.menuList)
  }

  // Navigate to product description to view description
  viewDescription(menuList: any) {
    this.router.navigate(['/description', { data: JSON.stringify(menuList) }]);
  }

  // Filter dishes using searched value
  filterSearchedDishes (event: any) {
    this.displayMenuList = []
    if (event) {
      this.displayMenuList = this.menuList.filter((item: any) => {
        return item.name.toLowerCase().includes(event.toLowerCase());
      });
    } else {
      this.displayMenuList = cloneDeep(this.menuList)
    }
  }

  // toggle on / off tol filter veg items from menu
  toggleDishes (event: boolean) {
    if (event) {
      this.displayMenuList = this.menuList.filter((item: any) => {
        return item.isVeg === event;
      });
    } else {
      this.displayMenuList = cloneDeep(this.menuList)
    }
  }
}
