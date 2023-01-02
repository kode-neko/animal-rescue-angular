import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { InfoListComponent } from './components/info-list/info-list.component';
import { ModalComponent } from './components/modal/modal.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    FormComponent,
    HeaderPageComponent,
    InfoCardComponent,
    InfoListComponent,
    ModalComponent
  ],
  imports: [
    MatCardModule,
    CommonModule
  ]
})
export class SharedModule { }
