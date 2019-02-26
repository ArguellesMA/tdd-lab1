import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { currencies1 } from './currencies/currencies.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    currencies1
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,currencies1]
})
export class AppModule { }
