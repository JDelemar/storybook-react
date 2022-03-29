import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { FaMaterialModule } from '@component-monorepo/angular-material';

import {
  ProgressBarModule,
  ProgressBarService,
} from '@component-monorepo/angular-ui';

@Component({
  selector: 'storybook-temp',
  template: `
    <component-monorepo-progress-bar></component-monorepo-progress-bar>

    <h2>Progress Bar</h2>

    <p>Add the component </p>
    <ul>
      <li>Use the ProgressBarService to:</li>
      <ul>
        <li>Hide the progress bar with the hideProgressBar method</li>
        <li>Set the progress bar with the setProgressBar method:</li>
        <ul>
          <li>0-99 displays a progress bar in determinate mode from 0-99% completion</li>
          <li>>= 100 hides the progress bar</li>
          <li>undefined displays a progress bar in indeterminate mode</li>
        </ul>
      </ul>
    </ul>
  `,
  providers: [
    ProgressBarService,
  ],
})
class TempComponent implements OnInit, OnChanges {
  @Input() isVisible!: boolean;
  @Input() value!: string;

  constructor(private pbService: ProgressBarService) { }
  
  ngOnInit() {
    this.updateProgressBar();
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const change = changes[propName];

      if (!change.firstChange) {
        switch (propName) {
          case 'isVisible':
          case 'value':
            this.updateProgressBar();
            break;
          default:
            break;
        }
      }
    }
  }

  private updateProgressBar() {
    const progressBarValueNumber = this.value && !isNaN(+this.value) ?
      +this.value :
      undefined;
      
    if (this.isVisible) {
      this.pbService.setProgressBar(progressBarValueNumber);
    } else {
      this.pbService.hideProgressBar();
    }
  }
}

const Template: Story = (args) => ({
  props: args,
});

export default {
  title: 'UIAngular/ProgressBar',
  component: TempComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        FaMaterialModule,
        ProgressBarModule,
      ],
      entryComponents: [],
    }),
  ],
} as Meta;

export const ProgressBar: Story = Template.bind({});

ProgressBar.parameters = {
  component: TempComponent,
};

ProgressBar.args = {
  isVisible: true,
  value: '50',
};
