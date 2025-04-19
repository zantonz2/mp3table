import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableMP3Component } from './components/table-mp3/table-mp3.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    TableMP3Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
