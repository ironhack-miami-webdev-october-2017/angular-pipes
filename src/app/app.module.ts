import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// FormsModule is required to use "ngModel" in your inputs
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CryptoTrackerComponent } from './crypto-tracker/crypto-tracker.component';
import { DateChangerComponent } from './date-changer/date-changer.component';


@NgModule({
  declarations: [
    AppComponent,
    CryptoTrackerComponent,
    DateChangerComponent
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
