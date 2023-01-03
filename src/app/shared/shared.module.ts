import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { InfoListComponent } from './components/info-list/info-list.component';
import { ModalComponent } from './components/modal/modal.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

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
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    CommonModule
  ],
  exports: [
    InfoCardComponent
  ]
})
export class SharedModule { }
