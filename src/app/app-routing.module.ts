import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncObservableComponent } from './autocomplete/async-observable/async-observable.component';

const routes: Routes = [
  { path: 'autocomplete', component: AsyncObservableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
