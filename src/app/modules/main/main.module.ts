import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { MasterComponent } from './pages/master/master.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    MasterComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    SharedModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ]
})
export class MainModule { }
