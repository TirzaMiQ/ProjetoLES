import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrocaComponent } from './troca.component';
import { TrocaRoutingModule } from './troca-routing.module';


@NgModule({
  declarations: [TrocaComponent],
  imports: [
    CommonModule,
    TrocaRoutingModule
  ]
})
export class TrocaModule { }
