import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvamGridModule } from '@avam-grid/index';
import { AvamLoggerModule } from '@avam-logger/index';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AvamGridModule,
    AvamLoggerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
