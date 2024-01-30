import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { WizardComponent } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';

@NgModule({
  declarations: [AppComponent, WizardComponent ,WizardStepComponent],
  imports: [CommonModule, BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
