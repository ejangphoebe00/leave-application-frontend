import { Component } from '@angular/core';
import { Location } from '@angular/common';
// import { BaseMenuItem } from 'src/app/core';

import { Store } from "@ngrx/store";
import { addMenuItemFormSubmitted } from "./state/menus";

const MenuItemPlaceholder: BaseMenuItem = {
  name: "French Fries",
  price: "299.00",
  tagline: "Crispy goodness",
  description:
    "A plate of light and Crispy French fries using Idaho potatoes and peanut oil",
  image:
    "https://as2.ftcdn.net/jpg/02/13/09/500_F_213180964_DfqvRIHJ0D3t9duYUROXuQ011AgJIaM.jpg",
  calories: 410,
  category: "sides",
};

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  menuItem = MenuItemPlaceholder;

  constructor(
    private location: Location,
    private store: Store
  ) {}

  ngOnInit(): void {
  }

}
