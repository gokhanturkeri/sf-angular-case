import { moduleMetadata } from '@storybook/angular';
import { ProductCardsComponent } from '../app/product-cards/product-cards.component';

export default {
  title: 'Components/ProductCards',
  component: ProductCardsComponent,
  decorators: [
    moduleMetadata({
      declarations: [ProductCardsComponent],
    }),
  ],
};

export const Default = () => ({
  props: {
    selectedCategory: {
      name: 'Category 1',
      products: [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 15 },
      ],
    },
  },
});
