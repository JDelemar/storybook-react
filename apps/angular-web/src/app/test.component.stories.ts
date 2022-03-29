import { Component } from '@angular/core';
import { moduleMetadata, Story, Meta } from '@storybook/angular';

@Component({
  selector: 'storybook-temp',
  template: `
    <h2>TempComponent works!!!</h2>
    <p>Hosted on GitHub Pages</p>
  `,
})
class TempComponent {}

export default {
  title: 'Web/Test',
  component: TempComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta;

const Template: Story<TempComponent> = (args: TempComponent) => ({
  props: args,
});

export const TestComponent = Template.bind({});
TestComponent.args = {};
