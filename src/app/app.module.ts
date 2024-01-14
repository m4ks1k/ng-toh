import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HorsesComponent } from './horses/horses.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HorsesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
