import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GustosPage } from './gustos.page';

const routes: Routes = [
  {
    path: '',
    component: GustosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GustosPageRoutingModule {}
