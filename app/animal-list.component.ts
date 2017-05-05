import {Component, Input, Output, EventEmitter} from '@angular/core';
import  {Animal} from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-md-2">

      </div>
      <div class="col-md-2">
        <h3>Species</h3>
      </div>
      <div class="col-md-1">
        <h3>Name</h3>
      </div>
      <div class="col-md-2">
        <h3>Location</h3>
      </div>
      <div class="col-md-2">
        <h3>Details</h3>
      </div>
      <div class="col-md-2">
        <h3>Likes/Dislikes</h3>
      </div>
      <div class="col-md-1">

      </div>
    </div>
    <div class="row well" *ngFor="let currentAnimal of childAnimalList">
      <div class="col-md-2">
        <img src={{currentAnimal.imageUrl}} alt={{currentAnimal.imageAlt}} width="100%">
      </div>
      <div class="col-md-2">
        <h4>{{currentAnimal.species}}</h4>
      </div>
      <div class="col-md-1">
        <h4>{{currentAnimal.name}}</h4>
      </div>
      <div class="col-md-2">
        <h4>{{currentAnimal.location}}</h4>
      </div>
      <div class="col-md-2">
        <p><strong>DOB:</strong> {{currentAnimal.dob}} ({{currentAnimal.ageCaracteristic}})<p>
        <p><strong>Sex:</strong> {{currentAnimal.sex}}<p>
        <p><strong>Diet:</strong> {{currentAnimal.diet}}<p>
        <p><strong>Caretakers:</strong> {{currentAnimal.caretakers}}<p>
      </div>
      <div class="col-md-2">
        <p><strong>Likes:</strong> {{currentAnimal.likes}}<p>
        <p><strong>Dislikes: </strong> {{currentAnimal.dislikes}}<p>
      </div>
      <div class="col-md-1">
        <button name="button" class="btn btn-default" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
      </div>

    </div>
  </div>
  `

})



export class AnimalListComponent{
@Input()childAnimalList: Animal[];
@Output()clickSender = new EventEmitter();
editButtonHasBeenClicked(animalToEdit: Animal) {
  console.log("I was clicked")
  this.clickSender.emit(animalToEdit);
}
}
