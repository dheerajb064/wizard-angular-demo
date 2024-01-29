import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  currentStep = 1;
  public getCurrentStep(navigationValue:string){
    if(navigationValue === "previous"){
      this.currentStep -= 1;
    }
    else {
      this.currentStep += 1;
    }
  }
}
