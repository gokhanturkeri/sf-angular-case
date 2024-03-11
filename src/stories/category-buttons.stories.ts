import { moduleMetadata } from '@storybook/angular';
import { CategoryButtonsComponent } from '../app/category-buttons/category-buttons.component';

export default {
  title: 'Components/CategoryButtons',
  component: CategoryButtonsComponent,
  decorators: [
    moduleMetadata({
      declarations: [CategoryButtonsComponent],
    }),
  ],
};

export const Default = () => ({
  props: {
    categories: [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
    ],
  },
});
