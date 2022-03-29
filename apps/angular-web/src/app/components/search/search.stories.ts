import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, Input } from '@angular/core';

import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { FaMaterialModule } from '@component-monorepo/angular-material';

import { SearchComponent } from '@component-monorepo/angular-ui';

@Component({
  selector: 'storybook-temp',
  template: `
    <h2>Search</h2>
    
    <h4>TODO:</h4>
    <ul>
    </ul>

    <h4>Features:</h4>
    <ul>
      <li>Debounce</li>
      <li>Output what a user is searching for</li>
      <li>Minimum length for search</li>
      <li>Display</li>
      <ul>
        <li>Clear icon</li>
        <li>Search icon</li>
      </ul>
    </ul>

    <h4>Results:</h4>
    <ul>
      <li>search for: {{searchFor}}</li>
    </ul>

    <aui-search
      [placeHolder]="placeHolder"
      [minimumLength]="minimumLength"
      [isDisplayingClearIcon]="isDisplayingClearIcon"
      [isDisplayingSearchIcon]="isDisplayingSearchIcon"
      (result)="searchFor = $event"
    ></aui-search>
  `,
})
class TempComponent {
  @Input() minimumLength = 1;
  @Input() isDisplayingClearIcon = true;
  @Input() isDisplayingSearchIcon = true;
  @Input() placeHolder!: string;
  searchFor!: string;

  constructor() {
    console.log('search.component.stories');
  }
}

export default {
  title: 'UIAngular/Search',
  component: TempComponent,
  decorators: [
    moduleMetadata({
      declarations: [SearchComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        FaMaterialModule,
      ],
      entryComponents: [],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const SearchInput: Story = Template.bind({});

SearchInput.parameters = {
  component: TempComponent,
};

SearchInput.args = {
  minimumLength: 1,
  placeHolder: 'Storybook search...',
  isDisplayingClearIcon: true,
  isDisplayingSearchIcon: true,
};
