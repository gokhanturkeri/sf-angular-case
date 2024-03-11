import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent {
  @Input() selectedCategory: any;
  @Input() basketItems: any[] = [];

  constructor() { }

  addToBasket(product: any) {
    const index = this.basketItems.findIndex(item => item.id == product.id);
    if (index !== -1) {
      this.basketItems[index].quantity++;
    } else {
      this.basketItems.push({ ...product, quantity: 1 });
    }
  }

  removeFromBasket(product: any) {
    const index = this.basketItems.findIndex(item => item.id == product.id);
    if (index !== -1) {
      if (this.basketItems[index].quantity == 1)
        this.basketItems.splice(index, 1);
      else
        this.basketItems[index].quantity--;
    } 
  }
}
