import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { WizardComponent } from './wizard/wizard.component';

@NgModule({
  declarations: [AppComponent, WizardComponent],
  imports: [CommonModule, BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
