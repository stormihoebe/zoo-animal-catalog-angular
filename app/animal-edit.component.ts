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
          <label>Sex:</label>
          <select ng-model="data.childSelectedAnimal.sex" [(ngModel)]="childSelectedAnimal.sex"  class="form-control">
            <option value="M">Male</option>
            <option value="F" >Female</option>
            <option value="N/A" >N/A</option>
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
        <div class="form-group">
          <label>Location:</label>
          <select ng-model="data.childSelectedAnimal.location" [(ngModel)]="childSelectedAnimal.location"  class="form-control">
            <option value="Zone 1">Zone 1</option>
            <option value="Zone 2" >Zone 2</option>
            <option value="Zone 3" >Zone 3</option>
            <option value="Zone 4" >Zone 4</option>
            <option value="Zone 5" >Zone 5</option>
            <option value="Other" >Other</option>
          </select>
        </div>
        <div class="form-group">
          <label>Number of Caretakers:</label>
          <input [(ngModel)]="childSelectedAnimal.caretakers" class="form-control" type="number">
        </div>
        <div class="form-group">
          <label>Likes:</label>
          <input [(ngModel)]="childSelectedAnimal.likes" class="form-control">
        </div>
        <div class="form-group">
          <label>Dislikes:</label>
          <input [(ngModel)]="childSelectedAnimal.dislikes" class="form-control">
        </div>
        <div class="form-group">
          <label>Image URL:</label>
          <input [(ngModel)]="childSelectedAnimal.imageUrl" class="form-control">
        </div>
        <div class="form-group">
          <label>Image Description: </label><span class="pull-right">(For accessability standards)</span>
          <input [(ngModel)]="childSelectedAnimal.imageAlt" class="form-control">
        </div>
        <button (click)="doneButtonClicked()" class="btn btn-default pull-right">Submit Changes</button>
        <button (click)="doneButtonClicked()" class="btn btn-default">Cancel</button>
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
