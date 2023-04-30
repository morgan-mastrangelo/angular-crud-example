import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import {FormsModule} from "@angular/forms";
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule,
    FormsModule
  ]
})
export class FruitsModule { }
