import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main.component';
import { FormComponent } from './component/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoticeComponent } from './component/notice.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    NoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
