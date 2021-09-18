import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GustosPageRoutingModule } from './gustos-routing.module';

import { GustosPage } from './gustos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GustosPageRoutingModule
  ],
  declarations: [GustosPage]
})
export class GustosPageModule {}
