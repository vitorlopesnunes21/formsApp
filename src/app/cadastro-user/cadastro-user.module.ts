import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroUserPageRoutingModule } from './cadastro-user-routing.module';

import { CadastroUserPage } from './cadastro-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    CadastroUserPageRoutingModule
  ],
  declarations: [CadastroUserPage]
})
export class CadastroUserPageModule {}
