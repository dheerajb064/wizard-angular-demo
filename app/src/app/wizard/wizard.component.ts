import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.css'
})
export class WizardComponent implements AfterContentInit{
  @ContentChildren(WizardStepComponent) steps : QueryList<WizardStepComponent> = new QueryList<WizardStepComponent>();
  currentStepIndex : number = 0;
  ngAfterContentInit(): void {
    this.steps.toArray()[this.currentStepIndex].active = true;
  }
  public moveBack(){
    if(this.currentStepIndex > 0){
      this.steps.toArray()[this.currentStepIndex].active=false;
      this.currentStepIndex--;
      this.steps.toArray()[this.currentStepIndex].active=true;
    }
  }
  public moveFront(){
    if(this.currentStepIndex < this.steps.length - 1){
      this.steps.toArray()[this.currentStepIndex].active=false;
      this.currentStepIndex++;
      this.steps.toArray()[this.currentStepIndex].active=true;
    }
  }
}
