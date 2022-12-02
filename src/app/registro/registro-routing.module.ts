import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RegistroPage } from './registro.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule],
  exports: [RouterModule],
})
export class RegistroPageRoutingModule {}
