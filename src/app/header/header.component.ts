import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() showHeader: boolean = true;
  @Output() filterDishes =  new EventEmitter<string>();
  @Output() toggleDishes =  new EventEmitter<boolean>();
  isToggleOn: boolean = false

  constructor() {

  }

  // Search for dishes
  searchForDishes (event: any) {
    this.filterDishes.emit(event.target.value)
  }

  // For filtering Veg dishes with on / off 
  toggle (event: any) {
    this.isToggleOn = event.checked
    this.toggleDishes.emit(event.checked)
  }
}
