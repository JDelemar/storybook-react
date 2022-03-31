import React from 'react';

import { Meta, ComponentStory } from '@storybook/react';

import { SelectComponent } from './select.component';

export default {
  component: SelectComponent,
  title: 'React / Obsidian',
} as Meta;

export const Select: ComponentStory<typeof SelectComponent> = (args) =>
  <SelectComponent {...args}
  />;

  Select.args = {
    fieldName: 'Ice Cream',
    options: 'Vanilla,Chocolate,Strawberry',
  };
