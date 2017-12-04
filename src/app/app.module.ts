import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// FormsModule is required to use "ngModel" in your inputs
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule is required to use "ngModel" in your inputs
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
