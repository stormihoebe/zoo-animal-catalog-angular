import {Component, Input, Output, EventEmitter} from '@angular/core';
import  {Animal} from './animal.model';

@Component({
  selector: 'animal-edit',
  template: `
  <div *ngIf="childSelectedAnimal">
      <div class="well" id="editAnimalForm">
        <h3>Edit {{childSelectedAnimal.name}} the {{childSelectedAnimal.species}}</h3>
        <div class="form-group">
          <label>Species:</label>
          <input [(ngModel)]="childSelectedAnimal.species" class="form-control">
        </div>
        <div class="form-group">
          <label>Name:</label>
          <input [(ngModel)]="childSelectedAnimal.name" class="form-control">
        </div>
        <div class="form-group">
          <label>Date of Birth:</label>
          <input [(ngModel)]="childSelectedAnimal.dob" class="form-control" type="date">
        </div>
        <div class="form-group">
          <label>Age Characteristic</label>
          <select ng-model="data.childSelectedAnimal.ageCaracteristic" [(ngModel)]="childSelectedAnimal.ageCaracteristic"  class="form-control">
            <option class="opt" value="Young">Young</option>
            <option class="opt" value="Mature" >Mature</option>
            <option class="opt" value="Senior" >Senior</option>
            <option class="opt" value="Unknown">Unknown</option>
          </select>
        </div>
        <div class="form-group">
          <label>Diet:</label>
          <select ng-model="data.childSelectedAnimal.diet" [(ngModel)]="childSelectedAnimal.diet"  class="form-control">
            <option value="Carnivore">Carnivore</option>
            <option value="Herbivore" >Herbivore</option>
            <option value="Omnivore" >Omnivore</option>
            <option value="Other" >Other</option>
          </select>
        </div>
        <button (click)="doneButtonClicked()" class="btn btn-default">Submit Changes</button>
      </div>
    </div>
  `

})

export class AnimalEditComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
