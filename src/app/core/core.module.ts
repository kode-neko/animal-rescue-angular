import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { MainBarComponent } from './components/main-bar/main-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon'
import { FrameComponent } from './pages/frame/frame.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SwitchLangComponent } from './components/switch-lang/switch-lang.component';
import { SwitchThemeComponent } from './components/switch-theme/switch-theme.component';
import { MenuLangComponent } from './components/menu-lang/menu-lang.component';
import { MenuThemeComponent } from './components/menu-theme/menu-theme.component';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    FooterComponent,
    MainBarComponent,
    FrameComponent,
    SwitchLangComponent,
    SwitchThemeComponent,
    MenuLangComponent,
    MenuThemeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    // Own
    SharedModule,
    // MUI
    MatProgressSpinnerModule, 
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatListModule,
    MatGridListModule,
    RouterModule
  ],
exports: [
  FrameComponent
]  
})
export class CoreModule { }
