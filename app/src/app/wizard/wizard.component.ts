import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.css'
})
export class WizardComponent {
  @Output('currentStep') currentStep = new EventEmitter<string>();
  public moveBack(){
    this.currentStep.emit("previous");
  }
  public moveFront(){
    this.currentStep.emit("next");
  }
}
