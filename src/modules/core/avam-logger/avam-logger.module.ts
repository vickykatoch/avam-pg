import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoggingService } from './app-logging-service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  providers : [
    AppLoggingService
  ]
})
export class AvamLoggerModule { }
