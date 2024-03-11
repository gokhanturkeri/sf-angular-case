import { moduleMetadata } from '@storybook/angular';
import { BasketComponent } from '../app/basket/basket.component';

export default {
  title: 'Components/Basket',
  component: BasketComponent,
  decorators: [
    moduleMetadata({
      declarations: [BasketComponent],
    }),
  ],
};

export const Default = () => ({
  props: {
    basketItems: [
      { id: 1, name: 'Product 1', price: 10, quantity: 2 },
      { id: 2, name: 'Product 2', price: 15, quantity: 1 },
    ],
  },
});
