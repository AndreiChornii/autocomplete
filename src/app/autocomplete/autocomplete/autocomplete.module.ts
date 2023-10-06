import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncObservableComponent } from '../async-observable/async-observable.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterIfDirective } from '../directives/filter-if.directive';
import { SelectedElementDirective } from '../directives/selected-element.directive';
import { HistoryPipe } from '../pipes/history.pipe';

@NgModule({
  declarations: [
    AsyncObservableComponent,
    FilterIfDirective,
    SelectedElementDirective,
    HistoryPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AutocompleteModule { }
