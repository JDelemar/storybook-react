import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

const TempComponent = () => {
  return (
    <>
      <h2>TempComponent works!!</h2>
      <p>Hosted on GitHub Pages</p>
    </>
  );
};

export default {
  title: 'Web/Test',
  component: TempComponent,
} as ComponentMeta<typeof TempComponent>;

const Template: ComponentStory<typeof TempComponent> = (args) =>
  <TempComponent />;

export const TestComponent = Template.bind({});
TestComponent.args = {};
