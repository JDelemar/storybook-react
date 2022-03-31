import React from 'react';

import { Meta, ComponentStory } from '@storybook/react';

import { DateTimePickerComponent } from './date-time-picker.component';

export default {
  component: DateTimePickerComponent,
  title: 'React / Obsidian',
} as Meta;

export const DateTimePicker: ComponentStory<typeof DateTimePickerComponent> = (args) =>
  <DateTimePickerComponent {...args}
  />;

  DateTimePicker.args = {
    fieldName: 'Start Date',
  };
