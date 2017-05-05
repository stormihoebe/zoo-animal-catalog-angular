import {Component, Input, Output, EventEmitter} from '@angular/core';
import  {Animal} from './animal.model';

@Component({
  selector: 'animal-new',
  template: `
    <button  class="btn btn-default" (click)="newButtonClicked()">Add New Animal</button>
    <div *ngIf="addNewAnimal">
      <div class="well" id="newAnimalForm">
        <h3>Add New Animal</h3>
        <div class="form-group">
          <input #newSpecies placeholder="Species" class="form-control">
        </div>
        <div class="form-group">
          <input #newName placeholder="Name" class="form-control">
        </div>
        <div class="form-group">
            <input #newDOB placeholder="Date of Birth" type ="date" class="form-control">
        </div>
        <div class="form-group">
          <label>Age Characteristic</label>
          <select #newAgeCharacteristic  class="form-control">
            <option value="Young">Young</option>
            <option value="Mature" >Mature</option>
            <option value="Senior" >Senior</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        <div class="form-group">
          <label>Sex:</label>
          <select #newSex  class="form-control">
            <option value="M">Male</option>
            <option value="F" >Female</option>
            <option value="N/A">N/A</option>
          </select>
        </div>
        <div class="form-group">
          <label>Diet:</label>
          <select #newDiet  class="form-control">
            <option value="Carnivore">Carnivore</option>
            <option value="Herbivore" >Herbivore</option>
            <option value="Omnivore" >Omnivore</option>
            <option value="Other" >Other</option>
          </select>
        </div>
        <div class="form-group">
          <label>Location:</label>
          <select #newLocation  class="form-control">
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
          <input #newCaregivers class="form-control" type="number">
        </div>
        <div class="form-group">
          <label>Likes:</label>
          <input #newLikes class="form-control">
        </div>
        <div class="form-group">
          <label>Dislikes:</label>
          <input #newDislikes class="form-control">
        </div>
        <div class="form-group">
          <input #newImageUrl placeholder="Image Url (leave blank if image does not fit standards)"class="form-control">
        </div>
        <div class="form-group">
          <input #newImageAlt placeholder="Image Description" class="form-control">
        </div>
        <button class="btn btn-default" (click)="submitForm(newSpecies.value, newName.value, newDOB.value, newAgeCharacteristic.value, newDiet.value, newLocation.value, newCaregivers.value, newSex.value, newLikes.value, newDislikes.value, newImageUrl.value, newImageAlt.value);addNewAnimal=false;">Add</button>
        <button (click)="addNewAnimal=false" class="btn btn-default">Cancel</button>
      </div>
    </div>
  `

})

export class AnimalNewComponent{
  @Output() newAnimalSender = new EventEmitter();

    submitForm(species: string, name: string, dob: string, ageCaracteristic: string, diet: string, location: string, caregivers: string, sex: string, likes: string, dislikes: string, imageUrl: string, imageAlt: string){
      if (imageUrl === "") {
        imageUrl = "https://image.ibb.co/mqZw85/zebra.png";
      }
      if (imageAlt === ""){
        imageAlt = "square icon with generic animal image";
      }
      var newAnimalToAdd: Animal = new Animal (species, name, dob, ageCaracteristic, diet, location, parseInt(caregivers), sex, likes, dislikes, imageUrl, imageAlt);
      this.newAnimalSender.emit(newAnimalToAdd);
      console.log(species, name, dob, ageCaracteristic, diet, location, parseInt(caregivers), sex, likes, dislikes, imageUrl, imageAlt)
    }

    addNewAnimal: boolean = false;

    newButtonClicked() {
      this.addNewAnimal = true;
    }
}
