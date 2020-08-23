import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoryComponent } from './bory/bory.component';

const routes: Routes = [
  {path: 'home', component: BoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
