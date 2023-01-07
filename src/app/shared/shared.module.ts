import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { HeaderSubPageComponent } from './components/header-sub-page/header-sub-page.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { InfoListComponent } from './components/info-list/info-list.component';
import { ModalComponent } from './components/modal/modal.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { DateFormatDirective } from './directives/date-format.directive';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    FormComponent,
    HeaderSubPageComponent,
    InfoCardComponent,
    InfoListComponent,
    ModalComponent,
    DateFormatDirective
  ],
  imports: [
    MatRadioModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule ,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    RouterModule
  ],
  exports: [
    HeaderSubPageComponent,
    InfoCardComponent,
    FormComponent
  ]
})
export class SharedModule { }
