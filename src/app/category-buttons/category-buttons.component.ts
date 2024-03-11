import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-buttons',
  templateUrl: './category-buttons.component.html',
  styleUrls: ['./category-buttons.component.css']
})
export class CategoryButtonsComponent {
  @Input() categories: any[] | undefined;
  @Output() categorySelected = new EventEmitter<any>();

  selectCategory(category: any) {
    this.categorySelected.emit(category);
  }
  
}
