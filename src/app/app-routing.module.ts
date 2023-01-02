import { EditComponent } from './modules/main/pages/edit/edit.component';
import { CreateComponent } from './modules/main/pages/create/create.component';
import { MasterComponent } from './modules/main/pages/master/master.component';
import { FrameComponent } from './core/pages/frame/frame.component';
import { LoginComponent } from './core/pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent
  },
  {
    path: '',
    title: 'Frame',
    component: FrameComponent,
    children: [
      {
        path: '',
        title: 'Home',
        component: MasterComponent
      },
      {
        path: 'create',
        title: 'Create',
        component: CreateComponent
      },
      {
        path: 'edit',
        title: 'Edit',
        component: EditComponent
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
