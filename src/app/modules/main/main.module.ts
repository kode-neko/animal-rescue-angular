import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { MasterComponent } from './pages/master/master.component';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    MasterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
