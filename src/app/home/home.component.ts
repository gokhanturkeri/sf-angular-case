import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: any[] | undefined;
  selectedCategory: any;
  basketItems: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCategories().subscribe(data => {
      this.categories = data.categories;
    });
  }

  onCategorySelected(category: any) {
    this.selectedCategory = category;
  }
}
