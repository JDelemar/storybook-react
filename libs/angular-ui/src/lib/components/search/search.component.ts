import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'aui-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() minimumLength = 1;
  @Input() isDisplayingClearIcon = true;
  @Input() isDisplayingSearchIcon = true;
  @Input() placeHolder = 'Search...';
  @Output() result = new EventEmitter<string>();
  inputControl = new FormControl();
  userInput$ = this.inputControl.valueChanges.pipe(
    debounceTime(300),
    tap(value => {
      // console.log(`inputControl value: '${value}'`);
      if (
        value !== undefined
        && value !== null
        && (value.length >= this.minimumLength || value === '')
      )
      this.result.emit(value);
    }),
  );

  constructor() { }

  ngOnInit(): void {
  }

  clearSelection(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    this.inputControl.setValue('');
    // this.userEntered.emit('');
  }
}
