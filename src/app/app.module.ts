import { MainModule } from './modules/main/main.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    MainModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
