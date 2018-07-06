import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeoryComponent } from './teory/teory.component';
import {FormsModule} from '@angular/forms';
import { Theory2Component } from './theory2/theory2.component';

@NgModule({
  declarations: [
    AppComponent,
    TeoryComponent,
    Theory2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
